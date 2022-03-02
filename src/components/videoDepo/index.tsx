import styles from "./styles.module.scss";

export function VideoDepo() {
  return (
    <div className={styles.videoContent}>
      <iframe width="326" height="160" src="https://www.youtube.com/embed/6fNy0iD3hsk?controls=0">
      </iframe>
    </div>
  );
}