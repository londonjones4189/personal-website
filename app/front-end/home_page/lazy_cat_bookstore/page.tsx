"use client"; 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogPosts, formatBlogDate } from "./blogs/blogData";

type Piece = {
    Category: string;
    Title: string;
    Description: string;
    image?: string;
    video?: string;
    href?: string;
};

const pieces: Piece[] = [
    {
        Category: "Copy",
        Title: "Bose x LISA",
        video: "/videos/BosexLISA.mov",
        href: "/front-end/home_page/lazy_cat_bookstore/pieces/bose-x-lisa",
        Description: "CRM, Web content, email, app",
    },
    {
        Category: "Copy",
        Title: "Ultra Open Earbuds Evergreen",
        video: "/videos/UOE.mov",
        href: "/front-end/home_page/lazy_cat_bookstore/pieces/UOE",
        Description: "PRD, website, Amazon",
    },
    {
        Category: "Copy",
        Title: "UConn Giveaway",
        image: "/photos/placeholder.jpeg",
        href: "/front-end/home_page/lazy_cat_bookstore/pieces/uconn-giveaway",
        Description: "Bose giveaway campaign copy",
    },
    {
        Category: "Copy",
        Title: "Copy project",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 2",
    },
    {
        Category: "Creative",
        Title: "Creative project",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 3",
    },
    {
        Category: "Creative",
        Title: "Creative project",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 3",
    },
]

export default function LazyCatBookstore() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredPieces = selectedCategory
        ? pieces.filter((piece) => piece.Category === selectedCategory)
        : [];

    return (
        <div className="flex min-h-screen w-full flex-col items-start gap-4 bg-white">
            <button className="m-4 p-2 rounded-[1vw] border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-4focus:ring-blue-300">
                Back
            </button>
            <div className="flex w-full items-center justify-center gap-4">
                <h1 className="text-4xl font-extrabold">Lazy Cat Bookstore</h1>
                <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
            </div>
            <div className="flex w-full items-center justify-center gap-4">
            <h1 className="text-center">Blogs</h1>
            </div>
            <section aria-label="Latest blog posts" className="w-full px-4 pb-4">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/front-end/home_page/lazy_cat_bookstore/blogs/${post.slug}`}
                            className="group flex h-full flex-col overflow-hidden border border-gray-300 bg-white text-left transition hover:border-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                        >
                            <Image className="aspect-[16/9] w-full object-cover" src={post.image} alt={post.imageAlt} width={1200} height={675} />
                            <div className="flex flex-1 flex-col p-4">
                                <time className="text-sm text-gray-600" dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                                <h2 className="mt-2 text-xl font-bold text-gray-950 group-hover:text-pink-800">{post.title}</h2>
                                <p className="mt-2 text-sm leading-6 text-gray-700">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => setSelectedCategory("Copy")} className="m-4 p-2 rounded-[1vw] border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                        <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
                        <h1>Copy</h1>
                    </button>
                </div>
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => setSelectedCategory("Technical")} className="m-4 p-2 rounded-[1vw] border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                        <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
                        <h1>Technical</h1>
                    </button>
                </div>
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => setSelectedCategory("Creative")} className="m-4 p-2 rounded-[1vw] border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                        <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
                        <h1>Creative</h1>
                    </button>
                </div>
            </div>
            <div>
                {selectedCategory && (
                    <div className="grid w-full grid-cols-1 justify-items-start gap-4 sm:grid-cols-3">
                        {filteredPieces.map((piece, index) => {
                            const cardContent = (
                                <div className="flex h-[280px] w-full max-w-[320px] flex-col overflow-hidden rounded border border-gray-300 bg-white text-left shadow-sm transition hover:border-gray-500">
                                    {piece.video ? (
                                        <video
                                            className="h-44 w-full shrink-0 object-cover"
                                            src={piece.video}
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            preload="metadata"
                                            aria-label={`${piece.Description} video preview`}
                                        />
                                    ) : (
                                        <img className="h-44 w-full shrink-0 object-cover" src={piece.image} alt={piece.Title} />
                                    )}
                                    <div className="flex min-h-0 flex-1 flex-col gap-1 p-3">
                                        <h2 className="font-semibold">{piece.Title}</h2>
                                        <p className="line-clamp-2 text-sm text-gray-600">{piece.Description}</p>
                                    </div>
                                </div>
                            );

                            return piece.href ? (
                                <Link
                                    key={index}
                                    href={piece.href}
                                    aria-label={`Read ${piece.Title}: ${piece.Description}`}
                                    className="w-full max-w-[320px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                                >
                                    {cardContent}
                                </Link>
                            ) : (
                                <div key={index} className="w-full max-w-[320px]">
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}               
