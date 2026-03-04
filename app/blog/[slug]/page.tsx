import { getAllPostSlugs, getPost } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <div className="mt-12 mb-20">
      <Link
        href="/blog"
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors w-fit"
      >
        <IconArrowLeft size={16} />
        Back to blog
      </Link>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        <span className="text-xs text-muted-foreground shrink-0">
          {post.frontmatter.date}
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {post.frontmatter.description}
      </p>

      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
        <div className="flex gap-1 mb-8 flex-wrap">
          {post.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#a2a7fb] text-white px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <article className="prose prose-invert prose-sm max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700 prose-th:text-primary prose-td:text-muted-foreground">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
