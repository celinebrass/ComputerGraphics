/*
   Practical 2
*/

   /////////////////////////
   // KEYBOARD & MOVEMENT //
   /////////////////////////

  function getKeyInput(key){
    var delta = 100;
    // insert keyboard input here!

   if (key == 88){
      //x
      console.log('Camera rotation is : ');
      console.log('x : ' + camera.rotation.x);
      console.log('y : ' + camera.rotation.y);
      console.log('z : ' + camera.rotation.z);
    }

    else if (key == 80){
      //p
      console.log('Camera position is : ');
      console.log('x : ' + camera.position.x);
      console.log('y : ' + camera.position.y);
      console.log('z : ' + camera.position.z);
    }
    //r
    else if (key == 82) {
    	viewReset();
    }
    //a
    else if (key==65) {
      camera.position.x = camera.position.x - delta
    }
    //d
    else if (key==68) {
      camera.position.x = camera.position.x + delta
    }
    //w
    else if (key==87) {
      camera.position.z = camera.position.z + delta
    }
    //s
    else if (key==83) {
      camera.position.z = camera.position.z - delta
    }

  }
