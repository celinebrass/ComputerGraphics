/*
   Practical 2
*/

var bodiesTex = [];
function loadTextures(){

	material.map    = THREE.ImageUtils.loadTexture('images/sunmap.jpg')
	bodiesTex[0] = THREE.ImageUtils.loadTexture('images/sunmap.jpg')
	bodiesTex[1] = THREE.ImageUtils.loadTexture('images/moonmap.jpg')
	bodiesTex[2] = THREE.ImageUtils.loadTexture('images/mercurymap.jpg')
	bodiesTex[3] = THREE.ImageUtils.loadTexture('images/venusmap.jpg')
	bodiesTex[4] = THREE.ImageUtils.loadTexture('images/earthmap.jpg')
	bodiesTex[5] = THREE.ImageUtils.loadTexture('images/marsmap.jpg')
	bodiesTex[6] = THREE.ImageUtils.loadTexture('images/jupitermap.jpg')
	bodiesTex[7] = THREE.ImageUtils.loadTexture('images/saturnmap.jpg')
	bodiesTex[8] = THREE.ImageUtils.loadTexture('images/uranusmap.jpg')
	bodiesTex[9] = THREE.ImageUtils.loadTexture('images/neptunemap.jpg')
	bodiesTex[10] = THREE.ImageUtils.loadTexture('images/plutomap.jpg')
}
