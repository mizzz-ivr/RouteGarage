import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("主要情報と安全注意を表示し、未実装routeへの操作要素を置かない", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "RouteGarage" })).toBeInTheDocument();
    expect(screen.getByText(/ドライブの計画・記録・愛車管理/)).toBeInTheDocument();
    expect(screen.getByText(/走行中は操作しないでください/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ドライブ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ガレージ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "振り返り" })).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });
});
