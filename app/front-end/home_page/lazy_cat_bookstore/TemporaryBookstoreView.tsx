import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from "next/font/google";
import { blogPosts, formatBlogDate } from "./blogs/blogData";

const handwritten = Just_Another_Hand({ subsets: ["latin"], weight: "400" });

export default function TemporaryBookstoreView() {
    return (
        <main className="min-h-screen w-full bg-white">
            <header className="flex w-full items-center justify-center gap-4 px-4 py-8">
                <h1 className={`${handwritten.className} text-center text-5xl font-bold`}>Lazy Cat Bookstore</h1>
                <Image src="/photos/placeholder.jpeg" width={100} height={100} alt="Lazy Cat Bookstore placeholder artwork" priority />
            </header>
            <section aria-label="Bookstore tagline" className="w-full px-4 pb-6 text-center">
                <p className={`${handwritten.className} text-4xl font-bold text-[#3380B7]`}>Curl up with a good book.</p>
            </section>
            <section aria-label="Latest blog posts" className="mx-auto w-full max-w-6xl px-4 pb-8">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/temporary/blogs/${post.slug}`}
                            className="group flex h-full flex-col overflow-hidden border border-gray-300 bg-white text-left transition hover:border-[#3380B7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3380B7]"
                        >
                            <Image className="aspect-[16/9] w-full object-cover" src={post.image} alt={post.imageAlt} width={1200} height={675} />
                            <div className="flex flex-1 flex-col p-4">
                                <time className="text-sm text-gray-600" dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                                <h3 className="mt-2 text-xl font-bold text-gray-950 group-hover:text-[#3380B7]">{post.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-700">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}