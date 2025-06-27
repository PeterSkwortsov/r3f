import { DoubleSide } from "three"
import { useMemo, useRef, useEffect } from "react"

export default function CustomObject()
{

const verticlesCount = 30
const geometryRef = useRef()


const positions = useMemo(() => {

    const positions = new Float32Array(verticlesCount * 3)

    for (let i = 0; i < verticlesCount * 3; i++)
        positions[i] = (Math.random() - 0.5) * 3

    return positions
}, [])

useEffect(() => {
    geometryRef.current.computeVertexNormals()
}, [])

return<mesh>
    <bufferGeometry ref={geometryRef}>
            <bufferAttribute 
                attach="attributes-position"
                count={verticlesCount}
                itemSize={3}
                array={positions}

            />
        </bufferGeometry>
    <meshStandardMaterial color='red' side={DoubleSide} />
    </mesh>
}