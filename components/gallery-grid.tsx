"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Tất cả", "Chân dung", "Phong cảnh", "Nội thất", "Sự kiện", "Sản phẩm", "Street"]

const galleryImages = [
  // Interior Photography - Nội thất
  {
    id: 55,
    src: "/interior/DSC_5581.jpg",
    category: "Nội thất",
    title: "Phòng ngủ sáng tự nhiên",
    description: "Phòng ngủ với cửa sổ lớn, ánh sáng tự nhiên.",
    featured: false,
  },
  {
    id: 56,
    src: "/interior/DSC_5608.jpg",
    category: "Nội thất",
    title: "Phòng khách view biển",
    description: "Phòng khách hiện đại, view biển tuyệt đẹp.",
    featured: false,
  },
  {
    id: 57,
    src: "/interior/DSC_5658.jpg",
    category: "Nội thất",
    title: "Phòng ngủ gỗ cao cấp",
    description: "Phòng ngủ với nội thất gỗ sang trọng.",
    featured: false,
  },
  {
    id: 58,
    src: "/interior/DSC_5440.jpg",
    category: "Nội thất",
    title: "Phòng khách rộng rãi",
    description: "Phòng khách kết hợp bàn ăn, không gian mở.",
    featured: false,
  },
  {
    id: 59,
    src: "/interior/DSC_5458.jpg",
    category: "Nội thất",
    title: "Phòng ngủ xanh biển",
    description: "Phòng ngủ với tông màu xanh biển mát mẻ.",
    featured: false,
  },
  {
    id: 60,
    src: "/interior/DSC_5494.jpg",
    category: "Nội thất",
    title: "Ban công view thành phố",
    description: "Ban công rộng, view thành phố đẹp.",
    featured: false,
  },
  {
    id: 62,
    src: "/interior/DSC_5542.jpg",
    category: "Nội thất",
    title: "Ban công xanh mát",
    description: "Ban công với cây xanh, ánh sáng tự nhiên.",
    featured: false,
  },
  {
    id: 63,
    src: "/interior/DSC_5560.jpg",
    category: "Nội thất",
    title: "Phòng khách và bếp",
    description: "Phòng khách liền kề bếp, thiết kế tiện nghi.",
    featured: false,
  },
  {
    id: 64,
    src: "/interior/DSC_5902.jpg",
    category: "Nội thất",
    title: "Bàn ăn phong cách Bắc Âu",
    description: "Bàn ăn với nội thất phong cách Bắc Âu.",
    featured: false,
  },
  {
    id: 50,
    src: "/interior/DSC_5740.jpg",
    category: "Nội thất",
    title: "Phòng ngủ hiện đại",
    description: "Không gian phòng ngủ rộng rãi, nội thất gỗ sang trọng.",
    featured: true,
  },
  {
    id: 51,
    src: "/interior/DSC_5772.jpg",
    category: "Nội thất",
    title: "Bàn ăn và phòng khách",
    description: "Bàn ăn kết hợp phòng khách, thiết kế tối giản hiện đại.",
    featured: false,
  },
  {
    id: 52,
    src: "/interior/DSC_5746.jpg",
    category: "Nội thất",
    title: "Căn hộ studio",
    description: "Căn hộ studio với ánh sáng tự nhiên, nội thất tiện nghi.",
    featured: false,
  },
  {
    id: 53,
    src: "/interior/DSC_5761.jpg",
    category: "Nội thất",
    title: "Phòng ngủ và bếp",
    description: "Phòng ngủ liền kề bếp, không gian mở hiện đại.",
    featured: false,
  },
  {
    id: 54,
    src: "/interior/DSC_5776.jpg",
    category: "Nội thất",
    title: "Phòng khách sang trọng",
    description: "Phòng khách với tivi lớn, nội thất gỗ cao cấp.",
    featured: false,
  },

  // Portrait category - Chân dung
  {
    id: 1,
    src: "/potrairt/ECU.jpg",
    category: "Chân dung",
    title: "Nàng thơ",
    description: "Chân dung nàng thơ với thiên nhiên",
    featured: false,
  },
  {
    id: 2,
    src: "/potrairt/KTXA.jpg",
    category: "Chân dung",
    title: "KTX A Portrait",
    description: "Chân dung sinh viên KTX A",
    featured: false,
  },
  {
    id: 3,
    src: "/potrairt/NganHang.jpg",
    category: "Chân dung",
    title: "Sinh Viên",
    description: "Chân dung sinh viên ĐH Ngân Hàng",
    featured: false,
  },
  {
    id: 4,
    src: "/potrairt/NganHang1.jpg",
    category: "Chân dung",
    title: "Sinh Viên",
    description: "Chân dung sinh viên ĐH Ngân Hàng",
    featured: false,
  },
  {
    id: 5,
    src: "/potrairt/UTE.jpg",
    category: "Chân dung",
    title: "UTE Student",
    description: "Chân dung sinh viên UTE",
    featured: false,
  },
  {
    id: 6,
    src: "/potrairt/UTE1.jpg",
    category: "Chân dung",
    title: "UTE Student",
    description: "Chân dung sinh viên UTE",
    featured: false,
  },

  // Landscape category - Phong cảnh
  {
    id: 7,
    src: "/landscape/1.jpg",
    category: "Phong cảnh",
    title: "Phong Cảnh Tự Nhiên",
    description: "Cảnh quan thiên nhiên tuyệt đẹp",
    featured: false,
  },
  {
    id: 21,
    src: "/landscape/ConDoc.jpg",
    category: "Phong cảnh",
    title: "Con Dốc Tình Yêu",
    description: "Cảnh đẹp Côn Đảo",
    featured: false,
  },
  {
    id: 22,
    src: "/landscape/DSC_5507_1.jpg",
    category: "Phong cảnh",
    title: "Vũng Tàu",
    description: "Bình minh Vũng Tàu",
    featured: false,
  },
  {
    id: 23,
    src: "/landscape/DSC00778.png",
    category: "Phong cảnh",
    title: "Đà Lạt",
    description: "Ảnh phong cảnh Đà Lạt",
    featured: false,
  },
  {
    id: 24,
    src: "/landscape/DSC00789.png",
    category: "Phong cảnh",
    title: "Đà Lạt",
    description: "Ảnh phong cảnh Đà Lạt",
    featured: false,
  },

  // Street Photography
  {
    id: 8,
    src: "/street/1.jpg",
    category: "Street",
    title: "Street Life 1",
    description: "Cuộc sống đường phố",
    featured: false,
  },
  {
    id: 9,
    src: "/street/2.jpg",
    category: "Street",
    title: "Street Life 2",
    description: "Khoảnh khắc đường phố",
    featured: false,
  },
  {
    id: 10,
    src: "/street/3.jpg",
    category: "Street",
    title: "Street Life 3",
    description: "Nghệ thuật đường phố",
    featured: false,
  },
  {
    id: 11,
    src: "/street/4.jpg",
    category: "Street",
    title: "Street Life 4",
    description: "Cuộc sống thành thị",
    featured: false,
  },
  {
    id: 12,
    src: "/street/5.jpg",
    category: "Street",
    title: "Street Life 5",
    description: "Phong cách đường phố",
    featured: false,
  },

  // Product Photography - Sản phẩm
  {
    id: 30,
    src: "/product/Bánh Ngọt Nướng.jpg",
    category: "Sản phẩm",
    title: "Bánh Ngọt Nướng",
    description: "Bánh ngọt nướng thơm ngon",
    featured: false,
  },
  {
    id: 31,
    src: "/product/Bánh Ngọt Tráng Miệng.jpg",
    category: "Sản phẩm",
    title: "Bánh Ngọt Tráng Miệng",
    description: "Bánh ngọt tráng miệng hấp dẫn",
    featured: false,
  },
  {
    id: 32,
    src: "/product/Bánh Ngọt.jpg",
    category: "Sản phẩm",
    title: "Bánh Ngọt",
    description: "Bánh ngọt truyền thống",
    featured: false,
  },
  {
    id: 33,
    src: "/product/Bánh Nướng.jpg",
    category: "Sản phẩm",
    title: "Bánh Nướng",
    description: "Bánh nướng giòn tan",
    featured: false,
  },
  {
    id: 34,
    src: "/product/Bò Kho Bánh Mì.jpg",
    category: "Sản phẩm",
    title: "Bò Kho Bánh Mì",
    description: "Bò kho ăn kèm bánh mì",
    featured: false,
  },
  {
    id: 35,
    src: "/product/Lẩu Cá Cải Chua.JPG",
    category: "Sản phẩm",
    title: "Lẩu Cá Cải Chua",
    description: "Lẩu cá cải chua đặc sắc",
    featured: false,
  },
  {
    id: 36,
    src: "/product/Lẩu Cá.JPG",
    category: "Sản phẩm",
    title: "Lẩu Cá",
    description: "Lẩu cá tươi ngon",
    featured: false,
  },
  {
    id: 37,
    src: "/product/Nước Chanh.jpg",
    category: "Sản phẩm",
    title: "Nước Chanh",
    description: "Nước chanh mát lạnh",
    featured: false,
  },
  {
    id: 38,
    src: "/product/Set Lẩu Cá.jpg",
    category: "Sản phẩm",
    title: "Set Lẩu Cá",
    description: "Set lẩu cá đa dạng",
    featured: false,
  },
  {
    id: 39,
    src: "/product/Set Lẩu Hải Sản.jpg",
    category: "Sản phẩm",
    title: "Set Lẩu Hải Sản",
    description: "Set lẩu hải sản tươi sống",
    featured: false,
  },
  {
    id: 40,
    src: "/product/Thịt Cá Tươi.JPG",
    category: "Sản phẩm",
    title: "Thịt Cá Tươi",
    description: "Thịt cá tươi chất lượng",
    featured: false,
  },
  {
    id: 41,
    src: "/product/Trà Hoa Cúc.jpg",
    category: "Sản phẩm",
    title: "Trà Hoa Cúc",
    description: "Trà hoa cúc thanh mát",
    featured: false,
  },
  {
    id: 42,
    src: "/product/Trứng bò xúc xích.jpg",
    category: "Sản phẩm",
    title: "Trứng bò xúc xích",
    description: "Trứng bò xúc xích hấp dẫn",
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
          <div className="flex flex-wrap justify-center gap-4 mt-6">
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
          </div>
        </div>

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
      </div>

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
    </section>
  )
}