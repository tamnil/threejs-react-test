import * as THREE from "three";

export const gimbal = scene => {
  const polarHelper = (color1 = 0x555555, color2 = 0x999999) => {
    var radius = 10;
    var radials = 16;
    var circles = 8;
    var divisions = 64;

    return new THREE.PolarGridHelper(
      radius,
      radials,
      circles,
      divisions,
      color1,
      color2
    );
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
  var helperY = polarHelper(0x115511, 0x11aa11);
  var helperZ = polarHelper(0x551111, 0xaa1111).rotateX(Math.PI / 2);
  var helperX = polarHelper(0x111155, 0x1111aa).rotateZ(Math.PI / 2);


  scene.add(helperY);
  scene.add(helperZ);
  scene.add(helperX);
  // scene.add(loader);
};

// export default { gimbal: gimbal };
