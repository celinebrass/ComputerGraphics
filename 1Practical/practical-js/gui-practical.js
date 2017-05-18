/* 
   Practical 2 GUI values
*/
   var gui;

   // gui values
   var guiParameters = 
   {
     moveSpeed: 100 , // how fast is movement? * clock.getDelta()
     autoCam: false, // is autocam on?
     resetView: function() { viewReset(); }, // reset cam
   };

   function initGUI(){

      gui = new dat.GUI();
      gui.add( guiParameters, 'autoCam' ).name('AutoCam').onChange(function(autoCam)	{console.log(autoCam); autoCamToggle();}).listen();
      gui.add( guiParameters, 'moveSpeed', 0.1, 1000.0 ).name('Move Speed')
	.onChange(function(speed){
		updateSpeed(speed);
	});      
      gui.add( guiParameters, 'resetView' ).name('Reset View');

      // by default keep gui open:
      gui.open();
   }

   function updateSpeed() {
	controls.autoRotateSpeed = (guiParameters.moveSpeed * 50);
	controls.update();
   }
   // ViewPos Reset:
   //calls reset cam
   function viewReset(){
	camera.position.set(0, 0 , 100);
    	camera.rotation.set(0, 0, 0);
	controls.update();
      // reset the view
   }

   // If autocam is off, reset move speed and cam pos
   //toggle autorotate
   function autoCamToggle(){
	//guiParameters.autoCam = !(guiParameters.autoCam);
	if (guiParameters.autoCam) {
		controls.autoRotate = true;
	}
	else {
		controls.autoRotate = false; 
	}
	controls.update();
      // If autocam is off, reset move speed and cam pos, lookat and lookup
   }

   /*function resetCam(){
	console.log('reset');
	controls.autoRotate = false; 
	controls.update();
      // reset the camera pos, lookat and up
   }

   // spin around the whole scene if autocam is on
   function updateAutoCam(){
	console.log('trying to make shit rotate')
	controls.autoRotate = true;
	controls.update();
	
   }*/
