
;   Example script to produce plots for a WRF real-data run,
;   with the ARW coordinate dynamics option.

load "$NCARG_ROOT/lib/ncarg/nclscripts/csm/gsn_code.ncl"
load "$NCARG_ROOT/lib/ncarg/nclscripts/wrf/WRFUserARW.ncl"
;load "./WRFUserARW.ncl"

begin
;
; The WRF ARW input file.  
; This needs to have a ".nc" appended, so just do it.
  a = addfile("wrfout_d01_1989-04-10_00:00:00.nc","r")

; specify run name
run = "Aus5"

; We generate plots, but what kind do we prefer?
;  type = "x11"
 type = "pdf"
; type = "ps"
; type = "ncgm"
  wks = gsn_open_wks(type,run + "_temp_mslp")

; Set some basic resources
  res = True
 ; res@MainTitle                   = "REAL-TIME WRF"
  res@NoHeaderFooter           = True            ; Switch headers and footers off

  pltres = True
  pltres@PanelPlot = True      ; Indicate these plots are to be paneled.
  mpres = True
  mpres@mpGeophysicalLineColor = "Black"
  mpres@mpGridLineColor = "grey45"
  mpres@mpGridLineDashPattern  = 2                  ; lat/lon lines dashed
;  mpres@mpGridAndLimbDrawOrder = "PreDraw"          ; Draw grid first
  mpres@mpLimbLineColor = "Black"
  mpres@mpNationalLineColor = "Black"
  mpres@mpPerimLineColor = "Black"
  mpres@mpNationalLineThicknessF = 1.0 ; interior boundaries 
  mpres@mpGeophysicalLineThicknessF = 2.0 ; lines separating land/ocean 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; What times and how many time steps are in the data set?
  times = wrf_user_getvar(a,"times",-1)  ; get all times in the file
  ntimes = dimsizes(times)         ; number of times in the file

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  plots = new ( 4, graphic )
  iplot = 0

  do it = 48,220,48             ; TIME LOOP
    print("Working on time: " + times(it) )
    res@TimeLabel = times(it)   ; Set Valid time to use on plots


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; First get the variables we will need        

    slp = wrf_user_getvar(a,"slp",it)    ; slp
      wrf_smooth_2d( slp, 3 )            ; smooth slp
    tc = wrf_user_getvar(a,"tc",it)      ; 3D tc 
    td = wrf_user_getvar(a,"td",it)      ; 3D td 
    u  = wrf_user_getvar(a,"ua",it)      ; 3D U at mass points
    v  = wrf_user_getvar(a,"va",it)      ; 3D V at mass points
    td2 =  wrf_user_getvar(a,"td2",it)   ; Td2 in C
    tc2 = wrf_user_getvar(a,"T2",it)     ; T2 in Kelvin
       tc2 = tc2-273.16                  ; T2 in C
       tc2@description = "Surface Temperature"
       tc2@units = "C"

    u10 = wrf_user_getvar(a,"U10",it)    ; u at 10 m, mass point
    v10 = wrf_user_getvar(a,"V10",it)    ; v at 10 m, mass point

;    tf2 = 1.8*tc2+32.                    ; Turn temperature into Fahrenheit
;      tf2@description = "Surface Temperature"
;      tf2@units = "F"
;    td_f = 1.8*td2+32.                   ; Turn temperature into Fahrenheit
;      td_f@description = "Surface Dew Point Temp" 
;      td_f@units = "F"
;    u10 = u10*1.94386                    ; Turn wind into knots
;    v10 = v10*1.94386
;      u10@units = "kts"
;      v10@units = "kts"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    ; Plotting options for T                
      opts = res                         
      opts@cnFillOn = True  
      opts@ContourParameters = (/ 6., 30., 2./)
      opts@gsnSpreadColorEnd = -3  ; End third from the last color in color map
      opts@lbLabelBarOn           = False    ; Turn on common labelbar 
      contour_tc = wrf_contour(a,wks,tc2,opts)
      delete(opts)


    ; Plotting options for Td
;      opts = res         
;      opts@cnFillOn = True 
;      opts@cnLinesOn = True
;      opts@cnLineLabelsOn = True
;      opts@ContourParameters = (/ -20., 90., 5./) 
;      opts@cnLineLabelBackgroundColor = -1
;      opts@gsnSpreadColorEnd = -3  ; End third from the last color in color map
;      contour_td = wrf_contour(a,wks,td2,opts)
;      delete(opts)


    ; Plotting options for SLP                     
      opts = res         
      opts@cnLineColor = "black"
      opts@cnHighLabelsOn = False
      opts@cnLowLabelsOn = False
      opts@ContourParameters = (/ 950., 1050., 2. /)
      opts@cnLineLabelBackgroundColor = -1
      opts@NoHeaderFooter    = True
;      opts@cnLineLabelsOn   = True                    ;line labels
      opts@cnLineDashSegLenF          = 0.18          ; assist in controlling concentration
      opts@cnLineLabelInterval        = 1             ; default = 2
      opts@cnLineLabelPlacementMode   = "constant"    ; choose constant label method
      opts@gsnContourLineThicknessesScale = 2.0
;      opts@gsnContourNegLineDashPattern = 1       ; sets negative contours to dash pattern 1
      contour_psl = wrf_contour(a,wks,slp,opts)
      delete(opts)

    ; Plotting options for Wind Vectors                 
;      opts = res         
;      opts@FieldTitle = "Wind"       ; overwrite Field Title
;      opts@NumVectors = 47           ; density of wind barbs
;      vector = wrf_vector(a,wks,u10,v10,opts)
;      delete(opts)
  

    ; MAKE PLOTS                                       
      pltres@CommonTitle = True
      day = times(it)
      dayy = str_get_cols(day, 8, 9)
      dayyy = stringtoint(dayy)
      pltres@PlotTitle =  "Run day " + (dayyy - 10)
      plots(iplot) = wrf_map_overlays(a,wks,(/contour_tc,contour_psl/),pltres,mpres)
    ; plot = wrf_map_overlays(a,wks,(/contour_td,vector/),pltres,mpres)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    iplot = iplot + 1 

  end do        ; END OF TIME LOOP

  ; Panel the WRF plots.
    pnlres                            = True
    pnlres@txString                   = run + " 2 m Temperature and MSLP"
    ;pnlres@gsnPanelYWhiteSpacePercent = 5       ; Add white space b/w plots.
    pnlres@gsnPanelLabelBar           = True    ; Turn on common labelbar
    pnlres@lbLabelAutoStride          = True    ; Spacing of lbar labels.
    pnlres@lbBoxMinorExtentF          = 0.13

    gsn_panel(wks,(/plots/),(/2,2/),pnlres)

end
