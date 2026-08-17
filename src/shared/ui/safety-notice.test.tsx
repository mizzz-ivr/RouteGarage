import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SafetyNotice } from "./safety-notice";

describe("SafetyNotice", () => {
  it("走行中操作禁止の注意を常時表示する", () => {
    render(<SafetyNotice />);

    expect(screen.getByRole("heading", { name: "安全に使うために" })).toBeInTheDocument();
    expect(screen.getByText(/走行中は操作しないでください/)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
