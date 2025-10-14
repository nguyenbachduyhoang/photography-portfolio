"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Camera, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

interface ContactCTAProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  showContactInfo?: boolean
}

export function ContactCTA({
  title = "Sẵn sàng tạo ra những khoảnh khắc đẹp?",
  subtitle = "Hãy liên hệ với chúng tôi để được tư vấn và báo giá chi tiết cho dự án của bạn",
  primaryButtonText = "Đặt lịch chụp ngay",
  secondaryButtonText = "Xem portfolio",
  showContactInfo = false
}: ContactCTAProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {title.split('những khoảnh khắc đẹp')[0]}
            <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              {title.includes('những khoảnh khắc đẹp') ? 'những khoảnh khắc đẹp?' : title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                <Camera className="mr-2 h-5 w-5" />
                {primaryButtonText}
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                {secondaryButtonText}
              </Button>
            </Link>
          </div>

          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-accent" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <span>hello@photostudio.vn</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}