"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play, Camera } from "lucide-react"
import Image from "next/image"

const heroImages = ["/professional-portrait-photography-studio-lighting-.jpg", "/artistic-landscape-photography-golden-hour-mountai.jpg", "/modern-fashion-photography-urban-setting-street-st.jpg"]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </div>

      {/* Content with enhanced animations */}
      <div
        className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Camera className="h-8 w-8 text-accent" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
          <span className="font-extralight">Nghệ Thuật</span>
          <span className="block font-bold text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            Nhiếp Ảnh
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
          Ghi lại những khoảnh khắc đẹp nhất của cuộc sống với phong cách hiện đại và sáng tạo
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-lg px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Khám Phá Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-white/5 backdrop-blur-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Behind The Scenes
          </Button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-light tracking-wider">CUỘN XUỐNG</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`relative w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentImage ? "bg-accent" : "bg-white/30"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            {index === currentImage && <div className="absolute inset-0 bg-accent rounded-full animate-pulse" />}
          </button>
        ))}
      </div>
    </section>
  )
}
