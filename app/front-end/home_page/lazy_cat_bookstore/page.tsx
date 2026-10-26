"use client"; 
import { useState } from "react";
const pieces = [
    {
        Category: "Technical",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 1",
    },
    {
        Category: "Copy",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 2",
    },
    {
        Category: "Creative",
        image: "/photos/Placeholder.jpeg",
        Description: "Testing 3",
    },
    {
        Category: "Creative",
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
        <div className="flex w-full flex-col items-start gap-4">
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
                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                        {filteredPieces.map((piece, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <img src={piece.image} width="100" alt="Placeholder Image" />
                                <h2>{piece.Description}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}               
