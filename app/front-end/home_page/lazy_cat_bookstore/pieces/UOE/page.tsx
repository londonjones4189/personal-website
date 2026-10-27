import ProjectPhotoPage from "@/app/front-end/home_page/pieces/ProjectPhotoPage";

const evergreenPhotos = [
	"23E9AACD-8C14-401B-A41C-091BACCBEA44.jpeg",
	"3CCDE498-4F2F-4D97-9752-9B1F3A27B341.jpeg",
	"B87A2393-0635-451C-B244-388CB941C82E.jpeg",
	"E5B610B5-0CA3-4434-B796-9A0B562A4A43.jpeg",
];

const webPhotos = [
	"2D70B86F-11A7-4B82-9D2E-03AF9E4562F4.jpeg",
	"99B8D127-0A0D-4D75-8583-28154CE2B702.jpeg",
	"A465AE4C-F639-47BA-8F28-59B17115365E.jpeg",
	"B83EFFC7-F9E8-46A1-B991-47E77986BA43.jpeg",
	"BDC9B44B-0867-47E6-A251-C4956084489B.jpeg",
	"DADDFA18-E3EF-4E0B-8972-5ACECE70D09B.jpeg",
];

const amazonPhotos = [
	"26E3F522-C1A0-4C0B-86B7-A17D16C9072C.jpeg",
	"28A5103C-08CB-46B3-9C03-D208B5D9B429.jpeg",
	"2C43C954-0308-4275-ADD9-AEC46C0613BB.jpeg",
	"6456CEE6-50BC-4CB0-A0DA-8B557DE6F869.jpeg",
	"968AA2DB-22B2-495A-AD73-737F2653537D.jpeg",
	"A8A9A474-C27B-4BF1-84F0-27FFD3ADE447.jpeg",
	"B099C33F-6DEF-4A45-92D7-A4B075482365.jpeg",
	"CE3BCBB4-5A36-42A0-A556-E75DA86B9D76.jpeg",
	"D1E7A6CD-D731-4818-92BD-9310D35C7661.jpeg",
];

const pdPhotos = [
	"577F52F8-E24C-4934-AEBE-5A4E48E5F1ED_1_105_c.jpeg",
	"9F193B54-54EE-4A9B-868B-B5F078C58E5A.jpeg",
	"AAF47190-E2E3-4D3C-AE04-B68B85910FAB_4_5005_c.jpeg",
];

function makeImageGroup(folder: string, title: string, photos: string[]) {
	return {
		title,
		images: photos.map((photo, index) => ({
			src: `/photos/Evergreen/${folder ? `${folder}/` : ""}${photo}`,
			alt: `Ultra Open Earbuds Evergreen ${title.toLowerCase()} image ${index + 1}`,
		})),
	};
}

export default function UltraOpenEarbudsEvergreenPage() {
	return (
		<ProjectPhotoPage
			title="Ultra Open Earbuds Evergreen"
			subtitle="Product detail, website, and Amazon creative for Ultra Open Earbuds."
			heroVideo="/videos/UOE.mov"
			groups={[
				makeImageGroup("", "Campaign imagery", evergreenPhotos),
				makeImageGroup("web", "Website", webPhotos),
				makeImageGroup("Amazon", "Amazon", amazonPhotos),
				makeImageGroup("PD", "PD", pdPhotos),
			]}
		/>
	);
}
