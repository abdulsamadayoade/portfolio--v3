import { getPost } from "@/db/writing";
import { calculateMinuteRead } from "@/utils/calculateMinuteRead";
import { formatDate } from "@/utils/formatDate";
import CustomMDX from "@/components/CustomMDX";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center py-5">
        Post not found
      </div>
    );
  }

  return (
    <section>
      <h1 className="title text-white font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>

      <div className="mt-5 text-white opacity-70 text-xs font-mono font-medium pb-4">
        {formatDate(post.metadata.datePublished)} •{" "}
        {calculateMinuteRead(post.content)} minutes read
      </div>

      <article className="prose max-w-full prose-quoteless prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
