import HomeLayout from "@/components/home/Layout";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <h2>모두의 마진율 계산기</h2>
      </div>
      <div className={styles.calculate_background}>
        <div className={styles.calculate_background_item}></div>
      </div>
    </HomeLayout>
  );
}
