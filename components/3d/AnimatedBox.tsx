import React, { useState,useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "react-spring";
//import "./styles.css";

type Props = {}

const AnimatedBox = (props: Props) => {
    const [active, setActive] = useState(false);
    const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
})
    const mesh:any = React.useRef();
    const springs = useSpring({ scale: active ? 1.5 : 1 })
    
    useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a * 4;
  });
     
  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={mesh}>
        <boxGeometry />
        <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  )
}

export default AnimatedBox