import { ThemeSwitcher } from "components/ThemeSwitcher";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.header} data-testid="Header">
    <div className={styles.logo}>DevFinder</div>
    <ThemeSwitcher />
  </div>
);
