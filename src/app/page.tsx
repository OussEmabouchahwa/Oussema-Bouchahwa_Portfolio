import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { profile } from "@/content/profile";
import { sections } from "@/content/sections";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="wrap" style={{ paddingBlock: "80px", minHeight: "60vh" }}>
          <h1 style={{ fontSize: "var(--h1)", lineHeight: 0.94, letterSpacing: "-0.045em" }}>
            {profile.hero.h1Main}{" "}
            <em
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--tape)",
              }}
            >
              {profile.hero.h1Italic}
            </em>
          </h1>
          <p style={{ marginTop: "24px", color: "var(--fg-2)", fontSize: "var(--step-1)" }}>
            {profile.hero.lede}
          </p>
        </section>

        {sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="wrap"
            style={{
              paddingBlock: "80px",
              minHeight: "40vh",
              borderTop: "1px solid var(--line)",
            }}
          >
            <span className="tc" style={{ color: "var(--tape)", display: "block", marginBottom: "12px" }}>
              {sec.timecode}
            </span>
            <h2 style={{ fontSize: "var(--h2)", letterSpacing: "-0.04em" }}>
              {sec.title}{" "}
              <em
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--tape)",
                }}
              >
                {sec.italic}
              </em>
            </h2>
            {sec.id === "work" && (
              <div style={{ marginTop: "32px", maxWidth: "600px" }}>
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
