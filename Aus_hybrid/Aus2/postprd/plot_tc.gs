* plot_tc.gs
* By Claire Krause (30/9/16)

* This script plots the wind speed around a TC at a given model time
* Need to have pre-prepared the input files e.g.
* > ~/grib2ctl.pl wrfprs_d01.48 > wrfprs_d01.48.ctl
* > gribmap -i wrfprs_d01.48.ctl -0
* then load grads and start this script

* This script is hardcoded with values for Aus2

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
'set lon 104.6 108.6'
'set lat -19.3 -15.3'
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
'draw title Hour 48 wind speed around vortex - Aus2'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind48hrAus2.png x600 y400'

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
'set lon 105.7 109.7'
'set lat -20.8 -16.8'
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

'draw title Hour 72 wind speed around vortex - Aus2'

* Save file
'gxprint wind72hrAus2.png x600 y400'

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
'set lon 106.7 110.7'
'set lat -24.9 -20.9'
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
'gxprint wind96hrAus2.png x600 y400'

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
'set lon 106.2 110.2'
'set lat -28.1 -24.1'
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

'draw title Hour 120 wind speed around vortex - Aus2'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind120hrAus2.png x600 y400'

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
'set lon 105.1 109.1'
'set lat -31.4 -27.4'
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

'draw title Hour 144 wind speed around vortex - Aus2'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind144hrAus2.png x600 y400'

'reinit'

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
'set lon 102 106'
'set lat -33.9 -29.9'
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

'draw title Hour 168 wind speed around vortex - Aus2'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind168hrAus2.png x600 y400'

'reinit'

********** Now do 192 hrs *******************

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
'set lon 98.7 102.7'
'set lat -34.3 -30.3'
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

'draw title Hour 192 wind speed around vortex - Aus2'
'draw ylab Latitude'
'draw xlab Longitude'
'run cbarn.gs'

* Save file
'gxprint wind192hrAus2.png x600 y400'
