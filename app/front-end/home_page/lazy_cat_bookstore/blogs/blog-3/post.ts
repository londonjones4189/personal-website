import type { BlogPost } from "../blogData";

const blogThreePost: BlogPost = {
    slug: "blog-3",
    title: "The small words that make a page feel clear",
    publishedAt: "2026-10-31",
    image: "/photos/UConn/UConn.jpeg",
    imageAlt: "UConn giveaway campaign image featuring two people wearing headphones",
    excerpt: "A few thoughtful words can turn a confusing interface into a welcoming one.",
    body: [
        {
            type: "paragraph",
            text: "A page can look beautiful and still leave someone wondering what to do next. Microcopy, the small labels around a button, form, or confirmation, often makes the difference between a smooth experience and a frustrating one.",
        },
        { type: "heading", text: "Give every button a clear job" },
        {
            type: "image",
            src: "/photos/UConn/Email1.jpeg",
            alt: "A visual from the UConn giveaway email campaign",
            caption: "A campaign image gives the message a strong visual starting point; clear button text completes the next step.",
        },
        {
            type: "paragraph",
            text: "Instead of a vague label like “Submit,” describe what will happen. The example below changes its message after you activate it, so the interface confirms your action right away.",
        },
        {
            type: "code",
            language: "javascript",
            code: 'const buttonLabel = isSaved ? "Saved to your list" : "Save for later";',
        },
        {
            type: "interactive",
            prompt: "Choose the button to see its confirmation.",
            actionLabel: "Save for later",
            successLabel: "Saved to your list",
            successMessage: "This example is saved to your list.",
        },
        {
            type: "definition",
            id: "microcopy",
            term: "Microcopy",
            definition: "Short, purposeful writing in an interface that helps people understand what to do, what just happened, or what to expect next.",
        },
        {
            type: "paragraph",
            text: "When interface writing is clear and considerate, it fades into the experience in the best way: people can focus on what they came to do.",
        },
    ],
};

export default blogThreePost;