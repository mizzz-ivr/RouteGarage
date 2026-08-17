import { expect, test } from "@playwright/test";

const expectedSecurityHeaders = (headers: Record<string, string>) => {
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["x-frame-options"]).toBe("DENY");

  const permissions = headers["permissions-policy"] ?? "";
  expect(permissions).toContain("geolocation=()");
  expect(permissions).toContain("camera=()");
  expect(permissions).toContain("microphone=()");
};

test("トップページと安全注意を表示する", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1, name: "RouteGarage" })).toBeVisible();
  await expect(page.getByText(/走行中は操作しないでください/)).toBeVisible();
  expect(consoleErrors).toEqual([]);
});

test("存在しないページからトップへ戻れる", async ({ page }) => {
  const response = await page.goto("/__e2e-not-found__");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "ページが見つかりません" })).toBeVisible();
  await page.getByRole("link", { name: "トップへ戻る" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("rootと404の両方でセキュリティヘッダーを返す", async ({ request }) => {
  const rootResponse = await request.get("/");
  const notFoundResponse = await request.get("/__e2e-not-found__");

  expectedSecurityHeaders(rootResponse.headers());
  expectedSecurityHeaders(notFoundResponse.headers());
});

test("320px幅でも主要コンテンツが欠落せず横スクロールしない", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );

  expect(hasOverflow).toBe(false);
  await expect(page.getByRole("heading", { level: 1, name: "RouteGarage" })).toBeVisible();
  await expect(page.getByText(/走行中は操作しないでください/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "ドライブ" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ガレージ" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "振り返り" })).toBeVisible();
});
