"use client"

import { motion } from "framer-motion"
import { Check, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Gói Cơ Bản",
    price: "2.000.000đ",
    originalPrice: "2.500.000đ",
    duration: "2 giờ",
    description: "Phù hợp cho chụp ảnh cá nhân hoặc couple đơn giản",
    features: [
      "30-40 ảnh đã chỉnh sửa",
      "1 địa điểm chụp",
      "Chỉnh sửa cơ bản",
      "Giao ảnh qua email",
      "Hỗ trợ tư vấn tạo dáng"
    ],
    notIncluded: [
      "Album in ảnh",
      "Video highlight",
      "Trang phục cho thuê"
    ],
    popular: false
  },
  {
    name: "Gói Tiêu Chuẩn",
    price: "4.500.000đ",
    originalPrice: "5.500.000đ",
    duration: "4 giờ",
    description: "Lựa chọn phổ biến nhất cho các dịp đặc biệt",
    features: [
      "80-100 ảnh đã chỉnh sửa",
      "2-3 địa điểm chụp",
      "Chỉnh sửa chuyên nghiệp",
      "USB + Drive link",
      "Album mini 20x20cm",
      "Video slideshow",
      "Hỗ trợ makeup cơ bản"
    ],
    notIncluded: [
      "Album cao cấp",
      "Video cinematic"
    ],
    popular: true
  },
  {
    name: "Gói Cao Cấp",
    price: "8.000.000đ",
    originalPrice: "10.000.000đ",
    duration: "6-8 giờ",
    description: "Gói dịch vụ toàn diện cho những dịp quan trọng nhất",
    features: [
      "150-200 ảnh đã chỉnh sửa",
      "4-5 địa điểm chụp",
      "Chỉnh sửa cao cấp + retouching",
      "USB + Cloud storage",
      "Album cao cấp 30x30cm",
      "Video cinematic 3-5 phút",
      "Makeup & styling chuyên nghiệp",
      "2 bộ trang phục cho thuê",
      "Khung ảnh làm quà"
    ],
    notIncluded: [],
    popular: false
  }
]

export function PriceComparison() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full mb-6">
            <Star className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide">BẢNG GIÁ DỊCH VỤ</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            So Sánh
            <span className="block font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Gói Dịch Vụ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-accent shadow-xl scale-105 bg-gradient-to-b from-accent/5 to-background' 
                  : 'border-border hover:shadow-lg hover:scale-102'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-1">
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Thời gian: {pkg.duration}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">Bao gồm:</h4>
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Không bao gồm:</h4>
                      {pkg.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-accent/90' 
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                  >
                    Chọn gói này
                  </Button>
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
          <p className="text-muted-foreground mb-4">
            Cần tư vấn gói dịch vụ phù hợp? Hoặc có yêu cầu đặc biệt?
          </p>
          <Button variant="outline" size="lg">
            Liên hệ tư vấn miễn phí
          </Button>
        </motion.div>
      </div>
    </section>
  )
}