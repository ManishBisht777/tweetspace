import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonials";
import Head from "@/components/utilities/Head";
import Container from "@/layouts/Container";

export default function Home() {
  return (
    <>
      <Head />
      <section className="z-0">
        <Hero />
        <Features />
        <Container>
          <Testimonial />
        </Container>
      </section>
    </>
  );
}
