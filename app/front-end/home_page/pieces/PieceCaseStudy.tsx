"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stops = [
  { id: "context", label: "Context", x: 80, y: 112 },
  { id: "process", label: "Process", x: 80, y: 294 },
  { id: "outcome", label: "Outcome", x: 80, y: 478 },
  { id: "impact", label: "Impact", x: 80, y: 660 },
] as const;

const sections = [
  {
    id: "context",
    eyebrow: "01 / The starting point",
    title: "Context",
    paragraphs: [
      "Set the scene for this piece: who it was for, what they needed, and what made the challenge worth solving.",
      "Add the constraints, the opportunity, and the question that guided the work.",
    ],
  },
  {
    id: "process",
    eyebrow: "02 / The work",
    title: "Process",
    paragraphs: [
      "Walk through the decisions that shaped the project. Share the research, experiments, and iterations that moved it forward.",
      "Call out a turning point or trade-off that changed the direction of the work.",
    ],
  },
  {
    id: "outcome",
    eyebrow: "03 / What took shape",
    title: "Outcome",
    paragraphs: [
      "Show what you made and explain how it answers the original challenge. This is a good place for final visuals, deliverables, or a link to the live work.",
      "Be specific about your role and what you contributed.",
    ],
  },
  {
    id: "impact",
    eyebrow: "04 / What changed",
    title: "Impact",
    paragraphs: [
      "Describe what happened after the work was shared: results, feedback, lessons learned, or the next question it opened up.",
      "Use concrete evidence where you have it, and note what you would explore next.",
    ],
  },
] as const;

const roadPath = `M ${stops[0].x} ${stops[0].y} V ${stops[stops.length - 1].y}`;

function getRoadPosition(progress: number) {
  return {
    x: stops[0].x,
    y: stops[0].y + (stops[stops.length - 1].y - stops[0].y) * progress / (stops.length - 1),
  };
}

export default function PieceCaseStudy() {
  const [travelProgress, setTravelProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateCarPosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const anchorPositions = sections.map(({ id }) => {
          const section = document.getElementById(id);
          return section
            ? window.scrollY + section.getBoundingClientRect().top - window.innerHeight * 0.6
            : 0;
        });
        const scrollPosition = window.scrollY;
        let progress = 0;

        for (let index = 0; index < anchorPositions.length - 1; index += 1) {
          const start = anchorPositions[index];
          const end = anchorPositions[index + 1];
          if (scrollPosition <= end) {
            const segmentProgress = end > start
              ? Math.max(0, Math.min((scrollPosition - start) / (end - start), 1))
              : 0;
            progress = index + segmentProgress;
            break;
          }
          progress = index + 1;
        }

        setTravelProgress(progress);
      });
    };

    updateCarPosition();
    window.addEventListener("scroll", updateCarPosition, { passive: true });
    window.addEventListener("resize", updateCarPosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateCarPosition);
      window.removeEventListener("resize", updateCarPosition);
    };
  }, []);

  const activeStopIndex = Math.min(Math.round(travelProgress), stops.length - 1);
  const car = getRoadPosition(travelProgress);

  return (
    <main className="min-h-screen bg-[#E7EEEA] px-3 pb-20 text-[#1E2A26] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#A9B5AF]/60 py-5 font-sans text-sm">
          <Link className="font-semibold hover:underline" href="/front-end/home_page/lazy_cat_bookstore">
            &larr; Lazy Cat Bookstore
          </Link>
          <span className="text-[#5E6D67]">Selected work / 01</span>
        </header>

        <div className="grid grid-cols-[124px_minmax(0,1fr)] gap-3 sm:grid-cols-[150px_minmax(0,40rem)] sm:justify-center sm:gap-8 lg:grid-cols-[220px_minmax(0,40rem)] lg:gap-16">
          <aside className="sticky top-4 h-[calc(100vh-2rem)] self-start" aria-label="Case study sections">
            <nav className="h-full" aria-label="On this page">
              <svg className="h-full w-full overflow-visible" viewBox="0 0 220 760" role="img" aria-label="A straight road with stops for Context, Process, Outcome, and Impact">
                <path d={roadPath} fill="none" stroke="#A9B5AF" strokeWidth="40" strokeLinecap="round" opacity=".35" />
                <path d={roadPath} fill="none" stroke="#39433F" strokeWidth="28" strokeLinecap="round" />
                <path d={roadPath} fill="none" stroke="#F2C94C" strokeWidth="2" strokeDasharray="8 10" />

                {stops.map((stop) => {
                  const isActive = stops[activeStopIndex].id === stop.id;
                  const labelX = 105;

                  return (
                    <a key={stop.id} href={`#${stop.id}`} aria-current={isActive ? "location" : undefined}>
                      <circle cx={stop.x} cy={stop.y} r="11" fill={isActive ? "#F2C94C" : "#E7EEEA"} stroke={isActive ? "#1E2A26" : "#A9B5AF"} strokeWidth={isActive ? "3" : "2"} />
                      <text x={labelX} y={stop.y + 5} textAnchor="start" fill={isActive ? "#1E2A26" : "#5E6D67"} fontFamily="Arial, sans-serif" fontSize="15" fontWeight={isActive ? "700" : "500"}>
                        {stop.label}
                      </text>
                    </a>
                  );
                })}

                <g transform={`translate(${car.x - 15} ${car.y - 24})`} aria-hidden="true">
                  <rect x="3" y="4" width="24" height="42" rx="9" fill="#E26D3D" stroke="#1E2A26" strokeWidth="2" />
                  <path d="M8 12 Q15 7 22 12 L22 21 L8 21 Z" fill="#CFE3EA" />
                  <rect x="8" y="27" width="14" height="12" rx="3" fill="#CFE3EA" />
                  <circle cx="5" cy="14" r="2" fill="#F2C94C" />
                  <circle cx="25" cy="14" r="2" fill="#F2C94C" />
                </g>
              </svg>
            </nav>
          </aside>

          <article className="min-w-0 pb-16 pt-10 sm:pt-16">
            <div className="mb-10">
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#4E7D4F]">Case study / Creative collaboration</p>
              <h1 className="font-sans text-4xl font-bold leading-tight sm:text-6xl">Bose x LISA</h1>
              <p className="mt-4 max-w-xl text-xl italic leading-relaxed text-[#5E6D67]">A closer look at the thinking, making, and meaning behind this piece.</p>
              <img className="mt-8 aspect-[16/9] w-full rounded-sm object-cover" src="/photos/BosexLISA.jpeg" alt="Bose x LISA project" />
              <a
                className="mt-4 inline-block font-sans font-semibold text-[#1E2A26] underline underline-offset-4 hover:text-[#4E7D4F]"
                href="https://www.bose.com/bose-x-lisa-pop-up?srsltid=AYCX9vLcxhlmhFPwIz0sSW_hJsPQrztoyVAVRwpZNhWPC75bfIK3N83n"
                target="_blank"
                rel="noreferrer"
              >
                Visit the Bose x LISA pop-up
              </a>
              <a
                className="mt-3 block font-sans font-semibold text-[#1E2A26] underline underline-offset-4 hover:text-[#4E7D4F]"
                href="https://www.bose.com/bose-x-lisa-ultra-open-earbuds-crystal-edition-giveaway?srsltid=AYCX9vIFR2pGxtbfRtCUIlLlFGehE4LU5zm9iuzZKRJFYvI2469OHaKD"
                target="_blank"
                rel="noreferrer"
              >
                Visit the Bose x LISA Crystal Edition giveaway
              </a>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-12 border-t border-[#A9B5AF]/70 py-12 sm:py-16">
                <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#5E6D67]">{section.eyebrow}</p>
                <h2 className="mb-6 font-sans text-3xl font-bold sm:text-4xl">{section.title}</h2>
                <div className="max-w-prose space-y-5 text-lg leading-8">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}

            <p className="border-t border-[#A9B5AF]/70 pt-6 font-sans text-sm text-[#5E6D67]">End of the road for this piece. <a className="font-semibold text-[#1E2A26] underline underline-offset-4" href="#context">Back to context</a></p>
          </article>
        </div>
      </div>
    </main>
  );
}