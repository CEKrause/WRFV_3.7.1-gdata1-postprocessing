;   Example script to produce plots for a WRF real-data run,
;   with the ARW coordinate dynamics option.

load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_code.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/wrf/WRFUserARW.ncl"
;load "./WRFUserARW.ncl"

begin
;
; The WRF ARW input file.  
; This needs to have a ".nc" appended, so just do it.
  a = addfile("wrfout_d02_1989-04-11_00:00:00.nc","r")


; We generate plots, but what kind do we prefer?
  type = "x11"
; type = "pdf"
; type = "ps"
; type = "ncgm"
  wks = gsn_open_wks(type,"plt_Surface3")

; Set some Basic Plot options
  res = True
  res@MainTitle                   = "REAL-TIME WRF"
  pltres = True
  mpres = True

; Work out boundaries for the plot
   lat2d =  a->XLAT
   latx = dimsizes(lat2d)
   print(latx)
   lon2d = a->XLONG

; Where is the storm centred?
   latmid = -26.32
   lonmid = 112.18

; Work out index for new plot edge
   latmax = latmid + 2
   latmin = latmid - 2
   lonmax = lonmid + 2
   lonmin = lonmid - 2

; Subset the data
  opt = True
  loc  = wrf_user_ll_to_ij(a,(/lonmin,lonmax/),(/latmin,latmax/),opt)
  loc = loc-1          ; To convert to NCL subscripts

;---Use "where" statement to get subset of lat/lon range
;  lon2d@_FillValue = default_fillvalue(typeof(lon2d))
;  lat2d@_FillValue = default_fillvalue(typeof(lat2d))

;  lat_sub1 = where(lat2d.lt.latmin.or.lat2d.gt.latmax .or. \
;                   lon2d.lt.lonmin.or.lon2d.gt.lonmax, \
;                   lat2d@_FillValue, lat2d)
;  lon_sub1 = where(lat2d.lt.latmin.or.lat2d.gt.latmax .or. \
;                   lon2d.lt.lonmin.or.lon2d.gt.lonmax, \
;                   lon2d@_FillValue, lon2d)

  
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Choose the time you want to plot
  mytime = "1989-04-15_00:00:00"
  times = wrf_user_getvar(a,"times",-1)  ; get all times in the file
  ntimes = dimsizes(times)         ; number of times in the file
  time = str_match_ind_ic(times,mytime)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;  do it = 0,ntimes-1               ; TIME LOOP

    print("Working on time: " + mytime )
    res@TimeLabel = times(time)   ; Set Valid time to use on plots

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; First get the variables we will need        

    
    slp = wrf_user_getvar(a,"slp",time)  ; slp
      wrf_smooth_2d( slp, 3 )          ; smooth slp
    tc = wrf_user_getvar(a,"T2",time)    ; tc 
      tc@description = "2 m Air Temperature"
      tc@units = "C"
    tc_sub = tc(loc(1,0):loc(1,1),loc(0,0):loc(0,1))
    tc_sub@description = tc@description
    u  = wrf_user_getvar(a,"U10",time)    ; 3D U at mass points
    v  = wrf_user_getvar(a,"V10",time)    ; 3D V at mass points
      u@units = "m/s"
      v@units = "m/s"
    u_sub = u(loc(1,0):loc(1,1),loc(0,0):loc(0,1))
    u_sub@description = u@description
    v_sub = v(loc(1,0):loc(1,1),loc(0,0):loc(0,1))
    v_sub@description = v@description


; Calculate total wind intensity
    wind = abs(u_sub) + abs(v_sub)
    wind@units = "m/s"
    winddims = dimsizes(wind)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    ; Plotting options for wind                
      opts = res                          
      opts@mpMinLatF = latmin
      opts@mpMaxLatF = latmax
      opts@mpMinLonF = lonmin
      opts@mpMaxLonF = lonmax
      opts@cnFillOn = True  
      opts@cnLinesOn = True
      ;opts@ContourParameters = (/ 0., 5., 50./)
      opts@gsnSpreadColorEnd = -3  ; End third from the last color in color map
      contour_wind = wrf_contour(a,wks,wind,opts)
 ;     dum2 = gsn_add_polymarker(wks,contour_wind,lon_sub2,lat_sub2,opts)
      delete(opts)

    ; Plotting options for Wind Vectors                 
      opts = res          
      opts@FieldTitle = "Wind"    ; overwrite Field Title
     ; opts@NumVectors = 15        ; density of wind barbs
      vector = wrf_vector(a,wks,u_sub,v_sub,opts)
      delete(opts)


    ; MAKE PLOTS                                       
     plot = wrf_map_overlays(a,wks,(/contour_wind,vector/),pltres,mpres)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;  end do        ; END OF TIME LOOP

end
