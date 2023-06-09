    // Setup the scene
    var scene = new THREE.Scene();

    // Create the camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Create the renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas").appendChild(renderer.domElement);

    // Create the sun
    // var sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    // var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    // var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    // scene.add(sun);
    var sunGeometry = new THREE.SphereGeometry(2,40,40);
    var sunTexture = new THREE.TextureLoader().load('sun.webp');
    var sunMaterial = new THREE.MeshBasicMaterial({ map:sunTexture });
    var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create the planets
    var planetGeometry = new THREE.SphereGeometry(0.4, 32, 32);

    // Mercury
    var mercuryTexture = new THREE.TextureLoader().load('mercury.jpeg');
    var mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
    var mercury = new THREE.Mesh(planetGeometry, mercuryMaterial);
    scene.add(mercury);

    // Venus
    var venusTexture = new THREE.TextureLoader().load('venus.jpeg');
    var venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    var venus = new THREE.Mesh(planetGeometry, venusMaterial);
    scene.add(venus);

    // Earth
    var earthTexture = new THREE.TextureLoader().load('earth.jpg');
    var earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    var earth = new THREE.Mesh(planetGeometry, earthMaterial);
    scene.add(earth);

    // Mars
    var marsTexture = new THREE.TextureLoader().load('mars.jpg');
    var marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
    var mars = new THREE.Mesh(planetGeometry, marsMaterial);
    scene.add(mars);

    // Jupiter
    var jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
    var jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
    var jupiter = new THREE.Mesh(planetGeometry, jupiterMaterial);
    jupiter.position.set(12, 0, 0);
    scene.add(jupiter);

    // Saturn
    var saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
    var saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
    var saturn = new THREE.Mesh(planetGeometry, saturnMaterial);
    saturn.position.set(15, 0, 0);
    scene.add(saturn);

    // Uranus
    var uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
    var uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
    var uranus = new THREE.Mesh(planetGeometry, uranusMaterial);
    uranus.position.set(18, 0, 0);
    scene.add(uranus);

    // Neptune
    var neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
    var neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
    var neptune = new THREE.Mesh(planetGeometry, neptuneMaterial);
    neptune.position.set(21, 0, 0);
    scene.add(neptune);

    // Create the moons
    var moonGeometry = new THREE.SphereGeometry(0.2, 32, 32);

    // Moon 1
    // var moon1Texture = new THREE.TextureLoader().load('moon.jpg');
    // var moon1Material = new THREE.MeshBasicMaterial({ map: moon1Texture });
    // var moon1 = new THREE.Mesh(moonGeometry, moon1Material);
    // moon1.position.set(earth.position.x + 1.5, 0, earth.position.z);
    // scene.add(moon1);

    // Moon 2
    // var moon2Texture = new THREE.TextureLoader().load('moon.jpg');
    // var moon2Material = new THREE.MeshBasicMaterial({ map: moon2Texture });
    // var moon2 = new THREE.Mesh(moonGeometry, moon2Material);
    // moon2.position.set(mars.position.x + 1, 0, mars.position.z);
    // scene.add(moon2);

    // Add lighting
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 1);
    scene.add(pointLight);

    // Add starry background
    var starGeometry = new THREE.Geometry();
    for (let i = 0; i < 10000; i++) {
      var star = new THREE.Vector3();
      star.x = Math.random() * 2000 - 1000;
      star.y = Math.random() * 2000 - 1000;
      star.z = Math.random() * 2000 - 1000;
      starGeometry.vertices.push(star);
    }
    var starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    var stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Update the positions of the planets
      mercury.position.x = Math.cos(Date.now() * 0.001) * 3;
      mercury.position.z = Math.sin(Date.now() * 0.001) * 3;

      venus.position.x = Math.cos(Date.now() * 0.0008) * 5;
      venus.position.z = Math.sin(Date.now() * 0.0008) * 5;

      earth.position.x = Math.cos(Date.now() * 0.0005) * 7;
      earth.position.z = Math.sin(Date.now() * 0.0005) * 7;

      mars.position.x = Math.cos(Date.now() * 0.0003) * 9;
      mars.position.z = Math.sin(Date.now() * 0.0003) * 9;

      jupiter.position.x = Math.cos(Date.now() * 0.0002) * 12;
      jupiter.position.z = Math.sin(Date.now() * 0.0002) * 12;

      saturn.position.x = Math.cos(Date.now() * 0.00015) * 15;
      saturn.position.z = Math.sin(Date.now() * 0.00015) * 15;

      uranus.position.x = Math.cos(Date.now() * 0.0001) * 18;
      uranus.position.z = Math.sin(Date.now() * 0.0001) * 18;

neptune.position.x = Math.cos(Date.now() * 0.00008) * 21;
neptune.position.z = Math.sin(Date.now() * 0.00008) * 21;

// Rotate the Sun
sun.rotation.z+=0.01;
// Rotate the planets
mercury.rotation.z += 0.01;
venus.rotation.z += 0.01;
earth.rotation.z += 0.01;
mars.rotation.z += 0.01;
jupiter.rotation.z += 0.01;
saturn.rotation.z += 0.01;
uranus.rotation.z += 0.01;
neptune.rotation.z += 0.01;
//

// Rotate the moons
// moon1.rotation.y += 0.03;
// moon2.rotation.y += 0.03;

// Render the scene
renderer.render(scene, camera);
}

// Start the animation
animate();