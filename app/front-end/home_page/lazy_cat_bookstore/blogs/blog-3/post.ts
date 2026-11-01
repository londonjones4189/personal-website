import type { BlogPost } from "../blogData";

const blogThreePost: BlogPost = {
    slug: "blog-3",
    title: "Technical Writing vs. Copywriting",
    publishedAt: "2026-11-01",
    image: "/photos/cat3.jpeg",
    imageAlt: "cat in tie",
    excerpt: "What copywriting and technical writing internships are really like, from interviews to the day-to-day work.",
    body: [
        {
            type: "paragraph",
            text: "People seem to think writing as a career has disappeared. This past summer, I told a woman at a coffee chat that I was a technical writing intern at IBM, and she said she was surprised that the company still hired for that role. During my co-op as a copywriter at Bose, I introduced myself to a group of interns and explained my position, and one of them asked, “But, like, AI?”",
        },
        {
            type: "image",
            src: "/photos/IBM2.jpeg",
            alt: "IBM office space",
            caption: "IBM Summer of 2026",
        },
        {
            type: "paragraph",
            text: "I can't blame anyone for these reactions. Bose and IBM are both primarily tech companies, so it makes sense that people would be unfamiliar with the job titles. To familiarize everyone, I want to explain what both roles were like, including the interview process, the day-to-day work, and how interning might differ from full-time.",
        },
        { type: "heading", text: "Copywriting" },
        {
            type: "paragraph",
            text: "When I posted on LinkedIn that I was going to be a copywriter co-op, I got a lot of congrats but also a few messages from friends asking if I was going into law. Some people outside the creative sphere confuse copywriting with copyright, which falls under compliance. Compliance teams make sure a company follows the relevant laws and that everything stays up to date. On the other hand, copywriters write creative content. That includes emails, web copy, app push notifications, posters, social media, product detail pages, third-party websites, and more. Most of what I wrote was short-form.",
        },
        { type: "heading", text: "The interview" },
        {
            type: "paragraph",
            text: "The interview process was two rounds. In the first, I picked my favorite ad, wrote a new tagline, three headlines, three haikus, and presented everything to my interviewer. In the second, I presented three pieces from my writing portfolio and walked through my process for each.",
        },
        { type: "heading", text: "The day-to-day" },
        {
            type: "paragraph",
            text: "Creative teams don’t work in sprints the way tech teams do. Instead, a project lead is assigned a project, writes a creative brief, and assembles a team based on everyone’s workload. Then the team meets to go over the brief. A typical team includes:",
        },
        { type: "paragraph", text: "Project lead: Handles communication between stakeholders and team." },
        { type: "paragraph", text: "Art director: Sets the visual look (not the same as a UX designer, who sets the layout)." },
        { type: "paragraph", text: "Copywriter: Writes the content to go alongside designs." },
        { type: "paragraph", text: "Creative director: Usually an experienced art director or copywriter who approves the work before it is handed off to stakeholders." },
        { type: "paragraph", text: "Visual designer: Similar to an art director but more specialized, such as in photo editing." },
        { type: "paragraph", text: "Producer: Added when a creative brief includes a video deliverable." },
        { type: "paragraph", text: "Photographers usually aren’t part of the brief, since photoshoots typically happen before it’s written." },
        {
            type: "paragraph",
            text: "I was usually on five projects at once, each with dozens of deliverables. On busy weeks, I had up to eight.",
        }, {
            type: "paragraph",
            text: "For my first two months, my manager, a copywriter turned creative director, was staffed on the same projects as me. After that, I was usually the sole copywriter unless the project was “evergreen,” meaning something like a product launch that stays on the website for a long time. I focused on website giveaways, artist collaborations, third-party work, and sales (for example, the end-of-summer sale).",
        },
        {
            type: "paragraph",
            text: "As an intern, there were a few things I didn’t do that a full-time copywriter at my company would. My manager would participate in pitches. In these, he would usually pair up with an art director, and they would work together to come up with example copy and photos for an ad idea. If their pitch was favored by stakeholders, they would do casting for the shoot and help direct it. As an intern, I could not travel internationally, so I did not attend most shoots.",
        },
        {
            type: "paragraph",
            text: "Overall, I loved the work of a copywriter. I got to write for collaborations and pop-up events with artists like LISA from BLACKPINK and with UConn, and I learned a huge amount about the creative world.",
        },
        { type: "heading", text: "Technical Writing" },
        {
            type: "paragraph",
            text: "This past summer, I was a technical writing intern on IBM’s AI for Developers team, right after a co-op as a software engineer at Clear Ballot Group. Some friends asked why I’d choose an internship that was “only” writing. They were confused when I told them I’d be coding.",
        },
        { type: "heading", text: "The interview" },
        {
            type: "paragraph",
            text: "That spring, I applied mainly for technical writing internships and landed six interviews. Three out of the six included coding assessments. The IBM interview was behavioral, but I was asked technical questions, for example, how agents work and how I would build one.",
        },
        { type: "heading", text: "The day-to-day" },
        {
            type: "paragraph",
            text: "At a software company like IBM, technical writers write product release statements and the social posts that announce them, build open-source documentation sites, and write documentation directly inside the code. They also write articles that promote a product, and full-timers often go to conferences to act as technical experts on a product.",
        },
        {
            type: "paragraph",
            text: "As an intern, I couldn’t travel internationally, so my work centered on code and docs. My team coded and presented activations at tech conferences, like silent discos powered by DJ Bob and a scavenger hunt called ShipWorks. My intern project was focused on DJ Bob, a product that will soon be open source. I fixed bugs, restructured parts of the code, wrote documentation throughout the codebase, and built the docs website. When my internship ended, I handed the site off to a full-time teammate so it could be used at TechXchange, a conference IBM hosts every year.",
        },
        { type: "heading", text: "“But, like, AI?”" },
        {
            type: "paragraph",
            text: "Despite popular belief, AI has not replaced technical writing or copywriting. It can help generate headlines, draft docs, and suggest code, but that was never the point of either job. A copywriter makes a product stand out and gives the brand a distinctive voice, while a technical writer makes a product understandable. Both roles depend on knowing the audience and the brand they are writing for. It calls for a type of creativity that AI could never replace.",
        },
    ]
};

export default blogThreePost;