* Core_structure.gs
* By Claire Krause (5/10/16)

* This script determines whether a vortex has a warm or cold core
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus4

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=96.8231,lon=115.577)'
'minval = min(hgtprs,lon=96.8231,lon=115.577)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 48 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure48hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=98.8632,lon=117.737)'
'minval = min(hgtprs,lon=98.8632,lon=117.737)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 72 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure72hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=101.02,lon=120.38)'
'minval = min(hgtprs,lon=101.02,lon=120.38)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 96 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure96hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=101.004,lon=120.996)'
'minval = min(hgtprs,lon=101.004,lon=120.996)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 120 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure120hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=100.878,lon=121.922)'
'minval = min(hgtprs,lon=100.878,lon=121.922)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 144 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure144hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=96.9196,lon=118.48)'
'minval = min(hgtprs,lon=96.9196,lon=118.48)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 168 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure168hrAus4.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=93.0695,lon=114.731)'
'minval = min(hgtprs,lon=93.0695,lon=114.731)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 192 Delta Z structure - Aus4'

* Save file
'gxprint Zstructure192hrAus4.png x450 y400'