import Link from "next/link";
import { dictionaryEntries } from "../../front-end/home_page/lazy_cat_bookstore/blogs/blogData";

export default function TemporaryDictionaryPage() {
	return (
		<main className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
			<Link
				href="/"
				className="text-sm font-semibold text-[#3380B7] underline decoration-[#3380B7] underline-offset-4 hover:text-[#3380B7]"
			>
				Back to Lazy Cat Bookstore
			</Link>
			<dl className="divide-y divide-gray-300">
				{dictionaryEntries.map((entry) => (
					<div id={entry.id} key={entry.id} className="py-6">
						<dt className="text-2xl font-bold text-gray-950">{entry.term}</dt>
						<dd className="mt-2 max-w-2xl leading-7 text-gray-700">{entry.definition}</dd>
						<Link
							href={`/temporary/blogs/${entry.postSlug}#${entry.id}`}
							className="mt-3 inline-block text-sm font-semibold text-[#3380B7] underline decoration-[#3380B7] underline-offset-4 hover:text-[#3380B7]"
						>
							Read “{entry.postTitle}”
						</Link>
					</div>
				))}
			</dl>
			{dictionaryEntries.length === 0 && <p className="text-gray-700">No definitions have been added yet.</p>}
		</main>
	);
}