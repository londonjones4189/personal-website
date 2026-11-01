import type { BlogPost } from "../blogData";

const blogTwoPost: BlogPost = {
    slug: "blog-2",
    title: "Finding ‌Attention ‌Through ‌Book Technology",
    publishedAt: "2026-11-01",
    image: "/photos/cat2.jpeg",
    imageAlt: "cat on a computer",
    excerpt: "Every year when I come home for Christmas break and get to look at my bookshelf, I can read and finish a book in one day...",
    body: [
        {
            type: "paragraph",
            text: "Every year when I come home for Christmas break and get to look at my bookshelf, I can read and finish a book in one day. And every year it shocks me when I come back to school and try to read a book on my phone that takes weeks. Why does moving a book to the screen make my reading time so much longer?",
        },
         {
            type: "paragraph",
            text: "When I read a book at home, I often say I can't put it down. I also say the same thing about my phone. If both are so captivating, how is the attention created by the book different? Is there a way to translate it to the screen? And how does identifying these differences further book technology?",
        },
        { type: "heading", text: "Turning The Book" },
        {
            type: "paragraph",
            text: "An object's affordances, its physical design, affect how we approach it. I talked about this further in Identifying Body in Book Technology: how a book's affordances depend on the body, hardcover or paperback, texture of the paper, size. But unlike most objects, a book's content can also count as an affordance. The content of a book affects our script and what we do. For example, if I'm reading a yoga book and the text reads \"go downward into child's pose,\" the script that I am given is to go into child's pose. Websites and apps also have content scripts based on the purpose of the digital space. On Subway Surfers, I swipe to move the character around; on Pinterest I scroll and pin."
        },  
        {
            type: "paragraph",
            text: "Scripts and the intended movement that comes with them are important to attention because movement helps us to the story, making us less distracted. Bernstein states that \"repetition of paths of movement in combination with objects to the production of not-quite-conscious thought\" (Boeckeler 58). In other words, if we combine a repeated motion and an object, we can produce thought without being aware that we are doing it. If I'm reading a yoga book and each page has a pose to do and I move into it, each time the text and my body are combined, and later I can remember the page I read because I can remember the movement.",
        },
        {
            type: "paragraph",
            text: "A book has many repeated movements. One can flip the pages and open and close the covers again and again. After a certain amount of time, they become unconscious, and they become attached to the object. The movements I perform bring me closer to the book, thus making me more focused on the story.",
        },
        {
            type: "paragraph",
            text: "A book can even enhance memory further by adding a new repeated element to its content. Jennifer Egan's A Visit From The Goon Squad does this well. The book is about a web of people connected through the music business, told through a series of chapters, each from a different character's perspective. Towards the end of the book, it includes a \"slide journal\" (Figures 1 and 2).",
        },
        {
            type: "image",
            src: "/photos/figure1.jpeg",
            alt: "figure 1",
            caption: "Figure 1",
        }, {
            type: "image",
            src: "/photos/figure2.jpeg",
            alt: "figure 2",
            caption: "Figure 2",
        },
        {
            type: "paragraph",
            text: "This chapter matters because it gives the main cast their happy ending, told through the perspective of their daughter’s unusual slide journal. To read it properly, we have to physically turn the book sideways. The section runs for several pages, so we hold the book that way again and again. That repeated turn is a new script, just like a child's pose in the yoga book. Because the movement belongs to this text alone, we become attached to the story and thus can better focus on it.",
        },
        { type: "heading", text: "Movement on the Screen" },
        {
            type: "paragraph",
            text: "Phones and computers also have content-scripts like books that determine our scripts. A digital body holds dozens of apps and thousands of stories, and each app has its own script that affects movement; for example, on TikTok, you swipe up for more content. But hundreds of other apps use the same gesture. Swiping and tapping are not unique to any one app, any one story. That is why repeated movement doesn't tie you to the story the same way it does in a book. When I say I can’t put my phone down, it’s rarely because I’m focused on one digital space. It’s because I’m hopping from space to space; although I am repeating the same movement, it gets tied to a thousand different stories, scattering my focus. How do we translate a book’s unique movements to the screen to create attachment and focus?",
        },
        {
            type: "paragraph",
            text: "Phones are small and easy to turn, so we can replicate the turning of a book almost directly. On a phone, a section of a digital space can ask readers to turn their screen sideways in order to continue reading. Computers are harder, since the screen doesn’t rotate and the machine is much heavier than a book or a phone. On a computer, text or a design can begin sideways or upside down, and readers click it to turn it upright and make it legible. In both cases, the added movement belongs to that digital space alone. It asks the reader to perform an action specific to the content, which sets it apart from the swipes and taps they make everywhere else, making the passage easier to remember and the reader’s focus stronger.",
        },
        {
            type: "paragraph",
            text: "I call this feature a turning point, because it asks readers to turn a text or image to make it legible at the moment that matters most in the digital experience. I’ve included an example of this interaction below.",
        },
        {
            type: "rotateText",
            prompt: "Click the sideways text to set it upright.",
            text: "Turn the page",
        },
        { type: "heading", text: "Lazy Cat Dictionary" },
        {
            type: "definition",
            id: "turning-point",
            term: "Turning point",
            definition: "a unique, content-specific movement added to a digital space at an important moment, asking the reader to turn the text or image with the purpose of increasing focus.",
        },
        {
            type: "paragraph",
            text: "A turning point doesn’t copy the physical act of holding a book, but it brings us closer to the “I can’t put it down” quality of reading one.",
        },
        { type: "heading", text: "Works Cited" },
        {
            type: "paragraph",
            text: "Boeckeler, Erika Mary. “Comb Poems.” Dynamic Matter: Transforming Renaissance Objects, edited by Jennifer Linhart Wood, The Pennsylvania State UP, 2022, pp. 55-80."
        }  
    ]
};

export default blogTwoPost;