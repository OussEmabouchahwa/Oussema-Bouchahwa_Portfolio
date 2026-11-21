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
import { ExperienceTracks } from "@/components/ExperienceTracks/ExperienceTracks";
import { StackList } from "@/components/StackList/StackList";
import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { sections } from "@/content/sections";
import { projects } from "@/content/projects";
import { posters } from "@/content/media";

export default function HomePage() {
  const workSec = sections.find((s) => s.id === "work")!;
  const mediaSec = sections.find((s) => s.id === "media")!;
  const expSec = sections.find((s) => s.id === "experience")!;
  const stackSec = sections.find((s) => s.id === "stack")!;
  const aboutSec = sections.find((s) => s.id === "about")!;
  const contactSec = sections.find((s) => s.id === "contact")!;

  const featureProject = projects[0];
  const cardProjects = projects.slice(1, 4);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        {/* 01: Work */}
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

        {/* 02: Media */}
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

        {/* 03: Experience */}
        <section
          id={expSec.id}
          className="wrap band"
          aria-labelledby={`heading-${expSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={expSec.timecode}
            title={expSec.title}
            italic={expSec.italic}
            note={expSec.note}
            headingId={`heading-${expSec.id}`}
          />

          <ExperienceTracks />
        </section>

        {/* 04: Stack */}
        <section
          id={stackSec.id}
          className="wrap band"
          aria-labelledby={`heading-${stackSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={stackSec.timecode}
            title={stackSec.title}
            italic={stackSec.italic}
            note={stackSec.note}
            headingId={`heading-${stackSec.id}`}
          />

          <StackList />
        </section>

        {/* 05: About */}
        <section
          id={aboutSec.id}
          className="wrap band"
          aria-labelledby={`heading-${aboutSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={aboutSec.timecode}
            title={aboutSec.title}
            italic={aboutSec.italic}
            note={aboutSec.note}
            headingId={`heading-${aboutSec.id}`}
          />

          <About />
        </section>

        {/* 06: Contact */}
        <section
          id={contactSec.id}
          className="wrap band"
          aria-labelledby={`heading-${contactSec.id}`}
          style={{
            paddingBlock: "clamp(72px, 10vw, 128px)",
            paddingBottom: "clamp(88px, 12vw, 160px)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <SectionHeader
            timecode={contactSec.timecode}
            title={contactSec.title}
            italic={contactSec.italic}
            note={contactSec.note}
            headingId={`heading-${contactSec.id}`}
          />

          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
