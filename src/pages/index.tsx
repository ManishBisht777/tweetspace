import Navbar from "@/components/navbar/Navbar";
import Head from "@/components/utilities/Head";
import useArea from "@/hooks/useArea";

export default function Home() {
  const { width } = useArea();

  return (
    <>
      <Head />
      <section className="z-0">
        {width >= 1024 ? <Navbar /> : <Navbar isMobile />}
      </section>
    </>
  );
}
