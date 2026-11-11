import type { Metadata } from "next";
import HomePageLayout from "./front-end/home_page/layout";
import HomePage from "./front-end/home_page/page";

export const metadata: Metadata = {
  title: "London Jones",
  description: "The portfolio and projects of London Jones.",
};

export default function Home() {
  return (
    <HomePageLayout>
      <HomePage />
    </HomePageLayout>
  );
}
