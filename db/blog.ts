import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  datePublished: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

export function getBlogPosts() {
  const dir = path.join(process.cwd(), "content");

  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  return mdxFiles.map((file) => {
    let { metadata, content } = parseFrontmatter(
      fs.readFileSync(path.join(dir, file), "utf-8")
    );
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export async function getBlogPost(slug: string) {
  const dir = path.join(process.cwd(), "content");
  let file = fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf-8");
  let { metadata, content } = parseFrontmatter(file);

  return {
    metadata,
    content,
  };
}
