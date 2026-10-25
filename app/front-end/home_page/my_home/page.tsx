export default function MyHome() {
    return (
        <div id="wd-my-home" className="flex w-full flex-col items-start gap-4">
            <button className="m-4 rounded-[1vw] border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                Back
            </button>
            <div className="flex w-full items-center justify-center gap-4">
                <h1 className="text-4xl font-extrabold">My Home</h1>
                <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
            </div>
            <img src="/photos/headshot.jpeg" width="100" alt="Placeholder Image" />
            <h3>Hi, I’m London! I’m a fourth-year at Northeastern University majoring in Computer Science and English with an analytics focus, 
                and minoring in Business Administration. Ever since I was little, 
                I have loved telling stories. I remember writing my first in my journal, about a one-winged fairy named Cleo who
                lived on the island of Randomia.
                Now, my storytelling goes far past my journal. 
                From product management to software engineering to technical writing, every role has let me tell a story, 
                whether through a product, a line of code, or a page of words. It’s the same thing I was doing in that journal as a kid, 
                and I hope to keep doing it for the rest of my life.</h3>
        </div>
    );
}