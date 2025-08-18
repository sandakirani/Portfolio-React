import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import "./Skills.css";

// 🔹 Reusable Model Component
function Model({ path, position, url }: { path: string; position: [number, number, number]; url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path);

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
      position={position}
      onClick={() => window.open(url, "_blank")}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function Skills() {
  const [category, setCategory] = useState("frontend"); // default section

  return (
    <section className="skill-contain" id="skills">
      <p className="skill-heading">My Skills</p>
      <p className="skill-subheading">SKILLS</p>

      {/* 🔹 Category Buttons */}
      <div className="skill-buttons">
        <button onClick={() => setCategory("frontend")}>Frontend</button>
        <button onClick={() => setCategory("backend")}>Backend</button>
        <button onClick={() => setCategory("database")}>Databases</button>
        <button onClick={() => setCategory("tools")}>Tools & Design</button>
        <button onClick={() => setCategory("version")}>Version Control</button>
      </div>

      {/* 🔹 Canvas */}
      <div className="skill-box">
        <Canvas camera={{ position: [0, 1, 70], fov: 10 }}>
          <ambientLight intensity={1.6} />
          <directionalLight position={[2, 10, 2]} />
          <Suspense fallback={null}>
            {category === "frontend" && (
              <>
                <Model path="/model/react.glb" position={[-8, 0, 0]} url="https://react.dev/" />
                <Model path="/model/html.glb" position={[-4, 0, 0]} url="https://www.w3schools.com/html/" />
                <Model path="/model/css.glb" position={[0, 0, 0]} url="https://www.w3schools.com/css/" />
                <Model path="/model/js.glb" position={[4, 0, 0]} url="https://www.w3schools.com/js/" />
                <Model path="/model/expo.glb" position={[8, 0, 0]} url="https://expo.dev/" />
              </>
            )}

            {category === "backend" && (
              <>
                <Model path="/model/csharp.glb" position={[-4, 0, 0]} url="https://learn.microsoft.com/en-us/dotnet/csharp/" />
                <Model path="/model/php.glb" position={[0, 0, 0]} url="https://www.php.net/" />
                <Model path="/model/kotlin.glb" position={[4, 0, 0]} url="https://kotlinlang.org/" />
              </>
            )}

            {category === "database" && (
              <>
                <Model path="/model/mongodb.glb" position={[-2, 0, 0]} url="https://www.mongodb.com/" />
                <Model path="/model/sQlite.glb" position={[2, 0, 0]} url="https://www.sqlite.org/" />
              </>
            )}

            {category === "tools" && (
              <>
                <Model path="/model/android.glb" position={[-10, 0, 0]} url="https://developer.android.com/studio" />
                <Model path="/model/vscode.glb" position={[-6, 0, 0]} url="https://code.visualstudio.com/" />
                <Model path="/model/vs.glb" position={[-2, 0, 0]} url="https://visualstudio.microsoft.com/" />
                <Model path="/model/postman.glb" position={[2, 0, 0]} url="https://www.postman.com/" />
                <Model path="/model/matlab.glb" position={[6, 0, 0]} url="https://www.mathworks.com/products/matlab.html" />
                <Model path="/model/blender.glb" position={[10, 0, 0]} url="https://www.blender.org/" />
                <Model path="/model/figma.glb" position={[-2, -4, 0]} url="https://www.figma.com/" />
                <Model path="/model/canva.glb" position={[2, -4, 0]} url="https://www.canva.com/" />
              </>
            )}

             {category === "version" && (
              <>
                <Model path="/model/git.glb" position={[0, 0, 0]} url="https://github.com" />
              </>
            )}
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
