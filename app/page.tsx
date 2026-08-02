import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";

type Link = {
  label: string;
  href: string;
};

type Publication = {
  title: string;
  authors: React.ReactNode;
  venue: string;
  ccf?: "A" | "B" | "C";
  jcr?: "Q1";
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
    venue: "ICDE 2026 Industry and Applications",
    ccf: "A",
    note: "Oral",
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
    venue: "In preprint",
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
        <strong>Hongzheng Li</strong>
        <sup>#</sup>, Siyu Lou<sup>#</sup>, Yingxia Shao*, Yawen Li, Lixing
        Zhang, Hongbo Yin, Wentao Zhang
      </>
    ),
    venue: "IEEE TKDE, accepted (2026)",
    ccf: "A",
    note: "DEGNN",
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
    venue: "Data Science and Engineering (2026)",
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
    venue: "ACM Computing Surveys 56(8), 1–39 (2024)",
    jcr: "Q1",
    links: [
      {
        label: "Paper",
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
    venue: "ECML-PKDD 2024",
    ccf: "B",
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1007/978-3-031-70352-2_15",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2406.04938",
      },
    ],
  },
  {
    title:
      "An I/O-Efficient Disk-based Graph System for Scalable Second-Order Random Walk of Large Graphs",
    authors: (
      <>
        <strong>Hongzheng Li</strong>, Yingxia Shao*, Junping Du, Bin Cui, Lei
        Chen
      </>
    ),
    venue: "PVLDB 15(8), 1619–1631 · VLDB 2022",
    ccf: "A",
    note: "GraSorw",
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

function PublicationGroup({
  title,
  items,
}: {
  title: string;
  items: Publication[];
}) {
  return (
    <section className="publication-group">
      <h3>{title}</h3>
      <ul>
        {items.map((publication) => (
          <li key={publication.title}>
            <p className="paper-title">{publication.title}</p>
            <p className="authors">{publication.authors}</p>
            <p className="venue">
              {publication.ccf && (
                <span className="ccf">{`[CCF-${publication.ccf}]`}</span>
              )}
              {publication.jcr && (
                <span className="ccf">{`[JCR ${publication.jcr}]`}</span>
              )}{" "}
              <em>{publication.venue}</em>
              {publication.note && <span> · {publication.note}</span>}
            </p>
            {publication.links.length > 0 && (
              <p className="paper-links">
                {publication.links.map((link, index) => (
                  <span key={link.label}>
                    {index > 0 && <span className="separator"> | </span>}
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <nav className="topbar">
        <a href="#about-me">Homepage</a>
      </nav>

      <main className="layout" id="about-me">
        <aside className="sidebar">
          <div className="portrait" aria-hidden="true">
            HL
          </div>
          <h1>Hongzheng Li</h1>
          <p className="chinese-name">李鸿政</p>
          <p className="role">Ph.D. Student @ BUPT</p>
          <p className="welcome">Welcome to my homepage!</p>
          <ul className="contact-list">
            <li>
              <FaLocationDot className="contact-icon location-icon" aria-hidden="true" />
              <span>Beijing, China</span>
            </li>
            <li>
              <MdEmail className="contact-icon email-icon" aria-hidden="true" />
              <a href="mailto:Ethan_Lee@bupt.edu.cn">Ethan_Lee@bupt.edu.cn</a>
            </li>
            <li>
              <FaGithub className="contact-icon github-icon" aria-hidden="true" />
              <a
                href="https://github.com/DuoLife-QNL"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <SiGooglescholar
                className="contact-icon scholar-icon"
                aria-hidden="true"
              />
              <a
                href="https://scholar.google.com/citations?user=SCeqeNUAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
          </ul>
        </aside>

        <article className="content">
          <section className="bio">
            <p>
              Currently, I am a Ph.D. student in the School of Computer Science,
              Beijing University of Posts and Telecommunications (BUPT), and a
              member of the iDMG research group, supervised by Prof.{" "}
              <a
                href="https://shaoyx.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Yingxia Shao
              </a>
              .
            </p>
            <p>
              My research focuses on <strong>ML systems</strong>, with an
              emphasis on large-scale recommendation systems, distributed graph
              neural network training, and efficient LLM training.
            </p>
          </section>

          <section className="major-section" id="publications">
            <h2>📝 Publications</h2>
            <PublicationGroup
              title="ML Systems & Recommender Systems"
              items={mlSystems}
            />
            <PublicationGroup
              title="Graph Learning & Systems"
              items={graphSystems}
            />
            <p className="author-note">
              (* corresponding authors, <sup>#</sup> co-first authors; my name is
              in bold. CCF ranks follow the CCF 2026 recommended list.)
            </p>
          </section>

          <section className="major-section" id="internships">
            <h2>💻 Internships</h2>
            <ul className="plain-list">
              <li>Research Intern, JD TGT, 2026 ~ Present.</li>
              <li>
                Research Intern, Tencent, 2024 ~ 2026. Large-scale
                recommendation and embedding systems.
              </li>
            </ul>
          </section>

          <section className="major-section" id="education">
            <h2>📖 Education</h2>
            <ul className="plain-list">
              <li>
                2023 ~ Present, Ph.D. Program in Computer Science and
                Technology, Beijing University of Posts and Telecommunications
                (BUPT).
              </li>
              <li>
                2021 ~ 2023, Master&apos;s Program in Computer Science and
                Technology, BUPT. Transferred to the Ph.D. program in 2023.
              </li>
              <li>
                2017 ~ 2021, B.E. in Computer Science and Technology, BUPT.
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
