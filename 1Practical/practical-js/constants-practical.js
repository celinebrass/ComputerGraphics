/*
   Practical 2
*/
   // CONSTANTS
   // CONSTANTS
   var DEFAULT_POS = new THREE.Vector3(0,0,50000);
   var DEFAULT_LOOK_AT = new THREE.Vector3(0,0,0);
   var DEFAULT_UP = new THREE.Vector3(0,1,0);
   var DEFAULT_FOV = 45;
   var DEFAULT_NEAR = 1;
   var DEFAULT_FAR = 1000000;
   // Note: these are relative sizes, derived from NASA fact sheet:
   // http://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
   var MERCURY_RADIUS = 38.3;
   var VARUS_RADIUS = 94.9;
   var EARTH_RADIUS = 100;
   var MOON_RADIUS = 27.24;
   var MARS_RADIUS = 53.2;
   var JUPITER_RADIUS = 1121.0;
   var SATURN_RADIUS = 945.0;
   var URANUS_RADIUS = 401.0;
   var NEPTUNE_RADIUS = 388.0;
   var PLUTO_RADIUS = 186.0;
   var SUN_RADIUS = 10900;

   var radii = [10900, 27.24, 38.3, 94.9, 100, 53.2, 1121.0, 945.0, 401.0, 338.0, 18.6];
   var distance = [0,0.3+149,58, 108, 149,227, 778, 1427, 1780, 2794, 3680];
   var PLANETARY_DETAIL = new THREE.Vector3(EARTH_RADIUS,20,20); // default: 20 segments

   var whSegments = 20; // default: 20 segments - widthSegments and heightSegments
