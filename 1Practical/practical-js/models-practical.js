/* 
   Practical 2 
*/

   // custom global variables
   var numAndroids = 50;
   var android = [];

   // the following code is from
   //    http://catchvar.com/threejs-animating-blender-models
   var animOffset       = 0,   // starting frame of animation
      walking         = false,
      duration        = 1000, // milliseconds to complete animation
      keyframes       = 20,   // total number of animation frames
      interpolation   = duration / keyframes, // milliseconds per frame
      lastKeyframe    = 0,    // previous keyframe
      currentKeyframe = 0;

   function initAndroid(){
      var jsonLoader = new THREE.JSONLoader();
      jsonLoader.load( "models/android-animations.js", addModelToScene );
      // addModelToScene function is called back after model has loaded
   }


   function addModelToScene( geometry, materials ) 
   {
      
   }

   function animateModel(){
      // any animations? (translations)

   }
