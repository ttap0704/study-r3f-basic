import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement";

function App() {
  return (
    <>
      <Canvas>
        <ThreeElement></ThreeElement>
      </Canvas>
    </>
  );
}

export default App;
