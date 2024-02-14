import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ThreeElement() {
  const el = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (el.current) {
      el.current.rotation.x += 0.01;
    }
    // console.log(el.current);
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={el}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}

export default ThreeElement;
