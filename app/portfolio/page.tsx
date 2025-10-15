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
  { id: "interior", name: "Nội thất" },
  { id: "street", name: "Đường Phố" },
  { id: "product", name: "Sản Phẩm" },
]

const portfolioItems = [
  {
    id: 55,
    category: "interior",
    title: "Phòng ngủ sáng tự nhiên",
    image: "/interior/DSC_5581.jpg",
    description: "Phòng ngủ với cửa sổ lớn, ánh sáng tự nhiên.",
  },
  {
    id: 56,
    category: "interior",
    title: "Phòng khách view biển",
    image: "/interior/DSC_5608.jpg",
    description: "Phòng khách hiện đại, view biển tuyệt đẹp.",
  },
  {
    id: 57,
    category: "interior",
    title: "Phòng ngủ gỗ cao cấp",
    image: "/interior/DSC_5658.jpg",
    description: "Phòng ngủ với nội thất gỗ sang trọng.",
  },
  {
    id: 58,
    category: "interior",
    title: "Phòng khách rộng rãi",
    image: "/interior/DSC_5440.jpg",
    description: "Phòng khách kết hợp bàn ăn, không gian mở.",
  },
  {
    id: 59,
    category: "interior",
    title: "Phòng ngủ xanh biển",
    image: "/interior/DSC_5458.jpg",
    description: "Phòng ngủ với tông màu xanh biển mát mẻ.",
  },
  {
    id: 60,
    category: "interior",
    title: "Ban công view thành phố",
    image: "/interior/DSC_5494.jpg",
    description: "Ban công rộng, view thành phố đẹp.",
  },
  {
    id: 62,
    category: "interior",
    title: "Ban công xanh mát",
    image: "/interior/DSC_5542.jpg",
    description: "Ban công với cây xanh, ánh sáng tự nhiên.",
  },
  {
    id: 63,
    category: "interior",
    title: "Phòng khách và bếp",
    image: "/interior/DSC_5560.jpg",
    description: "Phòng khách liền kề bếp, thiết kế tiện nghi.",
  },
  {
    id: 64,
    category: "interior",
    title: "Bàn ăn phong cách Bắc Âu",
    image: "/interior/DSC_5902.jpg",
    description: "Bàn ăn với nội thất phong cách Bắc Âu.",
  },
  // Interior Photography - Nội thất
  {
    id: 50,
    category: "interior",
    title: "Phòng ngủ hiện đại",
    image: "/interior/DSC_5740.jpg",
    description: "Không gian phòng ngủ rộng rãi, nội thất gỗ sang trọng.",
  },
  {
    id: 51,
    category: "interior",
    title: "Bàn ăn và phòng khách",
    image: "/interior/DSC_5772.jpg",
    description: "Bàn ăn kết hợp phòng khách, thiết kế tối giản hiện đại.",
  },
  {
    id: 52,
    category: "interior",
    title: "Căn hộ studio",
    image: "/interior/DSC_5746.jpg",
    description: "Căn hộ studio với ánh sáng tự nhiên, nội thất tiện nghi.",
  },
  {
    id: 53,
    category: "interior",
    title: "Phòng ngủ và bếp",
    image: "/interior/DSC_5761.jpg",
    description: "Phòng ngủ liền kề bếp, không gian mở hiện đại.",
  },
  {
    id: 54,
    category: "interior",
    title: "Phòng khách sang trọng",
    image: "/interior/DSC_5776.jpg",
    description: "Phòng khách với tivi lớn, nội thất gỗ cao cấp.",
  },
  // Portrait category - Chân dung
  {
    id: 1,
    category: "portrait",
    title: "Nàng thơ",
    image: "/potrairt/ECU.jpg",
    description: "Chân dung nàng thơ với thiên nhiên",
  },
  {
    id: 2,
    category: "portrait",
    title: "KTX A Portrait",
    image: "/potrairt/KTXA.jpg",
    description: "Chân dung sinh viên KTX A",
  },
  {
    id: 3,
    category: "portrait",
    title: "Sinh Viên",
    image: "/potrairt/NganHang.jpg",
    description: "Chân dung sinh viên ĐH Ngân Hàng",
  },
  {
    id: 4,
    category: "portrait",
    title: "Sinh Viên",
    image: "/potrairt/NganHang1.jpg",
    description: "Chân dung sinh viên ĐH Ngân Hàng",
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
    title: "UTE Student",
    image: "/potrairt/UTE1.jpg",
    description: "Chân dung sinh viên UTE",
  },

  // Landscape category - Phong cảnh
  {
    id: 7,
    category: "landscape",
    title: "Phong Cảnh Tự Nhiên",
    image: "/landscape/1.jpg",
    description: "Cảnh quan thiên nhiên tuyệt đẹp",
  },
    {
      id: 21,
      category: "landscape",
      title: "Con Dốc Tình Yêu",
      image: "/landscape/ConDoc.jpg",
      description: "Cảnh đẹp Côn Đảo",
    },
    {
      id: 22,
      category: "landscape",
      title: "Vũng Tàu",
      image: "/landscape/DSC_5507_1.jpg",
      description: "Bình minh Vũng Tàu",
    },
    {
      id: 23,
      category: "landscape",
      title: "Đà Lạt",
      image: "/landscape/DSC00778.png",
      description: "Ảnh phong cảnh Đà Lạt",
    },
    {
      id: 24,
      category: "landscape",
      title: "Đà Lạt",
      image: "/landscape/DSC00789.png",
      description: "Ảnh phong cảnh Đà Lạt",
    },
  


  // Street Photography - Đường phố
  {
    id: 8,
    category: "street",
    title: "Street Life 1",
    image: "/street/1.jpg",
    description: "Cuộc sống đường phố",
  },
  {
    id: 9,
    category: "street",
    title: "Street Life 2",
    image: "/street/2.jpg",
    description: "Khoảnh khắc đường phố",
  },
  {
    id: 10,
    category: "street",
    title: "Street Life 3",
    image: "/street/3.jpg",
    description: "Nghệ thuật đường phố",
  },
  {
    id: 11,
    category: "street",
    title: "Street Life 4",
    image: "/street/4.jpg",
    description: "Cuộc sống thành thị",
  },
  {
    id: 12,
    category: "street",
    title: "Street Life 5",
    image: "/street/5.jpg",
    description: "Phong cách đường phố",
  },

  // Product Photography - Sản phẩm
  {
    id: 30,
    category: "product",
    title: "Bánh Ngọt Nướng",
    image: "/product/Bánh Ngọt Nướng.jpg",
    description: "Bánh ngọt nướng thơm ngon",
  },
  {
    id: 31,
    category: "product",
    title: "Bánh Ngọt Tráng Miệng",
    image: "/product/Bánh Ngọt Tráng Miệng.jpg",
    description: "Bánh ngọt tráng miệng hấp dẫn",
  },
  {
    id: 32,
    category: "product",
    title: "Bánh Ngọt",
    image: "/product/Bánh Ngọt.jpg",
    description: "Bánh ngọt truyền thống",
  },
  {
    id: 33,
    category: "product",
    title: "Bánh Nướng",
    image: "/product/Bánh Nướng.jpg",
    description: "Bánh nướng giòn tan",
  },
  {
    id: 34,
    category: "product",
    title: "Bò Kho Bánh Mì",
    image: "/product/Bò Kho Bánh Mì.jpg",
    description: "Bò kho ăn kèm bánh mì",
  },
  {
    id: 35,
    category: "product",
    title: "Lẩu Cá Cải Chua",
    image: "/product/Lẩu Cá Cải Chua.JPG",
    description: "Lẩu cá cải chua đặc sắc",
  },
  {
    id: 36,
    category: "product",
    title: "Lẩu Cá",
    image: "/product/Lẩu Cá.JPG",
    description: "Lẩu cá tươi ngon",
  },
  {
    id: 37,
    category: "product",
    title: "Nước Chanh",
    image: "/product/Nước Chanh.jpg",
    description: "Nước chanh mát lạnh",
  },
  {
    id: 38,
    category: "product",
    title: "Set Lẩu Cá",
    image: "/product/Set Lẩu Cá.jpg",
    description: "Set lẩu cá đa dạng",
  },
  {
    id: 39,
    category: "product",
    title: "Set Lẩu Hải Sản",
    image: "/product/Set Lẩu Hải Sản.jpg",
    description: "Set lẩu hải sản tươi sống",
  },
  {
    id: 40,
    category: "product",
    title: "Thịt Cá Tươi",
    image: "/product/Thịt Cá Tươi.JPG",
    description: "Thịt cá tươi chất lượng",
  },
  {
    id: 41,
    category: "product",
    title: "Trà Hoa Cúc",
    image: "/product/Trà Hoa Cúc.jpg",
    description: "Trà hoa cúc thanh mát",
  },
  {
    id: 42,
    category: "product",
    title: "Trứng bò xúc xích",
    image: "/product/Trứng bò xúc xích.jpg",
    description: "Trứng bò xúc xích hấp dẫn",
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
            <p className="mx-auto max-w-2xl text-lg text-gray-800">
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