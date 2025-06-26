'use client'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Cube() {
    const modelRef = useRef()
    const { scene } = useGLTF('/earth.glb')

    // Store mouse state
    const mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const blurElement = document.getElementById('blur-overlay');

        // 🔹 Animate backdrop blur on scroll
        gsap.to(blurElement, {
            backdropFilter: 'blur(12px)',
            ease: 'none',
            scrollTrigger: {
                trigger: '#scroll-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        // 🔹 Also add other existing scroll effects (zoom, fade, etc)
        // ...
    }, []);


    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x = -(event.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame(() => {
        if (!modelRef.current) return

        // Horizontal (left/right) - works normally
        const targetY = mouse.current.x * 0.5

        // Vertical (up/down) - invert to feel natural
        const targetX = -mouse.current.y * 0.3

        modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.05
        modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.05

        modelRef.current.rotation.x = Math.max(Math.min(modelRef.current.rotation.x, 0.5), -0.5)
    })



    useEffect(() => {
        if (!modelRef.current) return

        // Enable transparency for fading
        modelRef.current.traverse((child) => {
            if (child.isMesh) {
                child.material.transparent = true
            }
        })

        // Scroll-based zoom & fade
        gsap.to(modelRef.current.scale, {
            x: 3,
            y: 3,
            z: 3,
            scrollTrigger: {
                trigger: '#scroll-wrapper',
                start: 'top top',
                end: '+=100%',
                scrub: true,
            },
        })

        gsap.to(modelRef.current.position, {
            z: -5,
            scrollTrigger: {
                trigger: '#scroll-wrapper',
                start: 'top top',
                end: '+=100%',
                scrub: true,
            },
        })

        modelRef.current.traverse((child) => {
            if (child.isMesh) {
                gsap.to(child.material, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: '#scroll-wrapper',
                        start: '50%',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }
        })
    }, [])

    return <primitive ref={modelRef} object={scene} scale={1} position={[0, -2, 0]} />
}
