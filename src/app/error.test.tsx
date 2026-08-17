import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ErrorPage from "./error";

describe("ErrorPage", () => {
  it("内部詳細を露出せず再試行できる", () => {
    const reset = vi.fn();
    render(<ErrorPage reset={reset} />);

    expect(screen.getByRole("heading", { name: "画面を表示できませんでした" })).toBeInTheDocument();
    expect(screen.queryByText(/stack|trace|exception/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "再試行する" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
