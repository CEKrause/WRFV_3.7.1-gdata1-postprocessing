* Attempt to copy Hart (2003) Fig 3. 
* By Claire Krause 4/10/16

****************** HR 48 ******************************************
'clear'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 21.8 degrees south'

* Which file are we working with?
'open wrfprs_d01.48.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -21.8'
'latt = -21.8'

* Set lon so it's +- 1000 km from storm centre
'lon = 106.9'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmin = lon - x'
'lonmax = lon + x'
*'set lon 'lonmin lonmax''
'set lon 97.2068 116.593'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=97.4514,lon=116.949)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 48 vortex structure - Aus5'

* Save file
'gxprint structure48hrAus5.png x450 y400'


****************** HR 72 ******************************************
'clear'
'close 1'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 22.6 degrees south'

* Which file are we working with?
'open wrfprs_d01.72.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -22.6'
'latt = -22.6'
* Set lon so it's +- 1000 km from storm centre
'lon = 107.2'

* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 96.3389 117.061'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=96.3389,lon=117.061)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 72 vortex structure - Aus5'

* Save file
'gxprint structure72hrAus5.png x450 y400'

****************** HR 96 ******************************************
'clear'
'close 1'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 25.9 degrees south'

* Which file are we working with?
'open wrfprs_d01.96.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -25.9'
'latt = -25.9'

* Set lon so it's +- 1000 km from storm centre
'lon = 107.4'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 97.3951 117.405'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=97.3951,lon=117.405)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 96 vortex structure - Aus5'

* Save file
'gxprint structure96hrAus5.png x450 y400'



****************** HR 120 ******************************************
'clear'
'close 1'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 29.7 degrees south'

* Which file are we working with?
'open wrfprs_d01.120.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -29.7'
'latt = -29.7'

* Set lon so it's +- 1000 km from storm centre
'lon = 106.7'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 96.3389 117.061'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=96.3389,lon=117.061)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 120 vortex structure - Aus5'

* Save file
'gxprint structure120hrAus5.png x450 y400'