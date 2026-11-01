import BlogPostRoute from "../BlogPostRoute";
import { blogPosts } from "../blogData";

export function generateStaticParams() {
	return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <BlogPostRoute slug={slug} />;
}
