import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-skin-base font-Montserrat font-bold text-3xl">
          lol
        </h1>
        <h1 className="text-skin-inverted">letsgo</h1>
        <div className="rounded-lg bg-skin-inverted text-skin-inverted font-robotto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          ipsum earum nam dolor unde fugit tenetur mollitia iure corrupti odio
          libero culpa aliquam, voluptatibus hic vero aliquid molestiae possimus
          ipsa.
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-accent-base">
          yo
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-accent-muted">
          yo
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-accent-inverted">
          yo
        </div>
      </main>
    </>
  );
}
