export default function MyWorld() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-extrabold">Hi, I'm London!</h1>
            <h1 className="text-4xl font-medium">I am a Creative</h1>
            <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <span
                    aria-hidden="true"
                    className="relative h-6 w-11 rounded-full bg-gray-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300"
                />
            </label>

            <h1 className="text-2xl font-medium">Recruiter Mode</h1>
            <img src="/photos/placeholder.jpeg" width="300px" alt="Placeholder Image" />
            <a
                href="#home-content"
                className="flex items-center gap-4 text-4xl font-extrabold hover:underline focus-visible:underline"
                aria-label="Scroll down to the rest of the page"
            >
                <span aria-hidden="true">↓</span>
                <span>Welcome to My World</span>
                <span aria-hidden="true">↓</span>
            </a>

        </div>
    );
}

