import HomeLayout from "@/components/home/Layout";
import styles from "@/app/page.module.css";
import Form from "@/components/calculate/Form";

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <h1>모두의 마진율 계산기</h1>
      </div>
      <div className={styles.calculate_background}>
        <div className={styles.calculate_background_item}>
          <Form />
        </div>
      </div>
    </HomeLayout>
  );
}
