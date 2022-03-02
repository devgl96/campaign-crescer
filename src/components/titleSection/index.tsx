import React from 'react';

import styles from "./styles.module.scss";

interface titleSectionProps {
  title: string;
};

export function TitleSection({title}: titleSectionProps) {
  return (
    <div className={styles.contentTitleSection}>
      <div className={styles.lineSideTitle}></div>
      <h1>{title}</h1>
      <div className={styles.lineSideTitle}></div>
    </div>
  );
}