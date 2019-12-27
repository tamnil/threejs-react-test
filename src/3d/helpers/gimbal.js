import * as THREE from "three";

export const gimbal = scene => {
  const polarHelper = () => {
    var radius = 10;
    var radials = 16;
    var circles = 8;
    var divisions = 64;

    return new THREE.PolarGridHelper(radius, radials, circles, divisions);
  };
  var loader = new THREE.FontLoader();

  loader.load("../../Ubuntu Mono_Regular.json", function(font) {
    var fontSettings = {
      font: font,
      size: 1,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 5
    };
    var geometryX = new THREE.TextGeometry("+X", fontSettings);
    var geometryY = new THREE.TextGeometry("+Y", fontSettings);
    var geometryZ = new THREE.TextGeometry("+Z", fontSettings);
    // geometry.font( font);
    var textMaterialX = new THREE.MeshPhongMaterial({
      color: 0x0000ff,
      specular: 0xffffff
    });

    var textMaterialY = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      specular: 0xffffff
    });

    var textMaterialZ = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      specular: 0xffffff
    });

    var meshX = new THREE.Mesh(geometryX, textMaterialX);
    var meshY = new THREE.Mesh(geometryY, textMaterialY);
    var meshZ = new THREE.Mesh(geometryZ, textMaterialZ);
    var txtDistance = 10;
    meshX.translateX(txtDistance);
    meshY.translateY(txtDistance);
    meshZ.translateZ(txtDistance);

    scene.add(meshX);

    scene.add(meshY);
    scene.add(meshZ);
    // console.log(mesh);
  });

  // inh radians
  var helperA = polarHelper();
  var helperB = polarHelper().rotateX(Math.PI / 2);
  // helperB.material.
  var helperC = polarHelper();
  var helperC = polarHelper().rotateZ(Math.PI / 2);
  scene.add(helperA);
  scene.add(helperB);
  scene.add(helperC);
  // scene.add(loader);
};

// export default { gimbal: gimbal };
