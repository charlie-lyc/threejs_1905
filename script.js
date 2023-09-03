let camera, scene, renderer, cube

function init() {
    scene = new THREE.Scene() // 1. Init Scene
    camera = new THREE.PerspectiveCamera( // 2. Init Camera
        75,                                     // fov : camera frustum vertical field of view
        window.innerWidth / window.innerHeight, // aspect : camera frustum aspect ratio
        0.1,                                    // near : camera frustum near plane
        1000                                    // far :  camera frustum far plane
    )
    renderer = new THREE.WebGLRenderer({ antialias: true }) // 3. Init Renderer (More Sharp Edge)
    renderer.setSize(window.innerWidth, window.innerHeight) // Set Size
    document.body.appendChild(renderer.domElement) // Render to Canvas Element
    const geometry = new THREE.BoxGeometry(3, 3, 3) // 4. Init Box Geometry Object

    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }) // 5. Create Material with Color
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const texture = new THREE.TextureLoader().load('textures/crate.gif') // 5-1. Add Texture
    const material = new THREE.MeshBasicMaterial({ map: texture }) // 5-2. Create Material with Texture

    cube = new THREE.Mesh(geometry, material) // 6. Create Mesh with Geometry and Material
    scene.add(cube) // Add to Scene
    camera.position.z = 5 // Position Camera
}

function animate() {
    requestAnimationFrame(animate) // Draw the Scene Every Time the Scene is Rendered
    cube.rotation.x += 0.01 // Rotate Cube (Change Values to Change Speed)
    cube.rotation.y += 0.01 // Rotate Cube (Change Values to Change Speed)
    renderer.render(scene, camera) // Render Scene and Camera
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight // Camera Frustum Aspect Ratio
    camera.updateProjectionMatrix() // Changes to Aspect After Making
    renderer.setSize(window.innerWidth, window.innerHeight) // Reset Size
}

window.addEventListener('resize', onWindowResize, false) 

///////////////////////////////////////////////////////////////////

init()
animate()