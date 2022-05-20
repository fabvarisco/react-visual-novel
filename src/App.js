import PhaserComponent from "./Components/Phaser/PhaserComponent";
import TextGame from "./Components/TextGame/TextGame";
import TitleScreen from "./Components/TitleScreen/TitleScreen";
import Game from "./Components/Game/Game";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/textgame" element={<TextGame />} />
        <Route path="/phaser" element={<PhaserComponent />} />
      </Routes>
    </div>
  );
}

export default App;
