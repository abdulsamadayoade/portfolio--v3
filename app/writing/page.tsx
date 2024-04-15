import type { Metadata } from "next";
import { getPosts } from "@/db/writing";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "My thoughts on software engineering and other things I find interesting.",
};

export default function Page() {
  let posts = getPosts();

  return (
    <section className="max-w-2xl px-5 pt-20 md:mx-auto">
      <h1 className="text-3xl text-white">writing</h1>

      <div className="space-y-4 mt-7">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.datePublished) >
              new Date(b.metadata.datePublished)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1.5 text-white hover:bg-black/10 py-3 px-1 md:px-3 rounded-md"
              href={`/blog/${post.slug}`}>
              <span>{post.metadata.title}</span>
              <span className="text-xs opacity-50 md:text-sm flex items-center justify-between">
                <span>{post.metadata.summary}</span>
                <span className="font-mono text-[10px]">
                  {formatDate(post.metadata.datePublished)}
                </span>
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}
