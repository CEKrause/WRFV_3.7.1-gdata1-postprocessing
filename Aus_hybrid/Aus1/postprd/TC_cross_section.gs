* Attempt to copy Hart (2003) Fig 3. 
* By Claire Krause 4/10/16

****************** HR 48 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 15.4 degrees south'

* Which file are we working with?
'open wrfprs_d01.48.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -15.4'
'latt = -15.4'

* Set lon so it's +- 1000 km from storm centre
'lon = 112.8'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmin = lon - x'
'lonmax = lon + x'
*'set lon 'lonmin lonmax''
'set lon 103.465 122.135'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=103.465,lon=122.135)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 48 vortex structure - Aus1'

* Save file
'gxprint structure48hrAus1.png x450 y400'


****************** HR 72 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 18.3 degrees south'

* Which file are we working with?
'open wrfprs_d01.72.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -18.3'
'latt = -18.3'
* Set lon so it's +- 1000 km from storm centre
'lon = 115.2'

* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 105.721 124.679'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=105.721,lon=124.679)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 72 vortex structure - Aus1'

* Save file
'gxprint structure72hrAus1.png x450 y400'

****************** HR 96 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 22 degrees south'

* Which file are we working with?
'open wrfprs_d01.96.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -22'
'latt = -22'

* Set lon so it's +- 1000 km from storm centre
'lon = 115.2'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 105.493 124.907'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=105.493,lon=124.907)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 96 vortex structure - Aus1'

* Save file
'gxprint structure96hrAus1.png x450 y400'



****************** HR 120 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 27.3 degrees south'

* Which file are we working with?
'open wrfprs_d01.120.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -27.3'
'latt = -27.3'

* Set lon so it's +- 1000 km from storm centre
'lon = 115.9'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 105.772 126.028'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=105.772,lon=126.028)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 120 vortex structure - Aus1'

* Save file
'gxprint structure120hrAus1.png x450 y400'

**** Note that by times 144, 168 and 192, the vortex
* is too washed out to give meaningful results *******