import { Game, Scene, Text } from 'react-phaser-fiber'
export default function PhaserComponent() {
  return (
    <Game width={400} height={400}>
      <Scene sceneKey="main">
        <Text x={100} y={100} text="Hello World!" style={{ color: "white" }} />
      </Scene>
    </Game>
  );
}
