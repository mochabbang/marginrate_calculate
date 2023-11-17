import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

test("heading context is '모두의 마진율 계산기'", () => {
  render(<Home />);

  const headElement = screen.getByText("모두의 마진율 계산기");

  expect(headElement).toBeInTheDocument();
});
