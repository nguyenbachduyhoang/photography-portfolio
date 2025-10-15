"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Calendar, Camera, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const featuredProjects = [
  {
    id: 1,
    title: "Bộ ảnh cưới Làng Đại Học",
    category: "Wedding",
    client: "Cặp Đôi Hạnh Phúc",
    year: "2023",
    description:
      "Bộ ảnh cưới lãng mạn, nơi cô dâu và chú rể đã có những kỷ niệm đẹp trong những năm tháng yêu nhau.",
      image: "/DSC_7228.png",
    //  image: "/wedding-romantic-couple-golden-hour.jpg",
    stats: {
      photos: 500,
      locations: 3,
      hours: 8,
    },
  },
  {
    id: 2,
    title: "Fashion Editorial Portrait",
    category: "Fashion",
    client: "ELLE Vietnam",
    year: "2024",
    description:
      "Bộ ảnh thời trang editorial với concept 'Modern Elegance', thể hiện vẻ đẹp hiện đại và tinh tế của người phụ nữ.",
    image: "/fashion-editorial-modern-style.jpg",
    stats: {
      photos: 80,
      locations: 3,
      hours: 12,
    },
  },
  {
    id: 3,
    title: "Artistic Black & White",
    category: "Portrait",
    client: "Personal Project",
    year: "2024",
    description:
      "Dự án cá nhân khám phá vẻ đẹp của chân dung đen trắng, tập trung vào cảm xúc và biểu cảm của con người.",
    image: "/portrait-artistic-black-white.jpg",
    stats: {
      photos: 60,
      locations: 2,
      hours: 6,
    },
  },
]

export function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-6">
            <Award className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide">DỰ ÁN NỔI BẬT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            Câu Chuyện
            <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Qua Ảnh
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-3xl group">
              <motion.div
                key={`image-${activeProject}`}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={featuredProjects[activeProject].image || "/placeholder.svg"}
                  alt={featuredProjects[activeProject].title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-3">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                      {featuredProjects[activeProject].category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">{featuredProjects[activeProject].title}</h3>
                  </div>
                  <div className="text-right text-white/90 text-sm space-y-1">
                    <div className="flex items-center justify-end">
                      <Camera className="h-4 w-4 mr-1" />
                      {featuredProjects[activeProject].stats.photos} ảnh
                    </div>
                    <div className="flex items-center justify-end">
                      <MapPin className="h-4 w-4 mr-1" />
                      {featuredProjects[activeProject].stats.locations} địa điểm
                    </div>
                    <div className="flex items-center justify-end">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredProjects[activeProject].stats.hours} giờ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-accent font-semibold text-lg">{featuredProjects[activeProject].client}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground font-medium">{featuredProjects[activeProject].year}</span>
              </div>
              <motion.h3
                key={`title-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
              >
                {featuredProjects[activeProject].title}
              </motion.h3>
              <motion.p
                key={`description-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                {featuredProjects[activeProject].description}
              </motion.p>
            </div>

            <div className="flex space-x-4 mb-8">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? "bg-accent w-12"
                      : "bg-muted-foreground/30 w-8 hover:w-10 hover:bg-accent/50"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8 py-4 rounded-full text-lg shadow-lg">
                Xem chi tiết dự án
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
