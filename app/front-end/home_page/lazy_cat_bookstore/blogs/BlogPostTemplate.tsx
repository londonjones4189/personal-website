import Image from "next/image";
import Link from "next/link";
import BlogDefinition from "./BlogDefinition";
import { DragReveal, ScratchReveal } from "./CliffhangerInteractions";
import InteractiveExample from "./InteractiveExample";
import type { BlogContentBlock, BlogPost } from "./blogData";
import { formatBlogDate } from "./blogData";

type DefinitionBlock = Extract<BlogContentBlock, { type: "definition" }>;

function renderParagraph(text: string, definitions: DefinitionBlock[]) {
    if (definitions.length === 0) {
        return text;
    }

    const definitionsByTerm = new Map(definitions.map((definition) => [definition.term.toLowerCase(), definition]));
    const terms = definitions
        .map((definition) => definition.term)
        .sort((first, second) => second.length - first.length)
        .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const matcher = new RegExp(`\\b(${terms.join("|")})\\b`, "gi");

    return text.split(matcher).map((part, index) => {
        const definition = definitionsByTerm.get(part.toLowerCase());

        if (!definition) {
            return part;
        }

        return (
            <Link
                key={`${definition.id}-${index}`}
                href={`/front-end/home_page/lazy_cat_bookstore/dictionary#${definition.id}`}
                className="font-bold text-[#3380B7] underline decoration-[#3380B7] underline-offset-2 hover:text-black"
            >
                {part}
            </Link>
        );
    });
}

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
    const definitions = post.body.filter((block): block is DefinitionBlock => block.type === "definition");

    return (
        <main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
            <Link
                href="/front-end/home_page/lazy_cat_bookstore"
                className="text-sm font-semibold text-black underline decoration-[#3380B7] underline-offset-4 hover:text-black]"
            >
                Back to Lazy Cat Bookstore
            </Link>
            <article className="mt-8">
                <header className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#3380B7]">Lazy Cat Bookstore · Journal</p>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">{post.title}</h1>
                    <time className="mt-4 block text-sm text-gray-600" dateTime={post.publishedAt}>
                        Published {formatBlogDate(post.publishedAt)}
                    </time>
                </header>

                <Image
                    className="aspect-[16/9] w-full object-cover"
                    src={post.image}
                    alt={post.imageAlt}
                    width={1200}
                    height={675}
                />

                <div className="mx-auto max-w-2xl py-8 text-base leading-8 text-gray-800">
                    {post.body.map((block, index) => {
                        if (block.type === "paragraph") {
                            return <p key={index} className="my-5">{renderParagraph(block.text, definitions)}</p>;
                        }

                        if (block.type === "heading") {
                            return <h2 key={index} className="mb-3 mt-10 text-2xl font-bold leading-tight text-gray-950">{block.text}</h2>;
                        }

                        if (block.type === "image") {
                            return (
                                <figure key={index} className="my-8">
                                    <Image className="max-h-[34rem] w-full object-cover" src={block.src} alt={block.alt} width={1200} height={675} />
                                    <figcaption className="mt-2 text-sm leading-6 text-gray-600">{block.caption}</figcaption>
                                </figure>
                            );
                        }

                        if (block.type === "code") {
                            return (
                                <div key={index} className="my-6 overflow-hidden bg-gray-950 text-gray-100">
                                    <div className="border-b border-gray-700 px-4 py-2 text-xs uppercase tracking-wide text-gray-300">{block.language}</div>
                                    <pre className="overflow-x-auto p-4 text-sm leading-6"><code>{block.code}</code></pre>
                                </div>
                            );
                        }

                        if (block.type === "interactive") {
                            return <InteractiveExample key={index} {...block} />;
                        }

                        if (block.type === "dragReveal") {
                            return <DragReveal key={index} {...block} />;
                        }

                        if (block.type === "scratchReveal") {
                            return <ScratchReveal key={index} {...block} />;
                        }

                        return <BlogDefinition key={index} block={block} />;
                    })}
                </div>
            </article>
        </main>
    );
}