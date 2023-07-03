import { Link } from 'react-router-dom'
import { User, useAuth0 } from '@auth0/auth0-react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useNavigate } from 'react-router-dom'

function Home() {

  const gltf = useLoader(GLTFLoader, '../imgs/game_boy_advance_sp.glb')


  // const handleSignIn = () => {
  //   return loginWithRedirect()
  // }


  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <div className="neon">Aura </div>
        <div className="flux">Pets </div>

        <button onClick={() => navigate('/Quiz')}>Find your pet</button>
      </div>

      <div className="three-d-parent">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Canvas camera={{ position: [0, 0, 2], fov: 45 }} shadows>
            <directionalLight position={[3.3, 2.0, 4.4]} castShadow={true} />
            <pointLight position={[0, 2, 0]} intensity={1} color="#FF1493" />
            <primitive
              object={gltf.scene}
              position={[0, -0.45, 0]}
              rotation={[0, Math.PI * 1.72, 0]}
              children-0-castShadow={true}
              scale={[1.8, 1.8, 1.8]}
            />
          </Canvas>
        </div>
      </div>

    </>
  )
}

export default Home
