import { notFound } from "next/navigation";
import BlogPostTemplate from "./BlogPostTemplate";
import { blogPosts } from "./blogData";

export default function BlogPostRoute({ slug }: { slug: string }) {
    const post = blogPosts.find((blogPost) => blogPost.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostTemplate post={post} />;
}