import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Award, Users, Heart } from "lucide-react"

const stats = [
  { icon: Camera, label: "Dự án hoàn thành", value: "500+" },
  { icon: Users, label: "Khách hàng hài lòng", value: "200+" },
  { icon: Heart, label: "Năm kinh nghiệm", value: "8+" },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Về chúng tôi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Với hơn 8 năm kinh nghiệm trong lĩnh vực nhiếp ảnh, chúng tôi chuyên tạo ra những tác phẩm nghệ thuật độc
              đáo và ấn tượng. Từ chụp chân dung, sự kiện đến nhiếp ảnh thương mại, mỗi bức ảnh đều được thực hiện với
              sự tỉ mỉ và đam mê.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Phong cách của chúng tôi kết hợp giữa kỹ thuật hiện đại và cảm xúc chân thật, tạo nên những khoảnh khắc
              vượt thời gian và đầy ý nghĩa.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Tìm hiểu thêm
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image src="/professional-photographer-portrait-studio.jpg" alt="Photographer portrait" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-background/90 text-foreground p-6 shadow-xl border border-border/50 backdrop-blur-sm">
              <p className="text-2xl font-bold">8+ năm</p>
              <p className="text-sm">kinh nghiệm</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
