import styles from "./page.module.css";
import { Text } from "@kuma-ui/core";

export default function Home() {
  return (
    <main className={styles.main}>
      <Text color="colors.blue" fontSize="16px" fontWeight="bold">
        Hello world
      </Text>
    </main>
  );
}
