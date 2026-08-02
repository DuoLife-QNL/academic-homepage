import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the dense one-page academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hongzheng Li · Homepage<\/title>/i);
  assert.match(html, /Hongzheng Li/);
  assert.match(html, /李鸿政/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /efficient LLM training/);
  assert.doesNotMatch(html, /Mixture-of-Experts inference|efficient LLM inference/);
  assert.match(html, /href="mailto:Ethan_Lee@bupt\.edu\.cn">Email<\/a>/);
  assert.doesNotMatch(html, />Ethan_Lee@bupt\.edu\.cn<\/a>/);
  assert.match(html, /Yingxia Shao/);
  assert.match(html, /shaoyx\.github\.io/);
  assert.match(html, /Publications/);
  assert.match(html, /JITPrune/);
  assert.match(html, /Cross-Architecture Knowledge Transfer/);
  assert.match(html, /Efficient Distributed Mini-batch GNN Training/);
  assert.match(html, /IEEE TKDE, accepted \(2026\)/);
  assert.doesNotMatch(html, /DEGNN/);
  assert.doesNotMatch(html, /under major revision/);
  assert.match(html, /Distributed Graph Neural Network Training: A Survey/);
  assert.match(html, /SpanGNN/);
  assert.match(html, /PVLDB 15\(8\) · VLDB 2022/);
  assert.doesNotMatch(html, /COIN: Graph Contrastive Learning/);
  assert.doesNotMatch(html, /An Undergraduate Course for FOSS/);
  assert.match(html, /JD Tech Genius Team \(TGT\)/);
  assert.match(html, /Tencent \(TEG\/CDG\), 2024 ~ 2025/);
  assert.match(html, /Tencent Rhino-Bird Elite Training Program/);
  assert.doesNotMatch(html, /Large-scale recommendation and embedding systems/);
  assert.doesNotMatch(html, /Tencent, 2024 ~ 2026/);
  assert.match(html, /2026 ~ Present/);
  assert.match(html, /2021 ~ 2023/);
  assert.match(html, /2017 ~ 2021/);
  assert.match(html, /Transferred to the Ph\.D\. program in 2023/);
  assert.match(html, /CCF-A/);
  assert.match(html, /CCF-B/);
  assert.doesNotMatch(html, /CCF-C/);
  assert.match(html, /JCR Q1/);
  assert.doesNotMatch(html, /CCF Not Listed/);
  assert.match(html, /CCF 2026 recommended list/);
  assert.doesNotMatch(html, /CCF 2022 recommended list/);
  assert.match(html, /Beijing University of Posts and Telecommunications/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
