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

; Work out boundaries for the plot
  lat =  a->XLAT
  latx = dimsizes(lat)
  lon = a->XLONG
  latmid=latx(1)/2
  lonmid=latx(2)/2

; Set some Basic Plot options
  res = True
  res@MainTitle                   = "REAL-TIME WRF"
  pltres = True
  mpres = True

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
    tc = wrf_user_getvar(a,"tc",time)    ; 3D tc 
      tc@description = "Surface Air Temperature"
      tc@units = "C"
    u  = wrf_user_getvar(a,"ua",time)    ; 3D U at mass points
    v  = wrf_user_getvar(a,"va",time)    ; 3D V at mass points
      u@units = "m/s"
      v@units = "m/s"


; Calculate total wind intensity

    wind = abs(u) + abs(v)
    wind@units = "m/s"
    winddims = dimsizes(wind)
    print(winddims)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    ; Plotting options for wind                
      opts = res                          
      opts@cnFillOn = True  
      opts@cnLinesOn = True
      ;opts@ContourParameters = (/ 0., 5., 50./)
      opts@gsnSpreadColorEnd = -3  ; End third from the last color in color map
      contour_wind = wrf_contour(a,wks,wind(0,:,:),opts)
      delete(opts)

    ; Plotting options for Wind Vectors                 
      opts = res          
      opts@FieldTitle = "Wind"    ; overwrite Field Title
      opts@NumVectors = 15        ; density of wind barbs
      vector = wrf_vector(a,wks,u(0,:,:),v(0,:,:),opts)
      delete(opts)


    ; MAKE PLOTS                                       
      plot = wrf_map_overlays(a,wks,(/contour_wind,vector/),pltres,mpres)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;  end do        ; END OF TIME LOOP

end
