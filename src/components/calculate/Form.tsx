import { FiPlus } from "react-icons/fi";

const Form = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <label htmlFor="productnm">상품명</label>
        <input
          type="text"
          id="productnm"
          name="productnm"
          placeholder="상품을 입력하세요."
          style={{ margin: "0 10px" }}
        />
        <p>Display Tag</p>
      </div>
      <div style={{ display: "flex" }}>
        <span>판매가</span>
        <input
          type="number"
          id="sellprice"
          name="sellprice"
          min={0}
          placeholder="상품 판매 금액"
          style={{ margin: "0 10px" }}
        />
        <input
          type="number"
          id="selltransferprice"
          name="selltransferprice"
          min={0}
          placeholder="배송비"
          style={{ margin: "0 10px" }}
        />
        <p>Display Tag</p>
      </div>
      <div style={{ display: "flex" }}>
        <span>매입가</span>
        <input
          type="number"
          id="buyprice"
          name="buyprice"
          min={0}
          placeholder="상품 매입 금액"
          style={{ margin: "0 10px" }}
        />
        <input
          type="number"
          id="buytransferprice"
          name="buytransferprice"
          min={0}
          placeholder="매입 배송비"
          style={{ margin: "0 10px" }}
        />
        <p>Display Tag</p>
      </div>
      <div style={{ display: "flex" }}>
        <span>기타비용</span>
        <input
          type="textbox"
          id="etctarget"
          name="etctarget"
          placeholder="기타 비용 대상"
          style={{ margin: "0 10px" }}
        />
        <input
          type="number"
          id="etcprice"
          name="etcprice"
          min={0}
          placeholder="비용"
          style={{ margin: "0 10px" }}
        />
        <button>+</button>
        <button disabled>삭제</button>
        <p>Display Tag</p>
      </div>
      <div style={{ display: "flex" }}>
        <span>수수료</span>
        <input
          type="number"
          min={0}
          defaultValue={0}
          id="categorycompany"
          name="categorycompany"
          placeholder="카테고리 수수료"
        />
      </div>
    </>
  );
};

export default Form;
