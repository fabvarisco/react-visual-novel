import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectBackground } from "../../Redux/backgroundSlice";

export default function CanvasImage({ width, height }) {
  const ref = useRef();
  const { background } = useSelector(selectBackground);
  
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    const image = new window.Image();
    image.src = background;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
  }, [background]);

  return (
    <canvas
      className={"canvas"}
      ref={ref}
      id="canvasGame"
      width={width}
      height={height}
    ></canvas>
  );
}
