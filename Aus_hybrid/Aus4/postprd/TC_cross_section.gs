* Attempt to copy Hart (2003) Fig 3. 
* By Claire Krause 4/10/16

****************** HR 48 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 16.3 degrees south'

* Which file are we working with?
'open wrfprs_d01.48.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -16.3'
'latt = -16.3'

* Set lon so it's +- 1000 km from storm centre
'lon = 106.2'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmin = lon - x'
'lonmax = lon + x'
*'set lon 'lonmin lonmax''
'set lon 96.8231 115.577'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=96.8231,lon=115.577)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 48 vortex structure - Aus4'

* Save file
'gxprint structure48hrAus4.png x450 y400'


****************** HR 72 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 17.5 degrees south'

* Which file are we working with?
'open wrfprs_d01.72.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -17.5'
'latt = -17.5'
* Set lon so it's +- 1000 km from storm centre
'lon = 108.3'

* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 98.8632 117.737'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=98.8632,lon=117.737)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 72 vortex structure - Aus4'

* Save file
'gxprint structure72hrAus4.png x450 y400'

****************** HR 96 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 21.6 degrees south'

* Which file are we working with?
'open wrfprs_d01.96.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -21.6'
'latt = -21.6'

* Set lon so it's +- 1000 km from storm centre
'lon = 110.7'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 101.02 120.38'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=101.02,lon=120.38)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 96 vortex structure - Aus4'

* Save file
'gxprint structure96hrAus4.png x450 y400'



****************** HR 120 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 25.8 degrees south'

* Which file are we working with?
'open wrfprs_d01.120.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -25.8'
'latt = -25.8'

* Set lon so it's +- 1000 km from storm centre
'lon = 111'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 101.004 120.996'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=101.004,lon=120.996)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 120 vortex structure - Aus4'

* Save file
'gxprint structure120hrAus4.png x450 y400'

****************** HR 144 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 31.2 degrees south'

* Which file are we working with?
'open wrfprs_d01.144.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -31.2'
'latt = -31.2'

* Set lon so it's +- 1000 km from storm centre
'lon = 111.4'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 100.878 121.922'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=100.878,lon=121.922)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 144 vortex structure - Aus4'

* Save file
'gxprint structure144hrAus4.png x450 y400'

****************** HR 168 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 33.4 degrees south'

* Which file are we working with?
'open wrfprs_d01.168.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -33.4'
'latt = -33.4'

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
'set lon 96.9196 118.48'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=96.9196,lon=118.48)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 168 vortex structure - Aus4'

* Save file
'gxprint structure168hrAus4.png x450 y400'

****************** HR 192 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 33.8 degrees south'

* Which file are we working with?
'open wrfprs_d01.192.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -33.8'
'latt = -33.8'

* Set lon so it's +- 1000 km from storm centre
'lon = 103.9'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 93.0695 114.731'

* Set all the levels so it plots a cross section
'set lev 1000 100'
'set zlog on'

'set gxout contour'
'set ccolor 1'
'd hgtprs'
'draw ylab Pressure (hPa)'
'draw xlab Longitude'

* Now calculate anomalies
'allave = ave(hgtprs,lon=93.0695,lon=114.731)'
* and plot...
'set clevs -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0'
'set ccols 9 14 4 11 5 13 3 10 12 8 2 6'
'd hgtprs - allave'

'draw title Hour 192 vortex structure - Aus4'

* Save file
'gxprint structure192hrAus4.png x450 y400'
