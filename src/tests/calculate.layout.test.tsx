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
      screen.getByTestId("sellTransferPrice");
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

    // 카테고리
    const category_charge_price_element =
      screen.getByPlaceholderText("카테고리");
    expect(category_charge_price_element).toBeInTheDocument();

    // 연동
    const link_charge_price_element = screen.getByPlaceholderText("연동");
    expect(link_charge_price_element).toBeInTheDocument();

    // 배송비
    const transfer_charge_price_element = screen.getByTestId(
      "transferChargePrice",
    );
    expect(transfer_charge_price_element).toBeInTheDocument();

    // 버튼들
    const smartstore_button_element = screen.getByText("스마트스토어");
    expect(smartstore_button_element).toBeInTheDocument();

    const coupang_button_element = screen.getByText("쿠팡");
    expect(coupang_button_element).toBeInTheDocument();

    const gmarket_button_element = screen.getByText("G마켓");
    expect(gmarket_button_element).toBeInTheDocument();

    const elevenst_button_element = screen.getByText("11번가");
    expect(elevenst_button_element).toBeInTheDocument();
  });

  it("exists tax_price tags", () => {
    render(<Form />);

    const tax_price_element = screen.getByPlaceholderText("부가세");
    expect(tax_price_element).toBeInTheDocument();

    const simple_taxer_element = screen.getByText("간이과세자");
    expect(simple_taxer_element).toBeInTheDocument();

    const general_taxer_element = screen.getByText("일반과세자");
    expect(general_taxer_element).toBeInTheDocument();
  });

  it("exists execute buttons tag", () => {
    render(<Form />);

    const calculate_element = screen.getByText("계산하기");
    expect(calculate_element).toBeInTheDocument();

    const product_add_element = screen.getByText("상품추가");
    expect(product_add_element).toBeInTheDocument();

    const initialize_element = screen.getByText("초기화");
    expect(initialize_element).toBeInTheDocument();
  });
});
