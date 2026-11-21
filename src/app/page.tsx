import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { ProjectFeature } from "@/components/ProjectFeature/ProjectFeature";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { MoreSites } from "@/components/MoreSites/MoreSites";
import { Showreel } from "@/components/Showreel/Showreel";
import { Reels } from "@/components/Reels/Reels";
import { Promo } from "@/components/Promo/Promo";
import { PosterRing } from "@/components/PosterRing/PosterRing";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { sections } from "@/content/sections";
import { projects } from "@/content/projects";
import { posters } from "@/content/media";

export default function HomePage() {
  const workSec = sections.find((s) => s.id === "work")!;
  const mediaSec = sections.find((s) => s.id === "media")!;
  const remainingSections = sections.filter((s) => s.id !== "work" && s.id !== "media");

  const featureProject = projects[0];
  const cardProjects = projects.slice(1, 4);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        {/* Work Section */}
        <section
          id={workSec.id}
          className="wrap band"
          aria-labelledby={`heading-${workSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={workSec.timecode}
            title={workSec.title}
            italic={workSec.italic}
            note={workSec.note}
            headingId={`heading-${workSec.id}`}
          />

          <ProjectFeature project={featureProject} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            {cardProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <MoreSites />
        </section>

        {/* Media Section */}
        <section
          id={mediaSec.id}
          className="wrap band"
          aria-labelledby={`heading-${mediaSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={mediaSec.timecode}
            title={mediaSec.title}
            italic={mediaSec.italic}
            note={mediaSec.note}
            headingId={`heading-${mediaSec.id}`}
          />

          <Showreel />
          <Reels />
          <Promo />
          <PosterRing>
            {posters.map((poster) => (
              <div
                key={poster.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <MediaSlot
                  media={poster.media}
                  style={{
                    borderRadius: "6px",
                    boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.9)",
                  }}
                />
              </div>
            ))}
          </PosterRing>
        </section>

        {/* Remaining sections placeholders */}
        {remainingSections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="wrap band"
            aria-labelledby={`heading-${sec.id}`}
            style={{
              paddingBlock: "clamp(72px, 10vw, 128px)",
              minHeight: "40vh",
              borderTop: "1px solid var(--line)",
            }}
          >
            <SectionHeader
              timecode={sec.timecode}
              title={sec.title}
              italic={sec.italic}
              note={sec.note}
              headingId={`heading-${sec.id}`}
            />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
