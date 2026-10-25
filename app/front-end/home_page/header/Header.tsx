import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-start p-4">
            <Link href="/front-end/home_page" aria-label="Go to home page" className="inline-flex">
                <img src="/photos/placeholder.jpeg" width="50" alt="Home" />
            </Link>
        </header>
    );
}