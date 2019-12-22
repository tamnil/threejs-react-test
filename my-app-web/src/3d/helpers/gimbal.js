import * as THREE from "three";

export const gimbal = scene => {
  const polarHelper = () => {
    var radius = 10;
    var radials = 16;
    var circles = 8;
    var divisions = 64;

    return new THREE.PolarGridHelper(radius, radials, circles, divisions);
  };

  // inh radians
  var helperA = polarHelper();
  var helperB = polarHelper().rotateX(Math.PI / 2);
  // helperB.material.
  var helperC = polarHelper();
  var helperC = polarHelper().rotateZ(Math.PI / 2);
  scene.add(helperA);
  scene.add(helperB);
  scene.add(helperC);
};

// export default { gimbal: gimbal };
