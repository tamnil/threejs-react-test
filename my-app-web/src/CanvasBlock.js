
import React from "react";
import * as THREE from "three";

class CanvasBlock extends React.Component {
  constructor() {
    super();

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      115,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(7, 3, 1);
    var material = new THREE.MeshStandardMaterial({ color: 0x00ffff });
    var cube = new THREE.Mesh(geometry, material);
cube.castShadow = true
cube.receiveShadow = true
    scene.add(cube);

    camera.position.z = 20;

    var light = new THREE.AmbientLight(0x888888); // soft white light
    scene.add(light);

    var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
    var planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    // scene.add(plane);

    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var material1 = new THREE.LineBasicMaterial({ color: 0x11aaff });
    var geometry = new THREE.Geometry();
    var geometry1 = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    geometry1.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry1.vertices.push(new THREE.Vector3(10, 10, 0));
    geometry1.vertices.push(new THREE.Vector3(10, 10, 10));
    // geometry1.vertices.push(new THREE.Vector3(10, 5, 10));
    var line = new THREE.Line(geometry, material);
    var line1 = new THREE.Line(geometry1, material1);

    console.log(line);

    scene.add(line);
    scene.add(line1);

var dir = new THREE.Vector3( 60, -160, 60 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

var origin = new THREE.Vector3( 0, 0, 0 );
var length = 10;
var hex = 0xffff00;

var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
scene.add( arrowHelper );

var radius = 10;
var radials = 16;
var circles = 8;
var divisions = 64;

var helper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
scene.add( helper );



var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var material = new THREE.MeshStandardMaterial( {color: 0x555555} );

var cubeA = new THREE.Mesh( geometry, material );
cubeA.position.set( 10, 10, 0 );

var cubeB = new THREE.Mesh( geometry, material );
cubeB.position.set( -10, -10, 0 );

cubeA.castShadow = true
cubeA.receiveShadow = true
cubeB.castShadow = true
cubeB.receiveShadow = true
//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
var group = new THREE.Group();
group.add( cubeA );
group.add( cubeB );
group.castShadow = true
group.receiveShadow = true

scene.add( group );

var pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight.position.set( 10, 10, 10 );
pointLight.castShadow = true
pointLight.receiveShadow = false
scene.add( pointLight );


var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

    var animate = function() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;
helper.rotation.x += 0.01

group.rotation.x += .01
      // plane.rotation.y += 0.04;

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <div>
        im on canvas
        <canvas id="mycanvas" />
      </div>
    );
  }
}

export default CanvasBlock;
