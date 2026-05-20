import { chromium } from "playwright-core";
import fs from "node:fs/promises";
import path from "node:path";

const qaDir = path.resolve("qa");
await fs.mkdir(qaDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true
});

const errors = [];
const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
desktop.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await desktop.goto("http://127.0.0.1:3000/en", { waitUntil: "domcontentloaded", timeout: 60000 });
const title = await desktop.title();
const h1 = await desktop.locator("h1").first().innerText();
await desktop.screenshot({ path: path.join(qaDir, "home-desktop.png"), fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 900 }, isMobile: true });
mobile.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`mobile: ${msg.text()}`);
});
await mobile.goto("http://127.0.0.1:3000/en", { waitUntil: "domcontentloaded", timeout: 60000 });
await mobile.screenshot({ path: path.join(qaDir, "home-mobile.png"), fullPage: true });
await mobile.goto("http://127.0.0.1:3000/en/waiting-list", { waitUntil: "domcontentloaded", timeout: 60000 });
await mobile.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => undefined);
await mobile.waitForTimeout(1200);
await mobile.locator('button:has-text("Request Diagnostic Access")').scrollIntoViewIfNeeded();
await mobile.locator('button:has-text("Request Diagnostic Access")').click({ force: true });
await mobile.waitForTimeout(400);
const submitted = await mobile.locator("text=Access Request Captured").count();
await mobile.screenshot({ path: path.join(qaDir, "waiting-list-mobile-submitted.png"), fullPage: true });

await browser.close();

console.log(
  JSON.stringify(
    {
      title,
      h1,
      errors,
      submitted,
      screenshots: [
        path.join(qaDir, "home-desktop.png"),
        path.join(qaDir, "home-mobile.png"),
        path.join(qaDir, "waiting-list-mobile-submitted.png")
      ]
    },
    null,
    2
  )
);
