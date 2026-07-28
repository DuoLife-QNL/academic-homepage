const publications = [
  {
    year: "2026",
    title:
      "JITPrune: An Efficient Online Feature Pruning Framework for Embedding-based DLRM Training",
    authors: (
      <>
        <strong>Hongzheng Li</strong>, Yucheng Wu, Junjie Zhai, Anan Liu,
        Yuekui Yang, Yingxia Shao
      </>
    ),
    venue: "IEEE ICDE 2026, Industry and Applications Track",
    links: [
      {
        label: "conference",
        href: "https://icde2026.github.io/program_details.html",
      },
    ],
  },
  {
    year: "2026",
    title:
      "Efficient Cross-Architecture Knowledge Transfer for Large-Scale Online User Response Prediction",
    authors: (
      <>
        Yucheng Wu, Yuekui Yang, <strong>Hongzheng Li</strong>, Anan Liu, Jian
        Xiao, Junjie Zhai, Huan Yu, Shaoping Ma, Leye Wang
      </>
    ),
    venue: "arXiv preprint",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.01775",
      },
    ],
  },
  {
    year: "2026",
    title:
      "Efficient Distributed Mini-batch GNN Training with Decentralized Batch Processing",
    authors: (
      <>
        <strong>Hongzheng Li</strong> et al.
      </>
    ),
    venue: "Under revision at IEEE TKDE",
    links: [],
  },
];

export default function Home() {
  return (
    <main className="page" id="top">
      <header className="site-header">
        <a className="site-name" href="#top">
          Hongzheng Li
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <section className="intro" id="about">
        <div className="intro-main">
          <h1>
            Hongzheng Li <span>李鸿政</span>
          </h1>
          <p className="role">
            Ph.D. Candidate in Computer Science
            <br />
            Beijing University of Posts and Telecommunications
          </p>

          <p>
            I am a Ph.D. candidate at the School of Computer Science, Beijing
            University of Posts and Telecommunications (BUPT), working with the
            iDMG research group.
          </p>
          <p>
            My research focuses on <strong>ML systems for large-scale learning</strong>.
            I am particularly interested in large-scale recommendation systems,
            distributed GNN training, and efficient LLM and Mixture-of-Experts
            inference.
          </p>

          <div className="profile-links" aria-label="Profile links">
            <a
              href="https://github.com/DuoLife-QNL"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span aria-hidden="true">/</span>
            <a href="#publications">Publications</a>
          </div>
        </div>

        <aside className="quick-info" aria-label="Quick information">
          <div className="initials" aria-hidden="true">
            HL
          </div>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>Beijing, China</dd>
            </div>
            <div>
              <dt>Affiliation</dt>
              <dd>BUPT · iDMG</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>ML Systems</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="content-section" id="research">
        <h2>Research Interests</h2>
        <ul className="interest-list">
          <li>ML systems and infrastructure for large-scale model training</li>
          <li>Large-scale recommendation and embedding systems</li>
          <li>Communication-efficient distributed GNN training</li>
          <li>Efficient LLM and Mixture-of-Experts inference</li>
        </ul>
      </section>

      <section className="content-section" id="publications">
        <h2>Selected Publications</h2>
        <p className="section-note">
          My name is shown in bold. Publication status is listed explicitly.
        </p>

        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication" key={publication.title}>
              <span className="publication-year">{publication.year}</span>
              <div>
                <h3>{publication.title}</h3>
                <p className="authors">{publication.authors}</p>
                <p className="venue">{publication.venue}</p>
                {publication.links.length > 0 && (
                  <p className="paper-links">
                    {publication.links.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        key={link.label}
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          <article>
            <p className="experience-time">2023 — present</p>
            <div>
              <h3>Ph.D. Candidate, BUPT</h3>
              <p>Computer Science · iDMG research group</p>
            </div>
          </article>
          <article>
            <p className="experience-time">2024 — 2026</p>
            <div>
              <h3>Research Intern, Tencent</h3>
              <p>Large-scale recommendation systems</p>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <p>© 2026 Hongzheng Li</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
