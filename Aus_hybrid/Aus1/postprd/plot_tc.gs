* plot_tc.gs
* By Claire Krause (30/9/16)

* This script plots the wind speed around a TC at a given model time
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus1

***************** 48 hrs *********************

* Which file are we plotting now?
'open wrfprs_d01.48.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 111.8 113.8'
'set lat -16.4 -14.4'
'set gxout shaded'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout contour'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'
'draw title Hour 48 wind speed around vortex - Aus1'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind48hrAus1.png x600 y400'

'reinit'

********** Now do 72 hrs *******************

* Which file are we plotting now?
'open wrfprs_d01.72.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 114.2 116.2'
'set lat -19.3 -17.3'
'set gxout shaded'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout contour'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'
'draw ylab Latitude'
'draw xlab Longitude' 
'run cbarn.gs'

'draw title Hour 72 wind speed around vortex - Aus1'

* Save file
'gxprint wind72hrAus1.png x600 y400'

'reinit'

********** Now do 96 hrs *******************

* Which file are we plotting now?
'open wrfprs_d01.96.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 114.2 116.2'
'set lat -23 -21'
'set gxout shaded'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout contour'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'

'draw title Hour 96 wind speed around vortex - Aus1'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind96hrAus1.png x600 y400'

'reinit'

********** Now do 120 hrs *******************

* Which file are we plotting now?
'open wrfprs_d01.120.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 114.9 116.9'
'set lat -28.3 -26.3'
'set gxout shaded'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout contour'
'set cmax 55'
'set cmin 0'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'

'draw title Hour 120 wind speed around vortex - Aus1'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind120hrAus1.png x600 y400'


**** Note that by times 144, 168 and 192, the vortex
* is too washed out to give meaningful results *******