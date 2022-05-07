import styles from './Title.module.css';

export const Title = ({
  title,
  styleClass,
}: {
  title: string;
  styleClass?: string;
}) => {
  return (
    <div
      className={
        styleClass === 'about' ? styles.AboutSectionTitle : styles.SectionTitle
      }
    >
      <h3>{title || 'title'}</h3>
      <div
        className={styleClass === 'about' ? styles.AboutUnderline : 'underline'}
      ></div>
    </div>
  );
};
