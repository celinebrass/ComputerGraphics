/*
   Practical 2
*/
     // Axes to give directions
   function axesHelper(){
     var axisHelper = new THREE.AxisHelper(80000);
     scene.add( axisHelper );
      // axis helper
   }

   function gridHelper(){
      var gridHelper = new THREE.GridHelper(1200000, 5000); 
      gridHelper.position = new THREE.Vector3(0, 0, 0);
      this.scene.add(gridHelper);
   }
