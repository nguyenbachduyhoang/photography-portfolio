"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Minh Anh",
    role: "Cô dâu",
    avatar: "/professional-portrait-photography-woman.jpg",
    rating: 5,
    content: "Bộ ảnh cưới của chúng tôi thật sự tuyệt vời! Photographer rất chuyên nghiệp, tận tâm và có khả năng bắt được những khoảnh khắc đẹp nhất. Mọi người đều khen ngợi bộ ảnh của chúng tôi.",
    service: "Chụp ảnh cưới"
  },
  {
    id: 2,
    name: "Đức Thành",
    role: "CEO StartupTech",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "Dịch vụ chụp ảnh profile rất chuyên nghiệp. Những tấm ảnh này đã giúp tôi tự tin hơn trong các cuộc họp và sự kiện. Chất lượng ảnh tuyệt vời, đúng deadline cam kết.",
    service: "Chụp ảnh cá nhân"
  },
  {
    id: 3,
    name: "Gia đình Trần",
    role: "Khách hàng thân thiết",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content: "Chúng tôi đã chụp ảnh gia đình nhiều lần ở đây. Mỗi lần đều rất hài lòng với chất lượng dịch vụ và thái độ phục vụ. Các con rất thích photographer vì họ rất vui vẻ và dễ thương.",
    service: "Chụp ảnh gia đình"
  },
  {
    id: 4,
    name: "Ngọc Mai",
    role: "Fashion Blogger",
    avatar: "/fashion-editorial-modern-style.jpg",
    rating: 5,
    content: "Bộ ảnh fashion mà studio thực hiện cho tôi đã giúp tăng follower đáng kể. Concept sáng tạo, ánh sáng đẹp và phong cách chỉnh sửa rất ấn tượng. Definitely sẽ quay lại!",
    service: "Chụp ảnh thời trang"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-6">
            <Star className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide">ĐÁNH GIÁ KHÁCH HÀNG</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            Khách Hàng
            <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Nói Gì
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hơn 1000+ khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <Quote className="h-8 w-8 text-accent/30 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs text-accent font-medium mt-1">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">4.9/5</span>
              <span>từ 500+ đánh giá</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div>
              <span className="font-semibold">100%</span>
              <span> khách hàng hài lòng</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div>
              <span className="font-semibold">95%</span>
              <span> khách hàng quay lại</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}