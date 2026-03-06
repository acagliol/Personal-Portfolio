import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to blogs
      </Link>

      <header className="space-y-4 border-b border-white/[0.08] pb-8">
        <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
          {post.displayDate} / {post.readTime}
        </p>
        <h1 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{post.summary}</p>
      </header>

      <section className="space-y-4 text-[15px] leading-8 text-muted-foreground">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </article>
  )
}
