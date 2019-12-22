import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {gimbal} from "./3d/helpers/gimbal"
// const THREE = require("three");

class CanvasBlock extends React.Component {
  constructor() {
    super();

    var scene = new THREE.Scene();

    // setup camera
    var camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      1.5,
      1000
    );
    camera.position.z = 50;

    //
    //renderer:

    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // spawn renenderer and attach to html
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var controls = new OrbitControls(camera, renderer.domElement);
    //ambient light

    var light = new THREE.AmbientLight(0x888888); // soft white light
    var dir = new THREE.Vector3(60, -160, 60);

    //lights
    var pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    pointLight.castShadow = true;
    pointLight.receiveShadow = false;

    // point light
    var pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);

    //  add lights
    //
    scene.add(light);
    scene.add(pointLightHelper);
    scene.add(pointLight);

    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();
    //arrow helper
    var origin = new THREE.Vector3(0, 0, 0);
    var length = 10;
    var hex = 0xffff00;

    var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    scene.add(arrowHelper);


    gimbal(scene);


    var sphereSize = 1;

    var animate = function() {
      requestAnimationFrame(animate);

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
