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
      camera.lookAt(new THREE.vector(0,0,100));
    }
    //d
    else if (key==68) {
      camera.position.x = camera.position.x + delta
      camera.lookAt(new THREE.vector(0,0,100));
    }
    //w
    else if (key==87) {
      camera.position.z = camera.position.z + delta
      camera.lookAt(new THREE.vector(0,0,100));
    }
    //s
    else if (key==83) {
      camera.position.z = camera.position.z - delta
      camera.lookAt(new THREE.vector(0,0,100));
    }
    //up
    else if (key==38) {
      camera.position.y = camera.position.y + delta
      camera.lookAt(new THREE.vector(0,0,100));
    }

    //down
    else if (key==40) {
      camera.position.y = camera.position.y - delta
      camera.lookAt(new THREE.vector(0,0,100));
    }

  }
