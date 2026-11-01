import BlogPostRoute from "../../../front-end/home_page/lazy_cat_bookstore/blogs/BlogPostRoute";
import { blogPosts } from "../../../front-end/home_page/lazy_cat_bookstore/blogs/blogData";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function TemporaryBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogPostRoute slug={slug} temporary />;
}