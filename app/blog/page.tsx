"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Mẹo Chụp Ảnh Chân Dung Đẹp",
    excerpt: "Khám phá những bí quyết để tạo ra những bức ảnh chân dung ấn tượng và chuyên nghiệp.",
    image: "/professional-portrait-photography-studio-lighting-.jpg",
    author: "PhotoStudio Team",
    date: "15 Tháng 12, 2024",
    category: "Hướng Dẫn",
  },
  {
    id: 2,
    title: "Xu Hướng Nhiếp Ảnh Cưới 2025",
    excerpt: "Cập nhật những xu hướng mới nhất trong nhiếp ảnh cưới để tạo ra những kỷ niệm đẹp.",
    image: "/artistic-landscape-photography-golden-hour-mountai.jpg",
    author: "PhotoStudio Team",
    date: "10 Tháng 12, 2024",
    category: "Xu Hướng",
  },
  {
    id: 3,
    title: "Ánh Sáng Trong Nhiếp Ảnh",
    excerpt: "Hiểu và sử dụng ánh sáng một cách hiệu quả để tạo ra những tác phẩm nghệ thuật.",
    image: "/modern-fashion-photography-urban-setting-street-st.jpg",
    author: "PhotoStudio Team",
    date: "5 Tháng 12, 2024",
    category: "Kỹ Thuật",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        <AnimatedSection className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4 text-4xl font-light md:text-6xl">Blog</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Chia sẻ kiến thức và kinh nghiệm về nhiếp ảnh
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">{post.category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>

                    <h2 className="mb-3 text-xl font-medium hover:text-primary transition-colors">{post.title}</h2>

                    <p className="mb-4 text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        Đọc thêm
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
