* Core_structure.gs
* By Claire Krause (5/10/16)

* This script determines whether a vortex has a warm or cold core
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus2

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=97.2693,lon=115.931)'
'minval = min(hgtprs,lon=97.2693,lon=115.931)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 48 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure48hrAus2.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=98.1928,lon=117.207)'
'minval = min(hgtprs,lon=98.1928,lon=117.207)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 72 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure72hrAus2.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=98.93,lon=118.47)'
'minval = min(hgtprs,lon=98.93,lon=118.47)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 96 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure96hrAus2.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=98.178,lon=118.222)'
'minval = min(hgtprs,lon=98.178,lon=118.222)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 120 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure120hrAus2.png x450 y400'

****************** HR 144 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 29.4 degrees south'

* Which file are we working with?
'open wrfprs_d01.144.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -29.4'
'latt = -29.4'

* Set lon so it's +- 1000 km from storm centre
'lon = 107.1'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 96.7696 117.43'

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=96.7696,lon=117.43)'
'minval = min(hgtprs,lon=96.7696,lon=117.43)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 144 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure144hrAus2.png x450 y400'

****************** HR 168 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 31.9 degrees south'

* Which file are we working with?
'open wrfprs_d01.168.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -31.9'
'latt = -31.9'

* Set lon so it's +- 1000 km from storm centre
'lon = 104'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 93.3989 114.601'

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=93.3989,lon=114.601)'
'minval = min(hgtprs,lon=93.3989,lon=114.601)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 168 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure168hrAus2.png x450 y400'

****************** HR 192 ******************************************
'reinit'

* Set up plot
'set display white'
'set grads off'
'draw string 1 0.5 32.3 degrees south'

* Which file are we working with?
'open wrfprs_d01.192.ctl'

* Set lat to centr of storm (just grabbed from plot_tc.gs)
'set lat -32.3'
'latt = -32.3'

* Set lon so it's +- 1000 km from storm centre
'lon = 100.7'
* How far is 1 km at this lat?
'pi = 3.1415926'
'latr = latt * pi/180'
'x = 111.111*cos(latr)' 
* now work out for 1000 km
'x = 1/x*1000' 
'lonmax = lon - x'
'lonmin = lon + x'
*'set lon lonmin lonmax'
'set lon 90.0524 111.348'

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=90.0524,lon=111.348)'
'minval = min(hgtprs,lon=90.0524,lon=111.348)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 192 Delta Z structure - Aus2'

* Save file
'gxprint Zstructure192hrAus2.png x450 y400'