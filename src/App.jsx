import { Route, Routes } from "react-router-dom";
import TextGame from "./Components/TextGame/TextGame";
import TitleScreen from "./Components/TitleScreen/TitleScreen";
import Game from "./Components/Game/Game";
import Minigame from "./Components/Minigame/Minigame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TitleScreen />} />
      <Route path="/game/:id" element={<Game />} />
      <Route exact path="/textgame/:id" element={<TextGame />} />
    </Routes>
  );
}

export default App;
