type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // Return an array of all possible slug values
  // This tells Next.js which pages to pre-generate at build time
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'third-post' },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
