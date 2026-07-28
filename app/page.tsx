const researchAreas = [
  {
    index: "01",
    title: "ML Systems",
    description:
      "Systems and infrastructure that make large-scale model training and inference efficient, reliable, and measurable.",
  },
  {
    index: "02",
    title: "Large-scale Recommendation",
    description:
      "Training systems for embedding-based recommendation models, with a focus on resource efficiency and production constraints.",
  },
  {
    index: "03",
    title: "Distributed GNN Training",
    description:
      "Communication-efficient, decentralized training systems for graph neural networks at billion-node scale.",
  },
  {
    index: "04",
    title: "Efficient LLM Inference",
    description:
      "Runtime and systems techniques for efficient LLM and Mixture-of-Experts inference.",
  },
];

const publications = [
  {
    year: "2026",
    venue: "IEEE ICDE",
    status: "Published",
    title:
      "JITPrune: An Efficient Online Feature Pruning Framework for Embedding-based DLRM Training",
    authors:
      "Hongzheng Li, Yucheng Wu, Junjie Zhai, Anan Liu, Yuekui Yang, Yingxia Shao",
    description:
      "An online feature-pruning framework that removes redundant embeddings during DLRM training without stalling the training pipeline.",
    note: "First author · Industry & Applications Track",
  },
  {
    year: "2026",
    venue: "IEEE TKDE",
    status: "Under revision",
    title:
      "Efficient Distributed Mini-batch GNN Training with Decentralized Batch Processing",
    authors: "DEGNN",
    description:
      "A decentralized mini-batch GNN training system that shifts remote data pulling into computation pushing, reducing communication at billion-node scale.",
    note: "Major revision",
  },
];

export default function Home() {
  return (
    <main>
      <aside className="rail" aria-label="Site identity">
        <a className="rail-mark" href="#top" aria-label="Back to top">
          HL
        </a>
        <span className="rail-text">ACADEMIC INDEX · 2026</span>
      </aside>

      <div className="site-shell" id="top">
        <header className="site-header">
          <a className="wordmark" href="#top">
            Hongzheng Li
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
          </nav>
          <a
            className="header-link"
            href="https://github.com/DuoLife-QNL"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            BUPT · iDMG
          </div>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Ph.D. Candidate · Computer Science</p>
              <h1 id="hero-title">
                Hongzheng
                <br />
                Li <span>李鸿政</span>
              </h1>
            </div>
            <div className="hero-statement">
              <p>
                I build <strong>ML systems for large-scale learning</strong>,
                spanning recommendation, distributed graph training, and
                efficient LLM inference.
              </p>
              <a href="#work">
                Selected work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-meta" aria-label="Research summary">
            <span>BASED IN BEIJING, CHINA</span>
            <span>TRAINING · INFERENCE · INFRASTRUCTURE</span>
            <span>UPDATED JUL 2026</span>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <p className="section-index">01 / RESEARCH</p>
            <h2>Systems questions,<br />grounded in real workloads.</h2>
          </div>
          <div className="research-list">
            {researchAreas.map((area) => (
              <article className="research-row" key={area.index}>
                <span>{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading work-heading">
            <p className="section-index">02 / SELECTED WORK</p>
            <h2>Research &amp; publications</h2>
            <p>
              Selected work on systems for large-scale learning. Publication
              status is shown explicitly.
            </p>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-meta">
                  <span>{publication.year}</span>
                  <span>{publication.venue}</span>
                  <span className="publication-status">
                    {publication.status}
                  </span>
                </div>
                <div className="publication-body">
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-description">
                    {publication.description}
                  </p>
                  <p className="publication-note">{publication.note}</p>
                </div>
                <span className="publication-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="section-index">03 / EXPERIENCE</p>
            <h2>Academic &amp; industry</h2>
          </div>
          <div className="timeline">
            <article>
              <p className="timeline-date">2023 — PRESENT</p>
              <div>
                <h3>Ph.D. Candidate</h3>
                <p>Beijing University of Posts and Telecommunications</p>
                <span>Computer Science · iDMG</span>
              </div>
            </article>
            <article>
              <p className="timeline-date">2024 — 2026</p>
              <div>
                <h3>Research Intern</h3>
                <p>Tencent</p>
                <span>Large-scale recommendation systems</span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="section-index">04 / CONTACT</p>
          <div>
            <h2 id="contact-title">Interested in systems that work at scale?</h2>
            <p>
              I am always happy to discuss ML systems, recommendation
              infrastructure, distributed training, and research ideas.
            </p>
          </div>
          <a
            href="https://github.com/DuoLife-QNL"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>

        <footer>
          <p>© 2026 Hongzheng Li</p>
          <p>Designed for clarity. Built for the open web.</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
