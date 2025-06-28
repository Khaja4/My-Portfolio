import React from 'react';
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsList}>
        <ProjectCard src={viberr} link="https://github.com/Khaja4" h3="Viberr" p="A streaming app for music lovers" />
        <ProjectCard src={freshBurger} link="https://github.com/Khaja4" h3="Fresh Burger" p="Modern UI food delivery app" />
        <ProjectCard src={viberr} link="https://github.com/Khaja4" h3="Viberr Clone" p="An improved version with better UI" />
      </div>
    </section>
  );
}

export default Projects;
