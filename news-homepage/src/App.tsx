import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { MainContent } from "./sections/hero/main-content";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainContent />
      </main>
    </>
  );
}
