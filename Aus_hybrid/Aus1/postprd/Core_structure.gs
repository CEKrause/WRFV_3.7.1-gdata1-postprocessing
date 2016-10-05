* Core_structure.gs
* By Claire Krause (5/10/16)

* This script determines whether a vortex has a warm or cold core
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus1

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=103.465,lon=122.135)'
'minval = min(hgtprs,lon=103.465,lon=122.135)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 48 Delta Z structure - Aus1'

* Save file
'gxprint Zstructure48hrAus1.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=105.721,lon=124.679)'
'minval = min(hgtprs,lon=105.721,lon=124.679)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 72 Delta Z structure - Aus1'

* Save file
'gxprint Zstructure72hrAus1.png x450 y400'


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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=105.493,lon=124.907)'
'minval = min(hgtprs,lon=105.493,lon=124.907)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 96 Delta Z structure - Aus1'

* Save file
'gxprint Zstructure96hrAus1.png x450 y400'

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

* Find the max and min hgtprs values
'set lev 1000 100'
'maxval = max(hgtprs,lon=105.772,lon=126.028)'
'minval = min(hgtprs,lon=105.772,lon=126.028)'
* Find diff
'diffval = maxval - minval'
'set lev 1000 100'
'set zlog on'

'd smth9(smth9(diffval))'
'draw ylab Pressure (hPa)'
'draw xlab Delta Z'

'draw title Hour 120 Delta Z structure - Aus1'

* Save file
'gxprint Zstructure120hrAus1.png x450 y400'

**** Note that by times 144, 168 and 192, the vortex
* is too washed out to give meaningful results *******