import React, { useRef } from 'react';
import styles from '../sections/Projects/ProjectStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <article
      className={styles.projectCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.projectContent}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{h3}</h3>
          <p className={styles.description}>{p}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitLink}
            ref={buttonRef}
          >
            Visit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.5 11.5L11.5 4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.5 11V4.5H5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <img src={src} alt={h3} className={styles.projectImage} />
      </div>
      <div className={styles.divider} />
    </article>
  );
}

export default ProjectCard;
