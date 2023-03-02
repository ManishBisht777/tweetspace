import NextHead from "next/head";
import type { FC } from "react";

type HeadProps = {
  title?: string;
  description?: string;
};

const Head: FC<HeadProps> = ({
  title = "Tweet Space",
  description = "Open source website to organize your twitter spaces",
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  );
};

export default Head;
