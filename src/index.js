import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { CineonToneMapping } from 'three';
import * as THREE from 'three'

const root = createRoot(document.querySelector('#root'))

root.render(
    <Canvas
    // flat // Оно указывает, использовать ли THREE.NoToneMapping вместо THREE.ACESFilmicToneMapping
    // dpr={[1,2]} // соотношение пикселей
    gl={
      { 
        // toneMapping: CineonToneMapping,
        outputEncoding: THREE.LinearEncoding
       }
    }
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-5,2,6]
      }}
    >
       <Experience />
    </Canvas>
  


);


