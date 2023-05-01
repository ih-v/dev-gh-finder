import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentRef = "";

  if (isLink) {
    currentRef = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? "" : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentRef}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
