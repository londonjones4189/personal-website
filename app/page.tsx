import type { Metadata } from "next";
import TemporaryBookstoreView from "./front-end/home_page/lazy_cat_bookstore/TemporaryBookstoreView";

export const metadata: Metadata = {
  title: "Lazy Cat Bookstore",
  description: "The Lazy Cat Bookstore blog and portfolio.",
};

export default function Home() {
  return <TemporaryBookstoreView />;
}
