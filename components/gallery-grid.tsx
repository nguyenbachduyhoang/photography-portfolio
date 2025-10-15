"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Tất cả", "Chân dung", "Phong cảnh", "Sự kiện", "Sản phẩm", "Nghệ thuật", "Street"]

const galleryImages = [
  {
    id: 1,
    src: "/wedding-romantic-couple-golden-hour.jpg",
    category: "Sự kiện",
    title: "Golden Hour Wedding",
    description: "Khoảnh khắc lãng mạn trong ánh hoàng hôn vàng",
    featured: true,
  },
  {
    id: 4,
    src: "/landscape-nature-forest-mist.jpg",
    category: "Phong cảnh",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  
  {
    id: 7,
    src: "/architecture-modern-building-geometry.jpg",
    category: "Nghệ thuật",
    title: "Geometric Architecture",
    description: "Kiến trúc hiện đại với hình học ấn tượng",
    featured: false,
  },
  {
    id: 8,
    src: "/event-concert-stage-lighting.jpg",
    category: "Sự kiện",
    title: "Concert Energy",
    description: "Năng lượng sân khấu với ánh sáng đầy màu sắc",
    featured: false,
  },

  {
    id: 10,
    src: "/potrairt/ECU.jpg",
    category: "Chân dung",
    title: "ECU Portrait",
    description: "Chân dung ECU",
    featured: false,
  },
  {
    id: 11,
    src: "/potrairt/KTXA.jpg",
    category: "Chân dung",
    title: "KTXA Portrait",
    description: "Chân dung KTXA",
    featured: false,
  },
  {
    id: 12,
    src: "/potrairt/NganHang.jpg",
    category: "Chân dung",
    title: "Ngân Hàng Portrait",
    description: "Chân dung Ngân Hàng",
    featured: false,
  },
  {
    id: 13,
    src: "/potrairt/NganHang1.jpg",
    category: "Chân dung",
    title: "Ngân Hàng 1 Portrait",
    description: "Chân dung Ngân Hàng 1",
    featured: false,
  },
  {
    id: 14,
    src: "/potrairt/UTE.jpg",
    category: "Chân dung",
    title: "UTE Portrait",
    description: "Chân dung UTE",
    featured: false,
  },
  {
    id: 15,
    src: "/potrairt/UTE1.jpg",
    category: "Chân dung",
    title: "UTE 1 Portrait",
    description: "Chân dung UTE 1",
    featured: false,
  },
  {
    id: 16,
    src: "/landscape/1.jpg",
    category: "Phong cảnh",
    title: "Misty Forest",
    description: "Con dốc nắng huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 17,
    src: "/street/1.jpg",
    category: "Street",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 18,
    src: "/street/2.jpg",
    category: "Street",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 19,
    src: "/street/3.jpg",
    category: "Street",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 20,
    src: "/street/4.jpg",
    category: "Street",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 21,
    src: "/street/5.jpg",
    category: "Street",
    title: "Misty Forest",
    description: "Rừng sương mù huyền ảo trong buổi sáng",
    featured: false,
  },
  {
    id: 22,
    src: "/product/DSC_4287.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Ảnh sản phẩm bố cục gọn gàng",
    featured: false,
  },
  {
    id: 23,
    src: "/product/DSC_4302.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Đồ uống tươi mát",
    featured: false,
  },
  {
    id: 24,
    src: "/product/DSC_4806.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Món ăn tươi ngon",
    featured: false,
  },
  {
    id: 25,
    src: "/product/DSC_4824.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Đặc tả món ăn",
    featured: false,
  },
  {
    id: 26,
    src: "/product/DSC_5943.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Bánh ngọt ánh sáng đẹp",
    featured: false,
  },
  {
    id: 27,
    src: "/product/DSC_5947.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Croissant hạnh nhân",
    featured: false,
  },
  {
    id: 28,
    src: "/product/DSC_6051_1.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Bánh ngọt nhiều màu",
    featured: false,
  },
  {
    id: 29,
    src: "/product/DSC09958.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Bộ set món ăn",
    featured: false,
  },
  {
    id: 30,
    src: "/product/DSC09975.jpg",
    category: "Sản phẩm",
    title: "Product Shot",
    description: "Bộ set món ăn (2)",
    featured: false,
  },
]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredImages =
    selectedCategory === "Tất cả" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = Number.parseInt(entry.target.getAttribute("data-image-id") || "0")
            setVisibleImages((prev) => [...prev, imageId])
          }
        })
      },
      { threshold: 0.1 },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = filteredImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-6"
          >
            <Sparkles className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide">PORTFOLIO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight"
          >
            Tác Phẩm
            <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Nghệ Thuật
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Khám phá bộ sưu tập những tác phẩm nhiếp ảnh đa dạng và sáng tạo, từ chân dung nghệ thuật đến phong cảnh
            thiên nhiên
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg scale-105"
                    : "hover:bg-accent/10 hover:border-accent/50 hover:scale-105"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(image.id)}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  aspectRatio: image.featured ? "16/10" : "4/5",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {image.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute top-4 left-4"
                    >
                      <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white backdrop-blur-sm shadow-lg">
                        <Heart className="h-3 w-3 mr-1 fill-current" />
                        Nổi bật
                      </Badge>
                    </motion.div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredImage === image.id ? 0 : 20,
                        opacity: hoveredImage === image.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white backdrop-blur-sm mb-3 border-white/30"
                      >
                        {image.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-accent/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredImage === image.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl p-12 border border-accent/20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold mb-4"
            >
              Bạn thích những gì bạn thấy?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg"
            >
              Hãy để chúng tôi tạo ra những khoảnh khắc đáng nhớ cho bạn với phong cách chuyên nghiệp và sáng tạo
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Đặt Lịch Chụp Ngay
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white hover:text-accent transition-colors bg-black/50 rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </button>

                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent transition-colors bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-accent transition-colors bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="relative">
                  <Image
                    src={selectedImageData.src || "/placeholder.svg"}
                    alt={selectedImageData.title}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-lg">
                    <h3 className="text-2xl font-bold mb-2">{selectedImageData.title}</h3>
                    <p className="text-white/80">{selectedImageData.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
