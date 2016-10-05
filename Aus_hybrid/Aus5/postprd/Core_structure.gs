* Core_structure.gs
* By Claire Krause (5/10/16)

* This script determines whether a vortex has a warm or cold core
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus5

***************** 48 hrs *********************
'reinit'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=97.4514,lon=116.949)'
'minval = min(hgtprs,lon=97.4514,lon=116.949)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 48 Delta Z structure - Aus5'

* Save file
'gxprint Zstructure48hrAus5.png x450 y400'

****************** HR 72 ******************************************
'reinit'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=96.3389,lon=117.061)'
'minval = min(hgtprs,lon=96.3389,lon=117.061)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'
'draw title Hour 72 Delta Z structure - Aus5'

* Save file
'gxprint Zstructure72hrAus5.png x450 y400'

****************** HR 96 ******************************************
'reinit'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=97.3951,lon=117.405)'
'minval = min(hgtprs,lon=97.3951,lon=117.405)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'
'draw title Hour 96 Delta Z structure - Aus5'

* Save file
'gxprint Zstructure96hrAus5.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=96.3389,lon=117.061)'
'minval = min(hgtprs,lon=96.3389,lon=117.061)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'
'draw title Hour 120 Delta Z structure - Aus5'

* Save file
'gxprint Zstructure120hrAus5.png x450 y400'