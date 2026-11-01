import Link from "next/link";
import type { BlogContentBlock } from "./blogData";

type DefinitionBlock = Extract<BlogContentBlock, { type: "definition" }>;

export default function BlogDefinition({ block }: { block: DefinitionBlock }) {
    return (
        <aside id={block.id} className="my-8 border-l-4 border-[#3380B7] bg-[#D7EAF4] p-5 text-gray-900">
            <h2 className="text-xl font-bold">{block.term}</h2>
            <p className="mt-2 leading-7">{block.definition}</p>
            <Link
                href={`/front-end/home_page/lazy_cat_bookstore/dictionary#${block.id}`}
                className="mt-4 inline-block bg-[#3380B7] px-3 py-2 text-sm font-semibold text-amber-950 underline decoration-[#3380B7] underline-offset-4 hover:bg-[#3380B7]/80"
            >
                View in Lazy Cat Dictionary
            </Link>
        </aside>
    );
}