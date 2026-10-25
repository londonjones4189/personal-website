import Link from "next/link";
import my_world from "./my_world/page";
import maps from "./header/page";
import footer from "./footer/page";

export default function HomePage() {
 return (
   <div className = "min-h-screen">
        {maps()}
        {my_world()}
       
       <div className="flex flex-col items-center gap-8 py-8">
         <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-start">
           <div className="flex max-w-sm flex-col items-center text-center">
             <Link href="home_page/byte_cafe" id="wd-lab1-link" className="text-xl font-bold  hover:underline">
               Byte Cafe
             </Link>
             <h2 className="text-sm font-medium">Get hungry for software and product projects</h2>
           </div>

           <div className="flex max-w-sm flex-col items-center text-center">
             <Link href="home_page/lazy_cat_bookstore" id="wd-lab2-link" className="text-xl font-bold  hover:underline">
               Lazy Cat Bookstore
             </Link>
             <h2 className="text-sm font-medium">Browse shelves of blog posts, technical writing, copywriting, and creative works</h2>
           </div>
         </div>

         <div className="flex flex-col items-center text-center">
           <Link href="home_page/my_home" id="wd-lab3-link" className="text-xl font-bold  hover:underline">
             My Home
           </Link>
           <h2 className="text-sm font-medium">Learn about me and my experiences</h2>
         </div>
       </div>
        {footer()}
   </div>
);}
