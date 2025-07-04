import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import * as THREE from 'three'

const root = createRoot(document.querySelector('#root'))


root.render(
    <Canvas
      shadows={true}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-5,2,6]
      }}

    >
      {/* <color args={['ivory']} attach="background"/> */}
       <Experience />
    </Canvas>


);


