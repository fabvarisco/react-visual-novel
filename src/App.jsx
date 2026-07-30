import { Route, Routes } from "react-router-dom";
import TextGame from "./Components/TextGame/TextGame";
import TitleScreen from "./Components/TitleScreen/TitleScreen";
import Game from "./Components/Game/Game";
import StyleInjector from "./Components/StyleInjector";
import MobileWarning from "./Components/MobileWarning";

function App() {
  return (
    <>
      <MobileWarning />
      <StyleInjector />
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/game/:id" element={<Game />} />
        <Route exact path="/textgame/:id" element={<TextGame />} />
      </Routes>
    </>
  );
}

export default App;
