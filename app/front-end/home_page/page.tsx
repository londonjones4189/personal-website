import Link from "next/link";
import my_world from "./my_world/page";

export default function HomePage() {
 return (
   <div id="wd-home-page">
        {my_world()}
       <li>
         <Link href="home_page/byte_cafe" id="wd-lab1-link">
          Byte Cafe </Link>
       </li>
       <li>
         <Link href="home_page/lazy_cat_bookstore" id="wd-lab2-link">
           Lazy Cat Bookstore </Link>
       </li>
       <li>
         <Link href="home_page/my_home" id="wd-lab3-link">
           My Home </Link>
       </li>
   </div>
);}
