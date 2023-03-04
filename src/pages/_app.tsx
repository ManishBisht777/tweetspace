import Navbar from "@/components/navbar/Navbar";
import useArea from "@/hooks/useArea";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const robotto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-robotto",
});

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useArea();

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${robotto.style.fontFamily};
            font-size: 1.1rem;
          }
        `}
      </style>
      {width >= 1024 ? <Navbar /> : <Navbar isMobile />}
      <main className={`${robotto.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
      ;
    </>
  );
}
