"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { useState } from "react"

const portfolioCategories = [
  { id: "all", name: "Tất Cả" },
  { id: "portrait", name: "Chân Dung" },
  { id: "landscape", name: "Phong Cảnh" },
  { id: "fashion", name: "Thời Trang" },
  { id: "wedding", name: "Cưới Hỏi" },
]

const portfolioItems = [
  // Portrait category - Chân dung
  {
    id: 1,
    category: "portrait",
    title: "ECU Portrait",
    image: "/potrairt/ECU.jpg",
    description: "Chân dung chuyên nghiệp ECU",
  },
  {
    id: 2,
    category: "portrait",
    title: "KTXA Portrait",
    image: "/potrairt/KTXA.jpg",
    description: "Chân dung KTXA",
  },
  {
    id: 3,
    category: "portrait",
    title: "Ngân Hàng",
    image: "/potrairt/NganHang.jpg",
    description: "Chân dung doanh nhân ngân hàng",
  },
  {
    id: 4,
    category: "portrait",
    title: "Ngân Hàng Style",
    image: "/potrairt/NganHang1.jpg",
    description: "Phong cách chuyên nghiệp",
  },
  {
    id: 5,
    category: "portrait",
    title: "UTE Student",
    image: "/potrairt/UTE.jpg",
    description: "Chân dung sinh viên UTE",
  },
  {
    id: 6,
    category: "portrait",
    title: "UTE Graduate",
    image: "/potrairt/UTE1.jpg",
    description: "Ảnh tốt nghiệp UTE",
  },

  // Landscape category - Phong cảnh
  {
    id: 7,
    category: "landscape",
    title: "Phong Cảnh Tự Nhiên",
    image: "/landscape/1.jpg",
    description: "Cảnh quan thiên nhiên tuyệt đẹp",
  },

  // Street Photography - Đường phố
  {
    id: 8,
    category: "fashion",
    title: "Street Life 1",
    image: "/street/1.jpg",
    description: "Cuộc sống đường phố",
  },
  {
    id: 9,
    category: "fashion",
    title: "Street Life 2",
    image: "/street/2.jpg",
    description: "Khoảnh khắc đường phố",
  },
  {
    id: 10,
    category: "fashion",
    title: "Street Life 3",
    image: "/street/3.jpg",
    description: "Nghệ thuật đường phố",
  },
  {
    id: 11,
    category: "fashion",
    title: "Street Life 4",
    image: "/street/4.jpg",
    description: "Cuộc sống thành thị",
  },
  {
    id: 12,
    category: "fashion",
    title: "Street Life 5",
    image: "/street/5.jpg",
    description: "Phong cách đường phố",
  },

  // Product Photography - Sản phẩm
  {
    id: 13,
    category: "wedding",
    title: "Bánh Ngọt",
    image: "/product/Bánh Ngọt 1.jpg",
    description: "Chụp ảnh bánh ngọt nghệ thuật",
  },
  {
    id: 14,
    category: "wedding",
    title: "Product DSC09958",
    image: "/product/DSC09958.jpg",
    description: "Chụp sản phẩm chuyên nghiệp",
  },
  {
    id: 15,
    category: "wedding",
    title: "Product DSC09975",
    image: "/product/DSC09975.jpg",
    description: "Nghệ thuật chụp sản phẩm",
  },
  {
    id: 16,
    category: "wedding",
    title: "Trứng Bò Xúc Xích",
    image: "/product/DSC_3002_trứng bò xúc xích.jpg",
    description: "Food photography - Món ăn ngon",
  },
  {
    id: 17,
    category: "wedding",
    title: "Bò Kho",
    image: "/product/DSC_3349_Bò Kho.jpg",
    description: "Food photography - Bò kho đậm đà",
  },
  {
    id: 18,
    category: "wedding",
    title: "Product DSC_4287",
    image: "/product/DSC_4287.jpg",
    description: "Chụp sản phẩm cao cấp",
  },
  {
    id: 19,
    category: "wedding",
    title: "Product DSC_4302",
    image: "/product/DSC_4302.jpg",
    description: "Sản phẩm chất lượng cao",
  },
  {
    id: 20,
    category: "wedding",
    title: "Product DSC_4806",
    image: "/product/DSC_4806.JPG",
    description: "Nghệ thuật ánh sáng sản phẩm",
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        <AnimatedSection className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-light md:text-6xl">Portfolio</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Khám phá bộ sưu tập những tác phẩm nhiếp ảnh đặc sắc
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.2} className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <AnimatedSection delay={0.4} className="container mx-auto px-4 pb-16">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  )
}
