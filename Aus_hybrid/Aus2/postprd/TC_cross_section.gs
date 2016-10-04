* Attempt to copy Hart (2003) Fig 3. 
* By Claire Krause 4/10/16

****************** HR 48 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 17.3 degrees south'

* Which file are we working with?
'open wrfprs_d01.48.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -17.3'
'latt = -17.3'

* Set lon so it's +- 1000 km from storm centre
'lon = 106.6'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmin = lon - x'
'lonmax = lon + x'
*'set lon 'lonmin lonmax''
'set lon 97.2693 115.931'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=97.2693,lon=115.931)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 48 vortex structure - Aus2'

* Save file
'gxprint structure48hrAus2.png x450 y400'


****************** HR 72 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 18.8 degrees south'

* Which file are we working with?
'open wrfprs_d01.72.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -18.8'
'latt = -18.8'
* Set lon so it's +- 1000 km from storm centre
'lon = 107.7'

* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 98.1928 117.207'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=98.1928,lon=117.207)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 72 vortex structure - Aus2'

* Save file
'gxprint structure72hrAus2.png x450 y400'

****************** HR 96 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 22.9 degrees south'

* Which file are we working with?
'open wrfprs_d01.96.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -22.9'
'latt = -22.9'

* Set lon so it's +- 1000 km from storm centre
'lon = 108.7'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 98.93 118.47'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=98.93,lon=118.47)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 96 vortex structure - Aus2'

* Save file
'gxprint structure96hrAus2.png x450 y400'



****************** HR 120 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 26.1 degrees south'

* Which file are we working with?
'open wrfprs_d01.120.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -26.1'
'latt = -26.1'

* Set lon so it's +- 1000 km from storm centre
'lon = 108.2'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 98.178 118.222'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=98.178,lon=118.222)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 120 vortex structure - Aus2'

* Save file
'gxprint structure120hrAus2.png x450 y400'