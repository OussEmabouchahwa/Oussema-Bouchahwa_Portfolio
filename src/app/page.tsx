import { Nav } from "@/components/Nav/Nav";
import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { sections } from "@/content/sections";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        {sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="wrap band"
            style={{
              paddingBlock: "clamp(72px, 10vw, 128px)",
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
            {sec.id === "work" && (
              <div style={{ maxWidth: "600px" }}>
                <MediaSlot media={projects[0].media} />
              </div>
            )}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
