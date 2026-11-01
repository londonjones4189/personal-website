import type { BlogPost } from "../blogData";

const blogOnePost: BlogPost = {
    slug: "blog-1",
    title: "Identifying Body In Book Technology",
    publishedAt: "2026-10-31",
    image: "/photos/Placeholder.jpeg",
    imageAlt: "Placeholder image for the blog post",
    excerpt: "A few thoughtful words can turn a confusing interface into a welcoming one.",
    body: [
        {
            type: "paragraph",
            text: "A book can be viewed as a body. They have spines like us, which crack if pushed too far. Similarly, they have heads (headers), feet (footers), and sometimes even ears (doggy-flapped pages). This is important because we readers handle a book based on its body type. If a book is long, we might need to hold the book with two hands instead of one. If a book has a paper cover, we might be able to bend the front, unlike if it were a hardcover. If a book’s paper is too smooth, we might fumble when trying to flip the page.",
        },
         {
            type: "paragraph",
            text: "If bodies impact the way we read, how do we read differently when the body of a text becomes a phone or a computer? What physical affordances does a book have and how can they be transferred to the screen?  How can identifying bodies expand book technology? ",
        },
        { type: "heading", text: "First, what is book technology?" },
        {
            type: "paragraph",
            text: "I am a Combined Computer Science and English major, which means I am constantly asked why I would choose such a strange pairing of majors. The answer is I don’t think the pairing is strange at all. In both fields, I write (essays in one, code in the other) to tell a story (the plot of an essay or the purpose of a product). The overlap gets so little research, I suspect, because the two academic spheres hold contradictory views of each other.",
        },
        {
            type: "paragraph",
            text: "The English side knows exactly how much modern technology can hurt books. AI companies buy physical books, scan them, and discard the originals to train their models. Those models then produce books of their own, imitating authors’ work and selling it for profit. The harm to physical books is real, but I think it overshadows the good that can come from combining books with technology.",
        },
         {
            type: "paragraph",
            text: "HarperCollins says, “Reading a physical book activates imagination in ways digital screens often cannot replicate.” Physical books indeed inspire my imagination. I read to escape my own reality, whether I’m transported to a fantasy realm where everyone’s name is hard to pronounce or jumping into the shoes of someone else through a juicy tell-all memoir. That immersiveness of a book is exactly what I want to understand.",
         }, 
          {
            type: "paragraph",
            text: "I’m curious how digital experiences could be just as “activating” as a physical book. My goal isn’t to replicate the book online, but to research how its features can carry over to any digital space and reshape the way we design for engagement.",
         },
         {
            type: "paragraph",
            text: "To find out, I will study what makes a book a book, and that is its physical design, its writing methods, and the community that forms around it. Then I will explore how they might translate to the screen. I’d like to define this area of research, book technology:",
         },
          {
            type: "definition",
            id: "book-technology",
            term: "Book Technology",
            definition: "the study and practice of translating the structural features, writing techniques, and culture of books into the design of digital spaces with the purpose of making them more immersive.",
        },
         { type: "heading", text: "Flipping" },
          {
            type: "paragraph",
            text: "One of the main affordances of a book is flipping the pages. Each turn of a page carries anticipation, because the reader has to act with their body before they find out what comes next. So how do we make digital spaces “page-turners”?",
         },
         {
            type: "paragraph",
            text: "Websites often imitate page-turning through pagination or scrolling. With pagination, readers click a button to move from one page to the next. Although this mimics the physical act of turning a page, the reader is simply moving between sections rather than uncovering something hidden. Scrolling creates the opposite problem: readers can move through the entire page without pausing to find out what comes next. Neither approach necessarily recreates the anticipation of turning a physical page.",
         },
         {
            type: "paragraph",
            text: "I wanted to find a way to make readers participate in the reveal, so I came up with a design practice I would like to call cliffhanger. Instead of presenting information immediately, the design hides a piece of text or an image until the reader interacts with it. For example, a brand launching a new product could hide the product image behind a colored layer that visitors must wipe away to see what is underneath. By making the reader take action to uncover the information, the reveal recreates the anticipation of turning a physical page.",
         },
         {
            type: "definition",
            id: "cliffhanger",
            term: "Cliffhanger",
            definition: "a digital translation of page flipping that hides a key piece of text or imagery until the viewer takes an action, heightening anticipatio",
        },
         {
            type: "paragraph",
            text: "I explored several ways to bring this concept to life through code. In the first example below, the viewer drags a square to uncover a hidden image. In the second, the viewer wipes away a layer of color with their cursor to reveal the murderer's name in a passage from a mystery. Both examples recreate the suspense of turning a page by making the reader take a physical action before discovery.",
         },
          {
            type: "interactive",
            prompt: "Choose the button to see its confirmation.",
            actionLabel: "Save for later",
            successLabel: "Saved to your list",
            successMessage: "This example is saved to your list.",
        },
         {
            type: "interactive",
            prompt: "Choose the button to see its confirmation.",
            actionLabel: "Save for later",
            successLabel: "Saved to your list",
            successMessage: "This example is saved to your list.",
        },
         {
            type: "paragraph",
            text: "The cliffhanger is only one translation from book to screen, but it moves us a step closer to unlocking the “activating” potential of digital spaces. And maybe in time the next great page-turner won’t be a book at all."
        },
        
    ]
};

export default blogOnePost;