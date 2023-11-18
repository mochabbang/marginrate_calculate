import Home from "@/app/page";
import Form from "@/components/calculate/Form";
import { render, screen } from "@testing-library/react";

test("heading context is '모두의 마진율 계산기'", () => {
  render(<Home />);

  const headElement = screen.getByText("모두의 마진율 계산기");

  expect(headElement).toBeInTheDocument();
});

describe("margin_calculate make form", () => {
  // 상품명
  it("exists product input tag", () => {
    render(<Form />);

    // input tag
    const product_input_element = screen.getByRole("textbox", {
      name: "상품명",
    });

    expect(product_input_element).toBeInTheDocument();
  });

  // 판매가
  it("exists sell_price tag", () => {
    render(<Form />);

    const sell_price_input_element =
      screen.getByPlaceholderText("상품 판매 금액");

    expect(sell_price_input_element).toBeInTheDocument();

    const sell_transfer_price_input_element =
      screen.getByPlaceholderText("배송비");
    expect(sell_transfer_price_input_element).toBeInTheDocument();
  });

  // 매입가
  it("exists buy_price tag", () => {
    render(<Form />);

    const buy_price_input_element =
      screen.getByPlaceholderText("상품 매입 금액");

    expect(buy_price_input_element).toBeInTheDocument();

    const buy_transfer_price_input_element =
      screen.getByPlaceholderText("매입 배송비");
    expect(buy_transfer_price_input_element).toBeInTheDocument();
  });

  // 기타 비용
  it("exists etc_price tag", () => {
    render(<Form />);

    const etc_target_input_element =
      screen.getByPlaceholderText("기타 비용 대상");

    expect(etc_target_input_element).toBeInTheDocument();

    const etc_price_input_element = screen.getByPlaceholderText("비용");
    expect(etc_price_input_element).toBeInTheDocument();

    // 추가, 삭제버튼
    const add_button = screen.getByRole("button", {
      name: "+",
    });

    expect(add_button).toBeInTheDocument();

    const del_button = screen.getByRole("button", {
      name: "삭제",
    });

    expect(del_button).toBeDisabled();
  });

  // 수수료
  it("exists charge_price tag", () => {
    render(<Form />);

    const category_company_element =
      screen.getByPlaceholderText("카테고리 수수료");
    expect(category_company_element).toBeInTheDocument();
  });
});
