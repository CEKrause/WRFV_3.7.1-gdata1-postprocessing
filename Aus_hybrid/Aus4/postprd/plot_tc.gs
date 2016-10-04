* plot_tc.gs
* By Claire Krause (30/9/16)

* This script plots the wind speed around a TC at a given model time
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus4

***************** 48 hrs *********************
'reinit'

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
'set lon 105.2 107.2'
'set lat -17.3 -15.3'
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
'draw title Hour 48 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind48hrAus4.png x600 y400'

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
'set lon 107.3 109.3'
'set lat -18.5 -16.5'
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

'draw title Hour 72 wind speed around vortex - Aus4'

* Save file
'gxprint wind72hrAus4.png x600 y400'

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
'set lon 109.7 111.7'
'set lat -22.6 -20.6'
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

'draw title Hour 96 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind96hrAus4.png x600 y400'

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
'set lon 111 113'
'set lat -26.8 -24.8'
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

'draw title Hour 120 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind120hrAus4.png x600 y400'
