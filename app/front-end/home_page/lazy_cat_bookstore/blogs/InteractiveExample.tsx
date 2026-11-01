"use client";

import { useState } from "react";

type InteractiveExampleProps = {
    prompt: string;
    actionLabel: string;
    successLabel: string;
    successMessage: string;
};

export default function InteractiveExample({ prompt, actionLabel, successLabel, successMessage }: InteractiveExampleProps) {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="my-6 flex flex-wrap items-center justify-between gap-4 border-l-4 border-pink-500 bg-pink-50 p-5">
            <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-pink-800">Interactive example</p>
                <p className="mt-1 text-sm text-gray-700" aria-live="polite">
                    {isSaved ? successMessage : prompt}
                </p>
            </div>
            <button
                type="button"
                aria-pressed={isSaved}
                onClick={() => setIsSaved((saved) => !saved)}
                className="min-h-11 border border-gray-900 bg-gray-900 px-4 py-2 font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
            >
                {isSaved ? successLabel : actionLabel}
            </button>
        </div>
    );
}