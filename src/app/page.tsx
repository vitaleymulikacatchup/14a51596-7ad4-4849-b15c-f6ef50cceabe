"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { BarChart3, Instagram, Newspaper, Star, Target, Trophy, Twitter, Users, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Programs", id: "programs" },
            { name: "Team", id: "team" },
            { name: "Stats", id: "stats" },
            { name: "News", id: "news" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="HoopZone"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Master Your Game"
          description="Elite basketball training programs designed to elevate your skills and reach your potential on the court"
          tag="Professional Training"
          tagIcon={Trophy}
          buttons={[
            { text: "Start Training", href: "programs" },
            { text: "View Programs", href: "programs" }
          ]}
          mediaItems={[
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Basketball player shooting" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Training session" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Basketball fundamentals" }
          ]}
        />
      </div>

      <div id="programs" data-section="programs">
        <FeatureCardThree
          title="Training Programs"
          description="Comprehensive basketball development programs for all skill levels"
          tag="Programs"
          tagIcon={Target}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Fundamentals Mastery",
              description: "Build solid foundation with shooting, dribbling, and defensive techniques",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Basketball fundamentals training"
            },
            {
              id: "02",
              title: "Advanced Skills",
              description: "Take your game to the next level with advanced moves and strategies",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Advanced basketball training"
            },
            {
              id: "03",
              title: "Athletic Performance",
              description: "Enhance strength, speed, and conditioning for peak performance",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Basketball fitness training"
            }
          ]}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardTwo
          title="Our Impact"
          description="Results that speak for themselves"
          tag="Achievement Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Players Trained"
            },
            {
              id: "2",
              value: "85%",
              description: "Skill Improvement Rate"
            },
            {
              id: "3",
              value: "50+",
              description: "Championship Wins"
            },
            {
              id: "4",
              value: "10+",
              description: "Years Experience"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Expert Coaches"
          description="Learn from experienced professionals who know what it takes to succeed"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Coach Martinez",
              role: "Head Coach",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Coach Martinez portrait"
            },
            {
              id: "2",
              name: "Coach Thompson",
              role: "Skills Trainer",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Coach Thompson portrait"
            },
            {
              id: "3",
              name: "Coach Davis",
              role: "Fitness Coach",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Coach Davis portrait"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Player Success Stories"
          description="Hear from players who have transformed their game with our training"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Point Guard",
              company: "City Basketball League",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Shooting Guard",
              company: "High School Team",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "3",
              name: "Alex Rodriguez",
              role: "Forward",
              company: "College Basketball",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Alex Rodriguez portrait"
            },
            {
              id: "4",
              name: "Jordan Lee",
              role: "Center",
              company: "Amateur League",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Jordan Lee portrait"
            }
          ]}
        />
      </div>

      <div id="news" data-section="news">
        <BlogCardOne
          title="Latest News"
          description="Stay updated with the latest basketball news and training insights"
          tag="Updates"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Training",
              title: "5 Essential Basketball Drills",
              excerpt: "Master these fundamental drills to improve your game quickly and effectively",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Basketball training drills",
              authorName: "Coach Martinez",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Strategy",
              title: "Championship Mindset",
              excerpt: "Develop the mental toughness needed to perform under pressure",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Basketball championship game",
              authorName: "Coach Thompson",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Fitness",
              title: "Basketball Conditioning Guide",
              excerpt: "Build the endurance and strength needed for peak performance on court",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Basketball fitness training",
              authorName: "Coach Davis",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Start Your Basketball Journey"
          description="Ready to take your game to the next level? Get in touch with our coaches and begin your transformation today"
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "experience",
              type: "text",
              placeholder: "Basketball Experience Level",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your basketball goals and what you'd like to achieve...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="HoopZone"
          copyrightText="© 2025 HoopZone Basketball Academy. All rights reserved."
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Fundamentals", href: "programs" },
                { label: "Advanced Skills", href: "programs" },
                { label: "Conditioning", href: "programs" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Coaches", href: "team" },
                { label: "Success Stories", href: "testimonials" },
                { label: "News & Updates", href: "news" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get Started", href: "contact" },
                { label: "Schedule Training", href: "contact" },
                { label: "Ask Questions", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/hoopzone", ariaLabel: "Follow us on Instagram" },
            { icon: Twitter, href: "https://twitter.com/hoopzone", ariaLabel: "Follow us on Twitter" },
            { icon: Youtube, href: "https://youtube.com/hoopzone", ariaLabel: "Subscribe to our YouTube channel" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}