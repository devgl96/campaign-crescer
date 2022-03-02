import styles from "./styles.module.scss";

export default function VideoDepo() {
  return (
    <div className={styles.videoContent}>
      <iframe width="326" height="160" color="red" src="https://www.youtube.com/embed/6fNy0iD3hsk?controls=2">
      </iframe>
    </div>
  );
}