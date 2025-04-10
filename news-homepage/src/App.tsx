import styles from "./app.module.css";
import { Header } from "./components/header/header";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}></main>
    </>
  );
}
