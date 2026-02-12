
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default async function BlogPage() {
  const data = await client.fetch(`*[_type == "blogPage"][0]`);

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl mb-4">{data.title}</h1>
      <PortableText value={data.content} />
    </section>
  );
}
