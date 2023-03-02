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
      <main className={`${robotto.variable} ${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
      ;
    </>
  );
}
