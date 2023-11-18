import styles from "@/app/page.module.css";

const Form = () => {
  return (
    <>
      <div className={styles.form_container}>
        <label>상품명</label>
        <input
          type="text"
          id="productnm"
          name="productnm"
          placeholder="상품을 입력하세요."
          className={styles.form_input_full}
        />
        <p>Display Tag</p>
      </div>
      <div className={styles.form_container}>
        <label>판매가</label>
        <input
          type="number"
          id="sellprice"
          name="sellprice"
          min={0}
          placeholder="상품 판매 금액"
          className={styles.form_input_mid}
        />
        <input
          type="number"
          id="sellTransferPrice"
          name="sellTransferPrice"
          min={0}
          placeholder="배송비"
          className={styles.form_input_mid}
          data-testid="sellTransferPrice"
        />
        <p>Display Tag</p>
      </div>
      <div className={styles.form_container}>
        <label>매입가</label>
        <input
          type="number"
          id="buyPrice"
          name="buyPrice"
          min={0}
          placeholder="상품 매입 금액"
          className={styles.form_input_mid}
        />
        <input
          type="number"
          id="buyTransferPrice"
          name="buyTransferPrice"
          min={0}
          placeholder="매입 배송비"
          className={styles.form_input_mid}
        />
        <p>Display Tag</p>
      </div>
      <div className={styles.form_container}>
        <label>기타비용</label>
        <input
          type="textbox"
          id="etcTarget"
          name="etcTarget"
          placeholder="기타 비용 대상"
          className={styles.form_input_mid}
        />
        <input
          type="number"
          id="etcPrice"
          name="etcPrice"
          min={0}
          placeholder="비용"
          className={styles.form_input_mid}
        />
        <button>+</button>
        <button disabled>삭제</button>
        <p>Display Tag</p>
      </div>
      <div className={styles.form_container} style={{ display: "grid" }}>
        <div>
          <label>수수료</label>
          <input
            type="number"
            min={0}
            id="categoryChargePrice"
            name="categorychargeprice"
            placeholder="카테고리"
            className={styles.form_input_mid}
          />
          <input
            type="number"
            min={0}
            id="linkChargePrice"
            name="linkChargePrice"
            placeholder="연동"
            className={styles.form_input_mid}
          />
          <input
            type="number"
            min={0}
            id="transferChargePrice"
            name="transferChargePrice"
            placeholder="배송비"
            className={styles.form_input_mid}
            data-testid="transferChargePrice"
          />
        </div>
        <div>
          <button>스마트스토어</button>
          <button>쿠팡</button>
          <button>G마켓</button>
          <button>11번가</button>
        </div>
        <div>
          <p>Display Tag</p>
        </div>
      </div>
      <div className={styles.form_container}>
        <div>
          <label>부가세</label>
          <input
            type="number"
            min={0}
            id="taxPrice"
            name="taxPrice"
            placeholder="부가세"
            className={styles.form_input_mid}
          />
        </div>
        <div>
          <button>간이과세자</button>
          <button>일반과세자</button>
        </div>
        <p>Display Tag</p>
      </div>
      <div>
        <button>계산하기</button>
        <button>상품추가</button>
        <button>초기화</button>
      </div>
    </>
  );
};

export default Form;
