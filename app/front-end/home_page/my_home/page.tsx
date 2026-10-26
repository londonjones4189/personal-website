const experiences = [
     {
        image: "/photos/SupplyTrace.jpeg",
        company: "SupplyTrace",
        title: "Student Researcher",
        period: "September 2026 - Present",
    },
    {
        image: "/photos/IBM.jpeg",
        company: "IBM",
        title: "Technical Writing Intern",
        period: "June 2026 - Sept 2026",
    },
     {
        image: "/photos/CBG.jpeg",
        company: "Clear Ballot Group",
        title: "Software Engineering Co-op",
        period: "January 2026 - June 2026",
    },
    {
        image: "/photos/Syndey.jpeg",
        company: "University of TechnologySydney",
        title: "Student Researcher",
        period: "June 2025 - Auugust 2025",
    },
    {
        image: "/photos/Bose.jpeg",
        company: "Bose",
        title: "Copywriter Co-op",
        period: "January 2025 - June 2025",
    },
];


const leadership = [
    {
        image: "/photos/Develop4Good.jpeg",
        company: "Develop For Good",
        title: "Product Manager",
        period: "October 2026 - Present",
    },
     {
        image: "/photos/Scout.jpeg",
        company: "Scout",
        title: "Project Manager",
        period: "September 2025 - Present",
    },
];
export default function MyHome() {
    return (
        <div id="wd-my-home" className="flex w-full flex-col items-start gap-4">
            <button className="m-4 rounded-[1vw] border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                Exit
            </button>
            <div className="flex w-full items-center justify-center gap-4">
                <h1 className="text-4xl font-extrabold">My Home</h1>
                <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
            </div>
            <div className="polaroid-scene" aria-label="Rotating photo card">
                <div className="polaroid-flipper">
                    <div className="polaroid-face polaroid-front">
                        <img src="/photos/headshot.jpeg" alt="London Jones" />
                        <p className="polaroid-caption open-to-work">Open to work</p>
                    </div>
                    <div className="polaroid-face polaroid-back" aria-hidden="true">
                        <img src="/photos/placeholder.jpeg" alt="" />
                        <p className="polaroid-caption">Always collecting stories</p>
                    </div>
                </div>
            </div>
            <h3>Hi, I’m London! I’m a fourth-year at Northeastern University majoring in Computer Science and English with an analytics focus, 
                and minoring in Business Administration. Ever since I was little, 
                I have loved telling stories. I remember writing my first in my journal, about a one-winged fairy named Cleo who
                lived on the island of Randomia.
                Now, my storytelling goes far past my journal. 
                From product management to software engineering to technical writing, every role has let me tell a story, 
                whether through a product, a line of code, or a page of words. It’s the same thing I was doing in that journal as a kid, 
                and I hope to keep doing it for the rest of my life.</h3>
            <div className="flex w-full items-center gap-4">
                <h1>Experience</h1>
                <a
                    href="/resume.pdf"
                    download="London-Jones-Resume.pdf"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Download Resume
                </a>
            </div>
            <div className="flex w-full flex-col gap-6">
                {experiences.map((experience) => (
                    <article key={`${experience.company}-${experience.title}`} className="flex w-full items-start gap-4">
                        <img
                            src={experience.image}
                            alt={`${experience.company} logo`}
                            className="h-16 w-16 shrink-0 rounded-md object-contain"
                        />
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg font-semibold">{experience.title}</h2>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                                <p>@{experience.company}</p>
                                <p>{experience.period}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <h1>Leadership</h1>
            <div className="flex w-full flex-col gap-6">
                {leadership.map((lead) => (
                    <article key={`${lead.company}-${lead.title}`} className="flex w-full items-start gap-4">
                        <img
                            src={lead.image}
                            alt={`${lead.company} logo`}
                            className="h-16 w-16 shrink-0 rounded-md object-contain"
                        />
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg font-semibold">{lead.title}</h2>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                                <p>@{lead.company}</p>
                                <p>{lead.period}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>


    );
}