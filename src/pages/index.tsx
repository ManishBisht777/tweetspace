import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonials";
import Navbar from "@/components/navbar/Navbar";
import Head from "@/components/utilities/Head";
import useArea from "@/hooks/useArea";
import Container from "@/layouts/Container";

export default function Home() {
  const { width } = useArea();

  return (
    <>
      <Head />
      <section className="z-0">
        {width >= 1024 ? <Navbar /> : <Navbar isMobile />}
        <Hero />
        <Features />
        <Container>
          <Testimonial />
        </Container>
      </section>
    </>
  );
}
