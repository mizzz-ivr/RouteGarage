import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NotFound from "./not-found";

vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("NotFound", () => {
  it("404表示とトップへの導線を表示する", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { name: "ページが見つかりません" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "トップへ戻る" })).toHaveAttribute("href", "/");
  });
});
