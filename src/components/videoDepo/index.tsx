import styles from "./styles.module.scss";

interface VideoDepoProps {
  embedVideoId: string;
}

export default function VideoDepo({embedVideoId}: VideoDepoProps) {
  return (
    <div className={styles.videoContent}>
      <iframe width="326" height="160" color="red" src={`https://www.youtube.com/embed/${embedVideoId}?controls=2`}>
      </iframe>
    </div>
  );
}