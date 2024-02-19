import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { useTexture } from "@react-three/drei";

export default function ThreeElementCH6() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const controls = useControls({
    thickness: { value: 0.1, min: 0.1, max: 10, step: 0.1 },
  });

  const matcap = useTexture("./imgs/matcap3.jpg"); // material의 질감을 사용
  const tone = useTexture("./imgs/fiveTone.jpg");
  tone.minFilter = THREE.NearestFilter;
  tone.magFilter = THREE.NearestFilter;

  useEffect(() => {
    const meshLengh = groupRef.current!.children.length;
    for (let i = 0; i < meshLengh; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = (i % (meshLengh / 2)) * 2 - 4;
      mesh.position.z = 0;
      if (i >= meshLengh / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshBasicMaterial color="green" wireframe />
        </mesh>
        {/* 빛의 영향을 받지 않는 Material */}
        <mesh>
          <meshBasicMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
          />
        </mesh>

        {/* 반사각이 없는 매트한 재질 */}
        <mesh>
          <meshLambertMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
          />
        </mesh>

        {/* 금속과 같은 반사각이 있는 재질 */}
        <mesh>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            specular={"#fff"} // 반사각에 대한 색상
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshNormalMaterial />
        </mesh>

        {/* meshStandardMaterial, meshPhysicalMaterial 두가지는 PBR 방식         */}
        <mesh>
          <meshStandardMaterial
            color="green"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={1} // 거칠기
            metalness={5} // 금속성
            // flatShading={true}
          />
        </mesh>

        <mesh>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1} // 투명한 유리
            thickness={controls.thickness}
            ior={2.33}
            // flatShading={true}
          />
        </mesh>
        <mesh>
          <meshDepthMaterial />
        </mesh>
        <mesh>
          <meshMatcapMaterial matcap={matcap} flatShading={true} />
        </mesh>
        <mesh>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
      </group>
    </>
  );
}
