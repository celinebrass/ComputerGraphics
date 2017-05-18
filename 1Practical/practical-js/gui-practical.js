/* 
   Practical 2 GUI values
*/

   // gui values
   var guiParameters = 
   {
     moveSpeed: 100 , // how fast is movement? * clock.getDelta()
     autoCam: false, // is autocam on?
     resetView: function() { viewReset(); }, // reset cam
   };

   function initGUI(){

      var gui = new dat.GUI();
      gui.add( guiParameters, 'autoCam' ).name('AutoCam').onChange(function(autoCam){console.log(autoCam); autoCamToggle();}).listen();
      gui.add( guiParameters, 'moveSpeed', 0.1, 1000.0 ).name('Move Speed');      
      gui.add( guiParameters, 'resetView' ).name('Reset View');

      // by default keep gui open:
      gui.open();
   }

   // ViewPos Reset:
   function viewReset(){
      // reset the view
   }

   // If autocam is off, reset move speed and cam pos
   function autoCamToggle(){
      // If autocam is off, reset move speed and cam pos, lookat and lookup
   }

   function resetCam(){
      // reset the camera pos, lookat and up
   }

   // spin around the whole scene if autocam is on
   function updateAutoCam(){
      // spin around the scene if autocam is on
   }
