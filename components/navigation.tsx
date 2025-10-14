"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Camera, Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/contact", label: "Liên hệ" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
              <Camera className="h-8 w-8 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight">PhotoStudio</span>
              <span className="text-xs text-muted-foreground font-medium">CREATIVE PHOTOGRAPHY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground/80 hover:text-accent transition-all duration-300 font-medium py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="flex items-center space-x-3 border-l border-border/50 pl-6">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            <ThemeToggle />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Đặt lịch chụp
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-accent transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Đặt lịch chụp</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
