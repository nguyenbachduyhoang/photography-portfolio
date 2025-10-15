"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Camera, Award, Users, Heart } from "lucide-react"

const stats = [
  { icon: Camera, number: "500+", label: "Dự Án Hoàn Thành" },
  { icon: Users, number: "200+", label: "Khách Hàng Hài Lòng" },
  { icon: Heart, number: "5", label: "Năm Kinh Nghiệm" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="mb-6 text-4xl font-light md:text-6xl text-gray-900">Về Chúng Tôi</h1>
              <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                Chúng tôi là một studio nhiếp ảnh chuyên nghiệp với niềm đam mê tạo ra những tác phẩm nghệ thuật độc
                đáo. Với phong cách hiện đại và sáng tạo, chúng tôi mang đến những khoảnh khắc đẹp nhất trong cuộc sống
                của bạn.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Từ chân dung cá nhân đến sự kiện lớn, chúng tôi luôn nỗ lực để mang đến những trải nghiệm tuyệt vời và
                kết quả vượt mong đợi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                {/* Ảnh cũ: /professional-portrait-photography-studio-lighting-.jpg */}
                <Image
                  src="/profile/Profile.png"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection delay={0.4} className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-light">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Philosophy Section */}
        <AnimatedSection delay={0.6} className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-3xl font-light md:text-4xl text-gray-900"
            >
              Triết Lý Của Chúng Tôi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-800 leading-relaxed"
            >
              Chúng tôi tin rằng mỗi khoảnh khắc đều có câu chuyện riêng. Nhiệm vụ của chúng tôi là kể những câu chuyện
              đó thông qua ống kính, tạo ra những tác phẩm không chỉ đẹp mắt mà còn chứa đựng cảm xúc và ý nghĩa sâu
              sắc.
            </motion.p>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  )
}
