"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "123 Đường ABC, Quận 1, TP.HCM",
  },
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "+84 387 790 898",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@photostudio.com",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    content: "T2-T6: 9:00 - 18:00",
  },
]

export default function ContactPage() {
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
            <h1 className="mb-4 text-4xl font-light md:text-6xl">Liên Hệ</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-800">
              Hãy liên hệ với chúng tôi để thảo luận về dự án của bạn
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-card p-8 rounded-lg"
              >
                <h2 className="mb-6 text-2xl font-light">Gửi Tin Nhắn</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Họ Tên</label>
                      <Input placeholder="Nhập họ tên của bạn" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="Nhập email của bạn" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Số Điện Thoại</label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Loại Dịch Vụ</label>
                    <Input placeholder="Chân dung, cưới hỏi, sự kiện..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tin Nhắn</label>
                    <Textarea placeholder="Mô tả chi tiết về dự án của bạn..." rows={5} />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full">Gửi Tin Nhắn</Button>
                  </motion.div>
                </form>
              </motion.div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-light">Thông Tin Liên Hệ</h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8"
                >
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Bản đồ sẽ được hiển thị tại đây</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
