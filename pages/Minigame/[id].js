import { useEffect, useRef, useState } from "react";


import phaserGame from './PhaserGame'

export default function MiniGame() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const scene = phaserGame.scene.keys.helloworld;
  scene.createEmitter()
  return (
    <>

    </>
  );
}



// import { useEffect, useRef, useState } from "react";

// import dynamic from 'next/dynamic'

// const Layer = dynamic(
//   () => import('react-konva'),
//   { ssr: false }
// )

// const Text = dynamic(
//   () => import('react-konva'),
//   { ssr: false }
// )

// const Stage = dynamic(
//   () => import('react-konva'),
//   { ssr: false }
// )


// export default function MiniGame() {
//   const [x, setX] = useState(50);
//   const [y, setY] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);

//   return (
//     <>
//       <Stage width={75} height={61}>
//         <Layer>
//           <Text
//             text="Draggable Text"
//             x={x}
//             y={y}
//             draggable
//             fill={isDragging ? "green" : "black"}
//             onDragStart={() => {
//               setIsDragging(true);
//             }}
//             onDragEnd={(e) => {
//               setIsDragging(false);
//               setX(e.target.x());
//               setY(e.target.y());
//             }}
//           />
//         </Layer>
//       </Stage>
//     </>
//   );
// }
