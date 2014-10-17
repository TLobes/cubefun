var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var boxGrid = [8,8,8];
var box_width = 0.1;
var box_margin = 0.1;

var cubes = []; // Array to hold our cubes

for( var x = 0; x < boxGrid[0]; x+=1 ) {
	for( var y = 0; y < boxGrid[1]; y+=1) {
		for( var z = 0; z < boxGrid[2]; z+=1 ) {
			var posX = x * ( box_margin + box_width );
			var posY = y * ( box_margin + box_width );
			var posZ = z * ( box_margin + box_width );

			var geometry = new THREE.BoxGeometry( box_width, box_width, box_width );
			var material = new THREE.MeshBasicMaterial( { color: 0x333333, wireframe: true} );
			var cube = new THREE.Mesh( geometry, material );

			cube.position.x = posX;
			cube.position.y = posY;
			cube.position.z = posZ;

			cubes.push( cube );

			scene.add( cube );
		}
	}
}

camera.position.x = 0.8;
camera.position.y = 0.6;
camera.position.z = 3;


function render() {
	requestAnimationFrame(render);

	// Increment the rotation of our cubes every frame
	for ( var i = 0; i < cubes.length; i++) {
		cubes[i].rotation.x += 0.01 + i / 10000;
		cubes[i].rotation.y += 0.01 + i / 10000;
	}

	renderer.render(scene, camera);
}

render();
