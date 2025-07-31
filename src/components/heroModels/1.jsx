
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function El(props) {
  const { nodes, materials } = useGLTF('/models/1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="computer_chair_0" position={[-0.195, 0.022, 0.088]}>
                <mesh name="Object_4_1" geometry={nodes.Object_4_1.geometry} material={materials.CHAIR} />
              </group>
              <group name="Floor_1" scale={3.5}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Wood} />
              </group>
              <group name="Table_2" position={[-0.152, 0, 0.72]}>
                <mesh name="Object_8_1" geometry={nodes.Object_8_1.geometry} material={materials.STEEL} />
              </group>
              <group name="mouse_3" position={[-0.305, 0.731, 0.696]} rotation={[-Math.PI, -0.002, -Math.PI]} scale={1.849}>
                <mesh name="Object_10_1" geometry={nodes.Object_10_1.geometry} material={materials.STEEL} />
              </group>
              <group name="office_worker_2_95">
                <group name="GLTF_created_0">
                  <primitive object={nodes.Hips_85} />
                  <group name="body_86" />
                  <group name="bottom_87" />
                  <group name="eye_left_88" />
                  <group name="eye_right_89" />
                  <group name="hair_90" />
                  <group name="head_91" />
                  <group name="shoes_92" />
                  <group name="teeth_93" />
                  <group name="top_94" />
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.body} skeleton={nodes.Object_14.skeleton} />
          <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.bottom} skeleton={nodes.Object_16.skeleton} />
          <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.eyes} skeleton={nodes.Object_18.skeleton} />
          <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.eyes} skeleton={nodes.Object_20.skeleton} />
          <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.hair} skeleton={nodes.Object_22.skeleton} />
          <skinnedMesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.head} skeleton={nodes.Object_24.skeleton} />
          <skinnedMesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.shoes} skeleton={nodes.Object_26.skeleton} />
          <skinnedMesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Object_28.skeleton} />
          <skinnedMesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.material} skeleton={nodes.Object_30.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/1.glb')
