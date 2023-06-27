import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../components/Clock/Clock.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Clock />
    </div>
  );
}
