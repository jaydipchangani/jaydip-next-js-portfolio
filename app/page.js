
import Head from "next/head";
import ClientHome from "./_components/ClientHome";


export default function Home() {
  return (
    <>
      
      <Head>
        <title>Jaydip Changani - Full-stack Developer Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Jaydip, a design-driven full-stack developer. Explore my portfolio showcasing projects, skills, and innovative solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Jaydip Changani - Full-stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Jaydip, a full-stack developer focused on crafting, refining, and innovating solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaydip-next-js-portfolio.vercel.app/" />
        <meta property="og:image" content="https://jaydip-next-js-portfolio.vercel.app/_next/image?url=%2FJaydipImage.jpeg&w=1920&q=75" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jaydip Changani - Full-stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Hi, I'm Jaydip, a full-stack developer. Check out my projects and skills portfolio."
        />
        <meta name="twitter:image" content="https://jaydip-next-js-portfolio.vercel.app/" />

        <link rel="canonical" href="https://jaydip-next-js-portfolio.vercel.app/" />
      </Head>
    <ClientHome />
      
    </>
  );
}
