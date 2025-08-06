import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Html() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/html.glb");

  useEffect(() => {
    // Center the model to its own origin
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); // Move the model so its center is at (0,0,0)
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Self rotation
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-6, 0, 0]} // This places the entire rotating object in space
      onClick={() => window.open("https://www.w3schools.com/html/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}


function Css() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/css.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-3, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}


function Js() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/js.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-2, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}


function Php(){
 const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/php.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Mongodb(){
 const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/mongodb.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[2, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function React(){
 const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/react.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[4, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Kotlin(){
const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/kotlin.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[6, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Expo(){
const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/expo.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[8, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Blender(){
const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/blender.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-8, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Figma(){
const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/figma.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[-10, 0, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

function Canva(){
const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/model/canva.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 2, 0]} // Your preferred spot
      onClick={() => window.open("https://www.w3schools.com/css/", '_blank')}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function Skills() {
    return(
        <div>
            <Canvas camera={{ position: [0, 1, 20], fov: 10 }}>
                <ambientLight intensity={1.6} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <Html />
                    <Css />
                    <Js />
                    <Php />
                    <Mongodb />
                    <React />
                    <OrbitControls />
                    <Kotlin />
                    <Expo />
                    <Blender />
                    <Figma />
                    <Canva />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
}