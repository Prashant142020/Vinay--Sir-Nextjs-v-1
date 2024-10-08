import MediaCard from "@/components/card/MediaCard";
import { MarqueeDemo } from "@/components/example/MarqueeCard";
import BookSection from "@/components/section/BookSection";
import HeroSection from "@/components/section/HeroSection";
import CourseSlider from "@/components/card/CouresSlider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeDemo />
      <BookSection />
      <CourseSlider />
      <MediaCard />
    </main>
  );
}
