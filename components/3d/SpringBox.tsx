
// this example is using react-spring@9


import React, { useState,useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "react-spring";
type Props = {}

const SpringBox = () => {
     const [active, setActive] = useState(false);
  // create a common spring that will be used later to interpolate other values
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // interpolate values from commong spring
  const scale = spring.to([0, 1], [1, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
    const color = spring.to([0, 1], ["#6246ea", "#e45858"]);
     const mesh:any = React.useRef();
    return (
        <div><animated.mesh scale={spring}  onClick={() => setActive(!active)} ref={mesh}>
        <boxGeometry />  <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.5} attach="material" color={color} />
        <meshPhongMaterial color="royalblue" />
    </animated.mesh></div>
        
   
    );
}

export default SpringBox

