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
'set lon 104.2 108.2'
'set lat -18.3 -14.3'
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
'set lon 106.3 110.3'
'set lat -19.5 -15.5'
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
'set lon 108.7 112.7'
'set lat -23.6 -19.6'
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
'set lon 110 114'
'set lat -27.8 -23.8'
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
'reinit'

********** Now do 144 hrs *******************

* Which file are we plotting now?
'open wrfprs_d01.144.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 109.4 113.4'
'set lat -33.2 -29.2'
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

'draw title Hour 144 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind144hrAus4.png x600 y400'

********** Now do 168 hrs *******************

* Which file are we plotting now?
'open wrfprs_d01.168.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 105.7 109.7'
'set lat -35.4 -31.4'
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

'draw title Hour 168 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind168hrAus4.png x600 y400'

********** Now do 192 hrs *******************
'reinit'

* Which file are we plotting now?
'open wrfprs_d01.192.ctl'

* Set background colour to white
'set display white'
'set timelab off'
'set grads off'

* Calculate wind speed
'wspd=mag(ugrd10m,vgrd10m)'
* Define the size of the display
* Where is the centre of the vortex at this stage?
* +- 1 degree
'set lon 101.9 105.9'
'set lat -35.8 -31.8'
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

'draw title Hour 192 wind speed around vortex - Aus4'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind192hrAus4.png x600 y400'