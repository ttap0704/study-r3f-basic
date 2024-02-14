import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 1000,
          position: [3, 3, 0],
        }}
      >
        {/* 마우스 클릭으로 카메라 이동시키는 Node */}
        <OrbitControls />
        {/* 물체에 대한 방향을 선으로 안내해주는 Node */}
        <axesHelper args={[5]} />
        {/* 물체 바닥을 바둑판으로 안내해주는 Node */}
        <gridHelper args={[10, 5]} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
