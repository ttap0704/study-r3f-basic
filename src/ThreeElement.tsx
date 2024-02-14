import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ThreeElement() {
  const el = useRef<THREE.Mesh>(null);

  console.log("렌더링안하니?");

  // 60 Frame 동안 렌더링되는 값을 확인할 수 있음
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
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

export default ThreeElement;
