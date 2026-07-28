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
  assert.match(html, /Publications/);
  assert.match(html, /JITPrune/);
  assert.match(html, /Cross-Architecture Knowledge Transfer/);
  assert.match(html, /Efficient Distributed Mini-batch GNN Training/);
  assert.match(html, /Distributed Graph Neural Network Training: A Survey/);
  assert.match(html, /SpanGNN/);
  assert.match(html, /GraSorw/);
  assert.match(html, /COIN: Graph Contrastive Learning/);
  assert.doesNotMatch(html, /An Undergraduate Course for FOSS/);
  assert.match(html, /JD TGT/);
  assert.match(html, /2026 ~ Present/);
  assert.match(html, /CCF-A/);
  assert.match(html, /CCF-B/);
  assert.match(html, /CCF-C/);
  assert.match(html, /CCF Not Listed/);
  assert.match(html, /Beijing University of Posts and Telecommunications/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
