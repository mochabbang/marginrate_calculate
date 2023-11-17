import styles from "../../app/page.module.css";

type ComponentProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: ComponentProps) {
  return (
    <main>
      <div className={styles.main}>{children}</div>
    </main>
  );
}
