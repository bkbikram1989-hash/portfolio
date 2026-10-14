import { profile } from "@/data/profile";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { ArrowIcon, FacebookIcon, MailIcon, TikTokIcon } from "@/components/Icons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  tone: string;
  icon?: React.ReactNode;
  external?: boolean;
};

const handle = (url: string) => url.split("/").filter(Boolean).pop() ?? url;

export default function Home() {
  const { contact } = profile;
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
  const [topDegree, ...otherEducation] = profile.education;

  const contactLinks = [
    ...contact.emails.map((e) => ({
      label: "Email", value: e, href: `mailto:${e}`, tone: "mail", icon: <MailIcon size={20} />,
    })),
    contact.facebook && {
      label: "Facebook", value: handle(contact.facebook), href: contact.facebook,
      tone: "facebook", icon: <FacebookIcon size={20} />, external: true,
    },
    contact.tiktok && {
      label: "TikTok", value: handle(contact.tiktok), href: contact.tiktok,
      tone: "tiktok", icon: <TikTokIcon size={19} />, external: true,
    },
    {
      label: "Lions Club Facebook page", value: profile.lionsPage.name, href: profile.lionsPage.url,
      tone: "lions", external: true,
      icon: (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${basePath}${profile.lionsPage.logo}`} alt="" width={26} height={26} />
      ),
    },
    contact.phone && { label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, tone: "mail" },
    contact.linkedin && {
      label: "LinkedIn", value: "View profile", href: contact.linkedin, tone: "mail", external: true,
    },
  ].filter(Boolean) as ContactLink[];

  const facts = [
    { label: "Born", value: profile.dateOfBirth },
    { label: "Languages", value: profile.languages.join(", ") },
    { label: "Address", value: profile.location },
  ].filter((f) => f.value);

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="blob blob-blue" />
        <span className="blob blob-gold" />
        <span className="blob blob-rose" />
        <span className="blob blob-sky" />
      </div>

      <Nav initials={initials} facebook={contact.facebook} tiktok={contact.tiktok} />

      <header id="home" className="hero container">
        <div className="bento">
          <div className="glass tile tile-intro">
            <p className="kicker">Namaste, I&rsquo;m</p>
            <h1>
              {profile.firstName}
              <em>{profile.lastName}</em>
            </h1>
            <p className="lede">{profile.bio}</p>
            <div className="intro-foot">
              <ul className="roles">
                <li className="roles-label">
                  <span className="pulse" /> Currently
                </li>
                {profile.currentRoles.map((r) => (
                  <li key={r.title} className="role">
                    <span className="role-title">
                      {r.title}
                      {r.period && <span className="role-period">{r.period}</span>}
                    </span>
                    <span className="role-org">{r.org}</span>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <a href="#career" className="btn btn-dark">View my journey</a>
                {contact.facebook && (
                  <a href={contact.facebook} target="_blank" rel="noreferrer" className="btn btn-glass">
                    <FacebookIcon size={16} /> Facebook
                  </a>
                )}
              </div>
            </div>
          </div>

          <figure className="glass tile tile-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${basePath}${profile.photo}`} alt={`Portrait of ${profile.name}`} />
            <figcaption className="photo-caption">
              <span>{profile.organization}, {profile.organizationAddress}</span>
              <span>{profile.organizationNote}</span>
            </figcaption>
          </figure>

          {profile.highlights.map((h, i) => (
            <div key={h.label} className={`glass tile tile-stat${i === 1 ? " tile-ink" : ""}`}>
              <span className="tile-label">{h.label}</span>
              <strong>{h.value}</strong>
              <span className="tile-text">{h.text}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <Section id="about" index="01" label="About" title={<>Records, Numbers, <em>and Service.</em></>}>
          <div className="about-grid">
            <div className="glass panel prose">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="glass panel facts">
              <dl>
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="facts-motto">
                <span>&ldquo;</span>We Serve.
                <small>Motto of Lions Clubs International</small>
              </p>
            </aside>
          </div>
        </Section>

        <Section id="career" index="02" label="Career" title={<>From the classroom <em>to public service.</em></>}>
          <div className="two-col">
            <div className="glass panel">
              <h3 className="panel-title">Government health service</h3>
              <Timeline items={profile.government} />
            </div>
            <div className="glass panel">
              <h3 className="panel-title">Teaching</h3>
              <Timeline items={profile.teaching} />
            </div>
          </div>
        </Section>

        <Section id="education" index="03" label="Education" title={<>From Dhading <em>to Tribhuvan University.</em></>}>
          <div className="edu-grid">
            <article className="glass panel edu-feature">
              <span className="tile-label">Highest qualification</span>
              <h3>{topDegree.title}</h3>
              <p>{topDegree.org}</p>
              <span className="edu-period">{topDegree.period}</span>
            </article>
            <div className="glass panel">
              <Timeline items={otherEducation} />
            </div>
          </div>
        </Section>

        <Section id="service" index="04" label="Social Service" title={<>A life <em>of social service.</em></>}>
          <div className="two-col">
            <div className="glass panel">
              <h3 className="panel-title">Lions Clubs International</h3>
              <Timeline items={profile.lions} />
            </div>
            <div className="stack">
              <div className="glass panel">
                <h3 className="panel-title">Red Cross</h3>
                <Timeline items={profile.redCross} />
              </div>
              <a
                href={profile.lionsPage.url}
                target="_blank"
                rel="noreferrer"
                className="glass panel lions-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}${profile.lionsPage.logo}`} alt="Lions Clubs International logo" />
                <span className="lions-card-text">
                  <small>Facebook page</small>
                  <strong>{profile.lionsPage.name}</strong>
                  <span className="lions-card-cta">
                    <FacebookIcon size={14} /> Follow on Facebook <ArrowIcon size={14} />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Section>

        <Section id="skills" index="05" label="Skills & Interests" title={<>What I bring <em>to the table.</em></>}>
          <ol className="glass panel skills">
            {profile.skills.map((s, i) => (
              <li key={s}>
                <span className="skill-no">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="two-col two-col-tight">
            <div className="glass panel">
              <h3 className="panel-title">Languages</h3>
              <ul className="chips">
                {profile.languages.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
            <div className="glass panel">
              <h3 className="panel-title">Interests</h3>
              <ul className="chips">
                {profile.interests.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" label="Contact" title={<>Let&rsquo;s stay <em>in touch.</em></>}>
          <div className="glass panel contact">
            <p className="contact-lead">
              Write to me by email or find me on Facebook and TikTok. I&rsquo;m always glad to hear
              about community service projects, health records work, or simply to say hello.
            </p>
            <div className="contact-links">
              {contactLinks.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="contact-link"
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {c.icon && <span className={`contact-icon icon-${c.tone}`}>{c.icon}</span>}
                  <span className="contact-text">
                    <small>{c.label}</small>
                    {c.value}
                  </span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer container">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}
