import * as THREE from "three";
import { useThree } from "@react-three/fiber";
export default function InteractionTest() {
  const { camera, raycaster, pointer } = useThree();

  function groupClickFunc(e: any) {
    console.log("groupClickFunc e : ", e);

    // raycaster : 보고있는 시점에서, 이벤트가 전파되는 것을 말함
    raycaster.setFromCamera(pointer, camera);

    e.stopPropagation(); // stopPropagation으로 이벤트 전파를 막을 수 있음

    const intersects = raycaster.intersectObject(e.eventObject, true);
    console.log("intersects : ", intersects);
    if (intersects.length > 0) {
      console.log("intersects[0] : ", intersects[0]);
      const mesh = intersects[0].object as any;
      mesh.material.color = new THREE.Color("red");
    }
  }
  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <group onClick={(e) => groupClickFunc(e)}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </group>
    </>
  );
}
