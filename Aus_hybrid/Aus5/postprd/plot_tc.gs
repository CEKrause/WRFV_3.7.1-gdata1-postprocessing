* plot_tc.gs
* By Claire Krause (30/9/16)

* This script plots the wind speed around a TC at a given model time
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus5

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
'set lon 105.9 107.9'
'set lat -22.8 -20.8'
'set gxout shaded'
'd wspd'
'set gxout contour'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'
'draw title Hour 48 wind speed around vortex - Aus5'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind48hrAus5.png x600 y400'

'close 1' 
'clear'

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
'set lon 106.2 108.2'
'set lat -23.6 -21.6'
'set gxout shaded'
'd wspd'
'set gxout contour'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'

'draw title Hour 72 wind speed around vortex - Aus5'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind72hrAus5.png x600 y400'

'close 1'
'clear'

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
'set lon 106.4 108.4'
'set lat -26.9 -24.9'
'set gxout shaded'
'd wspd'
'set gxout contour'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'

'draw title Hour 96 wind speed around vortex - Aus5'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind96hrAus5.png x600 y400'

'close 1'
'clear'

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
'set lon 105.7 107.7'
'set lat -30.7 -28.7'
'set gxout shaded'
'd wspd'
'set gxout contour'
'd wspd'
'set gxout vector'
'set ccolor 0'
'set arrscl 0.5 40'
'd ugrd10m;vgrd10m'

'draw title Hour 120 wind speed around vortex - Aus5'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind120hrAus5.png x600 y400'

'close 1'
'clear'

