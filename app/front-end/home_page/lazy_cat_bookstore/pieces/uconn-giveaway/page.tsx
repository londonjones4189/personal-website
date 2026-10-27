import ProjectPhotoPage from "@/app/front-end/home_page/pieces/ProjectPhotoPage";

const liveGiveawayUrl = "https://www.bose.com/uconn-bose-giveaway?srsltid=AYCX9vKG2nHLOFvvWHk1g2IdyEDyeimbg3iBDUkMu3VowDvG6FwHODQz";

export default function UConnGiveawayPage() {
  return (
    <ProjectPhotoPage
      title="UConn x Bose Giveaway"
      subtitle="Email campaign creative for the UConn x Bose giveaway."
      links={[{ label: "View the live Bose UConn giveaway", href: liveGiveawayUrl }]}
      groups={[
        {
          title: "Campaign imagery",
          images: [{ src: "/photos/UConn/UConn.jpeg", alt: "UConn x Bose giveaway campaign image" }],
        },
        {
          title: "Email creative",
          images: [
            { src: "/photos/UConn/Email1.jpeg", alt: "UConn x Bose giveaway email design, first version" },
            { src: "/photos/UConn/Email2.jpeg", alt: "UConn x Bose giveaway email design, second version" },
          ],
        },
      ]}
    />
  );
}