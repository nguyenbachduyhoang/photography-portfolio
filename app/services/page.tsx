"use client"

import { motion } from "framer-motion"
import { Camera, Heart, Users, Briefcase, Star, Clock, MapPin, Award, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactCTA } from "@/components/contact-cta"
import { PriceComparison } from "@/components/price-comparison"
import { Testimonials } from "@/components/testimonials"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Chụp ảnh cưới",
    subtitle: "Lưu giữ khoảnh khắc đẹp nhất",
    description: "Gói dịch vụ chụp ảnh cưới trọn gói với phong cách lãng mạn, hiện đại. Bao gồm chụp ảnh cưới ngoại cảnh, trong studio và ngày cưới.",
    features: [
      "200-300 ảnh đã chỉnh sửa",
      "Album cưới cao cấp",
      "Chụp tại 3-5 địa điểm",
      "Trang phục và makeup hỗ trợ",
      "Video highlight 3-5 phút"
    ],
    price: "từ 15.000.000đ",
    duration: "6-8 giờ",
    image: "/wedding-romantic-couple-golden-hour.jpg",
    popular: true
  },
  {
    id: 2,
    icon: Users,
    title: "Chụp ảnh gia đình",
    subtitle: "Khoảnh khắc ấm áp bên nhau",
    description: "Ghi lại những khoảnh khắc hạnh phúc của gia đình với phong cách tự nhiên, ấm cúng và đầy cảm xúc.",
    features: [
      "50-80 ảnh đã chỉnh sửa",
      "Chụp tại nhà hoặc ngoại cảnh",
      "Phong cách tự nhiên, thoải mái",
      "Bao gồm ảnh từng thành viên",
      "Khung ảnh gia đình làm quà"
    ],
    price: "từ 3.500.000đ",
    duration: "2-3 giờ",
    image: "/professional-portrait-photography-woman.jpg"
  },
  {
    id: 3,
    icon: Camera,
    title: "Chụp ảnh cá nhân",
    subtitle: "Thể hiện cá tính riêng",
    description: "Chụp ảnh profile, headshot chuyên nghiệp cho doanh nhân, nghệ sĩ hoặc bất kỳ ai muốn có bộ ảnh cá nhân đẹp.",
    features: [
      "30-50 ảnh đã chỉnh sửa",
      "Nhiều concept và trang phục",
      "Chụp trong studio hoặc ngoại cảnh",
      "Phong cách đa dạng",
      "Tư vấn tạo dáng chuyên nghiệp"
    ],
    price: "từ 2.000.000đ",
    duration: "1-2 giờ",
    image: "/portrait-artistic-black-white.jpg"
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Chụp ảnh thương mại",
    subtitle: "Nâng tầm thương hiệu",
    description: "Dịch vụ chụp ảnh sản phẩm, thương hiệu, quảng cáo với chất lượng cao và tính chuyên nghiệp.",
    features: [
      "Unlimited số lượng ảnh",
      "Chỉnh sửa chuyên sâu",
      "Bản quyền thương mại",
      "Đội ngũ hỗ trợ chuyên nghiệp",
      "Giao hàng nhanh chóng"
    ],
    price: "Liên hệ báo giá",
    duration: "Tùy theo dự án",
    image: "/product-commercial-luxury-watch.jpg"
  }
]

const stats = [
  { number: "500+", label: "Dự án hoàn thành" },
  { number: "1000+", label: "Khách hàng hài lòng" },
  { number: "5", label: "Năm kinh nghiệm" },
  { number: "50+", label: "Giải thưởng" }
]

const process = [
  {
    step: "01",
    title: "Tư vấn & Lên ý tưởng",
    description: "Gặp gỡ trao đổi ý tưởng, phong cách và yêu cầu của bạn để tạo ra concept phù hợp nhất."
  },
  {
    step: "02", 
    title: "Chuẩn bị & Setup",
    description: "Chuẩn bị địa điểm, thiết bị, ánh sáng và mọi thứ cần thiết để buổi chụp diễn ra suôn sẻ."
  },
  {
    step: "03",
    title: "Thực hiện chụp ảnh",
    description: "Tiến hành chụp ảnh với sự hướng dẫn chuyên nghiệp để có được những shot ảnh đẹp nhất."
  },
  {
    step: "04",
    title: "Chỉnh sửa & Giao hàng",
    description: "Chỉnh sửa ảnh tỉ mỉ và giao sản phẩm cuối cùng theo đúng thời gian đã cam kết."
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/professional-photographer-portrait-studio.jpg"
            alt="Professional Photography Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2">
              <Camera className="h-4 w-4 mr-2" />
              Dịch vụ chuyên nghiệp
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Dịch Vụ
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Nhiếp Ảnh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Chuyên nghiệp, sáng tạo và đầy cảm xúc - Đó là cam kết của chúng tôi trong từng khung hình
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.4}>
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
                <span className="text-accent font-semibold tracking-wide">DỊCH VỤ CỦA CHÚNG TÔI</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
                Gói Dịch Vụ
                <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Chuyên Nghiệp
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Từ những khoảnh khắc lãng mạn đến chân dung chuyên nghiệp, chúng tôi mang đến dịch vụ nhiếp ảnh toàn diện
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-accent text-white">
                          Phổ biến nhất
                        </Badge>
                      </div>
                    )}
                    
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-accent font-medium">{service.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">{service.price}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-accent hover:bg-accent/90 group">
                        Liên hệ tư vấn
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Price Comparison Section */}
      <AnimatedSection delay={0.6}>
        <PriceComparison />
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection delay={0.8}>
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-6">
                <Award className="h-6 w-6 text-accent mr-2" />
                <span className="text-accent font-semibold tracking-wide">QUY TRÌNH LÀM VIỆC</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
                Quy Trình
                <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Chuyên Nghiệp
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-accent to-accent/70 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={1.0}>
        <Testimonials />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={1.2}>
        <ContactCTA 
          title="Sẵn sàng tạo ra những khoảnh khắc đẹp?"
          subtitle="Hãy liên hệ với chúng tôi để được tư vấn và báo giá chi tiết cho dự án của bạn"
          primaryButtonText="Đặt lịch chụp ngay"
          secondaryButtonText="Xem portfolio"
          showContactInfo={true}
        />
      </AnimatedSection>

      <Footer />
    </main>
  )
}