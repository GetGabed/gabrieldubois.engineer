import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mt-12 mb-20">
      <h1 className="text-2xl mb-4">Field Notes (Blog)</h1>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-[#a2a7fb] p-4 rounded-md frosted-glass hover:-translate-y-1 transition-transform duration-200 group"
            >
              <div className="flex justify-between items-start gap-3">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.frontmatter.title}
                </h2>
                <span className="text-xs text-muted-foreground shrink-0 mt-1">
                  {post.frontmatter.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {post.frontmatter.description}
              </p>
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex gap-1 mt-3 flex-wrap">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
