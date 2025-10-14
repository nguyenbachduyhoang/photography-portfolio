"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const heroImages = [
  //"/hero-dramatic-portrait-cinematic-lighting.jpg",
  // "/hero-fashion-urban-street-style.jpg",
  //"/hero-landscape-mountain-sunset.jpg",
  "DSC00778.png",
  "DSC_5507_1.jpg",
  "BoDoi.jpg",
  "ConDoc.jpg",
]

export function ParallaxHero() {
  const ref = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {heroImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Hero Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
      >
        <div className="max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mb-6 text-6xl font-extralight tracking-widest md:text-8xl"
          >
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              NGHỆ THUẬT
            </span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="block text-4xl font-light italic md:text-6xl"
            >
              Nhiếp Ảnh
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-8"
          >
            <p className="text-xl font-light leading-relaxed md:text-2xl">
              Tạo ra những khoảnh khắc đẹp với phong cách hiện đại và sáng tạo
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 2 }}
              className="mx-auto mt-4 h-px bg-white/60"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <span className="relative z-10">Khám Phá Portfolio</span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white/10 px-8 py-4 text-sm font-medium uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Liên Hệ Ngay
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white" : "bg-white/30"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}
