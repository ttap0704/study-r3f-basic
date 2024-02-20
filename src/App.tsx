import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import InteractionTest from "./InteractionTest";

function App() {
  const color = useControls({
    value: "black",
  });

  const grid = useControls({
    segment: { value: 10, min: 2, max: 100, step: 1 },
  });

  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [5, 5, 5],
        }}
        shadows // 그림자가 들어가는 canvas가 됨
      >
        <color attach="background" args={[color.value]} />
        {/* 마우스 클릭으로 카메라 이동시키는 Node */}
        <OrbitControls />
        {/* 물체에 대한 방향을 선으로 안내해주는 Node */}
        <axesHelper args={[5]} />
        {/* 물체 바닥을 바둑판으로 안내해주는 Node */}
        <gridHelper args={[10, grid.segment]} />
        <InteractionTest />
      </Canvas>
    </>
  );
}

export default App;
