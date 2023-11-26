"use client";
import styles from "@/app/page.module.css";
import useInput from "@/utils/lib/useInput";

const Form = () => {
  const initialState = {
    productnm: "",
  };

  const [state, onChange] = useInput(initialState);

  return (
    <>
      <div className={styles.form_grid_container}>
        <div>
          <label>상품명</label>
        </div>
        <div>
          <input
            type="text"
            id="productnm"
            name="productnm"
            placeholder="상품을 입력하세요."
            className={styles.form_input_full}
            onChange={(e) => onChange(e)}
          />
        </div>
        <p className={styles.form_display}>{state.productnm}</p>
      </div>
      <div className={styles.form_grid_container}>
        <div>
          <label>판매가</label>
        </div>
        <div>
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
        </div>
        <p className={styles.form_display}>Display Tag</p>
      </div>
      <div className={styles.form_grid_container}>
        <div>
          <label>매입가</label>
        </div>
        <div>
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
        </div>
        <p className={styles.form_display}>Display Tag</p>
      </div>
      <div className={styles.form_grid_container}>
        <div>
          <label>기타비용</label>
        </div>
        <div>
          <div>
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
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.blue}`}
            >
              +
            </button>
          </div>
          <div></div>
        </div>
        <p className={styles.form_display}>Display Tag</p>
      </div>
      <div className={styles.form_grid_container}>
        <div>
          <label>수수료</label>
        </div>
        <div>
          <div>
            <input
              type="number"
              min={0}
              id="categoryChargePrice"
              name="categorychargeprice"
              placeholder="카테고리"
              className={styles.form_input_small}
            />
            <input
              type="number"
              min={0}
              id="linkChargePrice"
              name="linkChargePrice"
              placeholder="연동"
              className={styles.form_input_small}
            />
            <input
              type="number"
              min={0}
              id="transferChargePrice"
              name="transferChargePrice"
              placeholder="배송비"
              className={styles.form_input_small}
              data-testid="transferChargePrice"
            />
          </div>
          <div style={{ margin: "7px 5px" }}>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.green}`}
            >
              스마트스토어
            </button>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.blue}`}
            >
              쿠팡
            </button>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.purple}`}
            >
              G마켓
            </button>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.red}`}
            >
              11번가
            </button>
          </div>
        </div>
        <p className={styles.form_display}>Display Tag</p>
      </div>
      <div className={styles.form_grid_container}>
        <div>
          <label>부가세</label>
        </div>
        <div>
          <div>
            <input
              type="number"
              min={0}
              id="taxPrice"
              name="taxPrice"
              placeholder="부가세"
              className={styles.form_input_full}
            />
          </div>
          <div style={{ margin: "7px 5px" }}>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.blue}`}
            >
              간이과세자
            </button>
            <button
              className={`${styles.btn_rounded} ${styles.btn} ${styles.blue}`}
            >
              일반과세자
            </button>
          </div>
        </div>
        <p className={styles.form_display}>Display Tag</p>
      </div>
      <div className={styles.form_button_container}>
        <button
          className={`${styles.btn_rounded_full} ${styles.btn} ${styles.blue}`}
        >
          계산하기
        </button>
        <button
          className={`${styles.btn_rounded_full} ${styles.btn} ${styles.grey}`}
        >
          상품추가
        </button>
        <button
          className={`${styles.btn_rounded_full} ${styles.btn} ${styles.grey}`}
        >
          초기화
        </button>
      </div>
    </>
  );
};

export default Form;
