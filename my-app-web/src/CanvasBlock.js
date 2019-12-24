import React, {Component} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gimbal } from "./3d/helpers/gimbal";
import Client from "./MqttClient"

class CanvasBlock extends React.Component {
  constructor() {
    super();

    var scene = new THREE.Scene();

    // setup camera
    var camera = new THREE.PerspectiveCamera(
      1500,
      window.innerWidth / window.innerHeight,
      1.5,
      1000
    );
    camera.position.z = 150;

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
    //arrow helper
    var dir = new THREE.Vector3(-60, -60, -60);
    dir.normalize();
    var origin = new THREE.Vector3(0, 0, 0);
    var length = 10;
    var hex = 0xffff00;

    var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
    scene.add(arrowHelper);

    gimbal(scene);

    var sphereSize = 1;

    var animate = function() {
      requestAnimationFrame(animate);
      // arrowHelper.rotation.x += 0.02;
      // arrowHelper.rotation.y += 0.02;
      // arrowHelper.rotation.z += 0.06;

      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return (
      <div>
        <canvas id="mycanvas" />
      </div>
    );
  }
}

export default CanvasBlock;
