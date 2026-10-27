import Link from "next/link";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectImageGroup = {
  title: string;
  images: ProjectImage[];
};

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectPhotoPageProps = {
  title: string;
  subtitle: string;
  groups: ProjectImageGroup[];
  heroVideo?: string;
  links?: ProjectLink[];
};

export default function ProjectPhotoPage({
  title,
  subtitle,
  groups,
  heroVideo,
  links = [],
}: ProjectPhotoPageProps) {
  return (
    <main className="min-h-screen bg-white px-5 pb-20 text-[#20211f] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-gray-200 py-5 font-sans text-sm">
          <Link className="font-semibold text-gray-700 hover:text-black" href="/front-end/home_page/lazy_cat_bookstore">
            &larr; Lazy Cat Bookstore
          </Link>
          <span className="text-gray-500">Selected work</span>
        </header>

        <section className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-12">
          <div>
            <p className="font-sans text-xs font-semibold uppercase text-gray-500">Copywriting / Campaign</p>
            <h1 className="mt-3 max-w-2xl font-sans text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">{subtitle}</p>
            {links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    className="font-sans text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </div>

          {heroVideo && (
            <video
              className="aspect-video w-full bg-gray-100 object-cover"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${title} campaign video`}
            />
          )}
        </section>

        <div className="space-y-16 sm:space-y-20">
          {groups.map((group, groupIndex) => (
            <section key={group.title} aria-labelledby={`group-${groupIndex}`}>
              <div className="mb-5 flex items-end justify-between border-b border-gray-200 pb-3">
                <h2 id={`group-${groupIndex}`} className="font-sans text-2xl font-bold sm:text-3xl">{group.title}</h2>
                <span className="font-sans text-sm text-gray-500">{String(groupIndex + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {group.images.map((image) => (
                  <figure key={image.src} className="min-w-0 overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      className="block h-auto w-full"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}