import Image from "next/image";
import styles from "./page.scss";

export default function Home() {
  return (
    <main>
      <div className="header">
        <div className="header__logo">
          <Image
            className={styles.logo}
            src="/logo-fine.svg"
            alt="Fine Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
    </main>
  );
}
