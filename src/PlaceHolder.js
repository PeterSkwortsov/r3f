export default function PlaceHolder (props) {


    return <>
        <mesh {...props} position-y={0.1} scale={[2, 1, 2]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial color="mediumpurple" wireframe />
        </mesh>
    
    </>
} 