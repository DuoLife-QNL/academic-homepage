type Link = {
  label: string;
  href: string;
};

type Publication = {
  title: string;
  authors: React.ReactNode;
  venue: string;
  year: string;
  ccf: "A" | "B" | "C" | "Not Listed" | "N/A";
  note?: string;
  links: Link[];
};

const mlSystems: Publication[] = [
  {
    title:
      "JITPrune: An Efficient Online Feature Pruning Framework for Embedding-based DLRM Training",
    authors: (
      <>
        <strong>Hongzheng Li</strong>, Yucheng Wu, Junjie Zhai, Anan Liu,
        Yuekui Yang, Yingxia Shao
      </>
    ),
    venue: "IEEE International Conference on Data Engineering (ICDE)",
    year: "2026",
    ccf: "A",
    note: "Industry and Applications Track · Oral",
    links: [
      {
        label: "Conference",
        href: "https://icde2026.github.io/program_details.html",
      },
    ],
  },
  {
    title:
      "Efficient Cross-Architecture Knowledge Transfer for Large-Scale Online User Response Prediction",
    authors: (
      <>
        Yucheng Wu, Yuekui Yang, <strong>Hongzheng Li</strong>, Anan Liu, Jian
        Xiao, Junjie Zhai, Huan Yu, Shaoping Ma, Leye Wang
      </>
    ),
    venue: "arXiv preprint",
    year: "2026",
    ccf: "N/A",
    note: "CrossAdapt",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2602.01775",
      },
    ],
  },
];

const graphSystems: Publication[] = [
  {
    title:
      "Efficient Distributed Mini-batch GNN Training with Decentralized Batch Processing",
    authors: (
      <>
        <strong>Hongzheng Li</strong>, Siyu Lou, Yingxia Shao, Yawen Li,
        Lixing Zhang, Hongbo Yin, Wentao Zhang
      </>
    ),
    venue: "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
    year: "2026",
    ccf: "A",
    note: "Under major revision · Hongzheng Li and Siyu Lou contributed equally",
    links: [],
  },
  {
    title:
      "COIN: Graph Contrastive Learning with Orthogonal Continuous Augmentation and Information Balance",
    authors: (
      <>
        Zhenyu Lin, <strong>Hongzheng Li</strong>, Guanhua Ye, Yawen Li, Meiyu
        Liang, Yingxia Shao
      </>
    ),
    venue: "Data Science and Engineering (DSE)",
    year: "2026",
    ccf: "C",
    links: [
      {
        label: "Paper",
        href: "https://link.springer.com/article/10.1007/s41019-025-00333-7",
      },
    ],
  },
  {
    title: "Distributed Graph Neural Network Training: A Survey",
    authors: (
      <>
        Yingxia Shao, <strong>Hongzheng Li</strong>, Xizhi Gu, Hongbo Yin,
        Yawen Li, Xupeng Miao, Wentao Zhang, Bin Cui, Lei Chen
      </>
    ),
    venue: "ACM Computing Surveys (CSUR), 56(8): 1–39",
    year: "2024",
    ccf: "Not Listed",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1145/3648358",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2211.00216",
      },
    ],
  },
  {
    title:
      "SpanGNN: Towards Memory-Efficient Graph Neural Networks via Spanning Subgraph Training",
    authors: (
      <>
        Xizhi Gu, <strong>Hongzheng Li</strong>, Shihong Gao, Xinyan Zhang, Lei
        Chen, Yingxia Shao
      </>
    ),
    venue:
      "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD)",
    year: "2024",
    ccf: "B",
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2406.04938",
      },
      {
        label: "DOI",
        href: "https://doi.org/10.1007/978-3-031-70352-2_15",
      },
    ],
  },
  {
    title:
      "An I/O-Efficient Disk-based Graph System for Scalable Second-Order Random Walk of Large Graphs",
    authors: (
      <>
        <strong>Hongzheng Li</strong>, Yingxia Shao, Junping Du, Bin Cui, Lei
        Chen
      </>
    ),
    venue: "Proceedings of the VLDB Endowment (PVLDB), 15(8): 1619–1631",
    year: "2022",
    ccf: "A",
    note: "GraSorw · VLDB 2022",
    links: [
      {
        label: "Paper",
        href: "https://www.vldb.org/pvldb/vol15/p1619-shao.pdf",
      },
      {
        label: "Code",
        href: "https://github.com/DuoLife-QNL/GraSorw",
      },
    ],
  },
];

const otherWorks: Publication[] = [
  {
    title: "An Undergraduate Course for FOSS and with FOSS",
    authors: (
      <>
        Xiao Liang, Weiying Hou, <strong>Hongzheng Li</strong>, Hongliang Liang
      </>
    ),
    venue:
      "5th International Conference on Education and E-Learning (ICEEL)",
    year: "2021",
    ccf: "Not Listed",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.1145/3502434.3502465",
      },
    ],
  },
];

function CcfBadge({ rank }: { rank: Publication["ccf"] }) {
  const label =
    rank === "N/A"
      ? "CCF N/A"
      : rank === "Not Listed"
        ? "CCF Not Listed"
        : `CCF-${rank}`;
  const className =
    rank === "N/A" ? "na" : rank.replaceAll(" ", "-").toLowerCase();

  return <span className={`ccf ccf-${className}`}>{label}</span>;
}

function PublicationGroup({
  title,
  items,
}: {
  title: string;
  items: Publication[];
}) {
  return (
    <section className="publication-group" aria-labelledby={title.replaceAll(" ", "-")}>
      <h3 id={title.replaceAll(" ", "-")}>{title}</h3>
      <ol>
        {items.map((publication) => (
          <li className="publication" key={publication.title}>
            <div className="publication-title-row">
              <a
                className="publication-title"
                href={publication.links[0]?.href}
                target={publication.links.length ? "_blank" : undefined}
                rel={publication.links.length ? "noreferrer" : undefined}
              >
                {publication.title}
              </a>
              <span className="year">{publication.year}</span>
            </div>
            <p className="authors">{publication.authors}</p>
            <p className="venue-line">
              <span>{publication.venue}</span>
              <CcfBadge rank={publication.ccf} />
            </p>
            {(publication.note || publication.links.length > 0) && (
              <p className="publication-meta">
                {publication.note && <span>{publication.note}</span>}
                {publication.links.length > 0 && (
                  <span className="paper-links">
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
                  </span>
                )}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <main className="page" id="top">
      <header className="profile">
        <div>
          <h1>
            Hongzheng Li <span>李鸿政</span>
          </h1>
          <p className="headline">
            Ph.D. Candidate · Beijing University of Posts and Telecommunications
          </p>
          <p>
            I am a Ph.D. candidate at BUPT and a member of the iDMG research
            group. My research lies at the intersection of{" "}
            <strong>machine learning and computer systems</strong>, with a
            focus on scalable training and inference.
          </p>
          <p>
            I work on large-scale recommendation systems, distributed graph
            neural network training, and efficient LLM/Mixture-of-Experts
            inference.
          </p>
          <nav className="profile-links" aria-label="Profile links">
            <a
              href="https://scholar.google.com/citations?user=SCeqeNUAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            <a
              href="https://github.com/DuoLife-QNL"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="#publications">Publications</a>
          </nav>
        </div>

        <aside className="identity" aria-label="At a glance">
          <div className="initials" aria-hidden="true">
            HL
          </div>
          <p>BUPT · iDMG</p>
          <p>Beijing, China</p>
          <p>ML Systems</p>
        </aside>
      </header>

      <section className="section research" id="research">
        <h2>Research</h2>
        <div className="research-grid">
          <p>
            <strong>ML Systems</strong>
            <span>Large-scale training, recommendation, embedding systems</span>
          </p>
          <p>
            <strong>Graph Learning</strong>
            <span>Distributed GNN training, graph systems, graph mining</span>
          </p>
          <p>
            <strong>LLM Systems</strong>
            <span>Efficient inference, Mixture-of-Experts, model optimization</span>
          </p>
        </div>
      </section>

      <section className="section" id="publications">
        <div className="section-heading">
          <h2>Publications</h2>
          <p>
            * My name is in bold. CCF ranks follow the 2022 recommended venue
            list; “Not Listed” means the venue is absent from that list.
          </p>
        </div>

        <PublicationGroup title="ML Systems & Recommendation" items={mlSystems} />
        <PublicationGroup title="Graph Learning & Systems" items={graphSystems} />
        <PublicationGroup title="Other Work" items={otherWorks} />
      </section>

      <section className="section two-column-section" id="experience">
        <div>
          <h2>Experience</h2>
          <article className="timeline-item">
            <span>2024–2026</span>
            <div>
              <strong>Research Intern, Tencent</strong>
              <p>Large-scale recommendation and embedding systems</p>
            </div>
          </article>
        </div>
        <div>
          <h2>Education</h2>
          <article className="timeline-item">
            <span>2023–Present</span>
            <div>
              <strong>Ph.D. in Computer Science, BUPT</strong>
              <p>iDMG research group</p>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <span>© 2026 Hongzheng Li</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
