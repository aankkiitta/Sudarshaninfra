// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredProjects } from '../data/featured-project-data';
import FeaturedProjectOverview from '../components/FeaturedProject/FeaturedProjectOverview';
import AboutProjectOverview from '../components/FeaturedProject/AboutProjectOverview';
import ProjectInfo from '../components/FeaturedProject/ProjectInfo';
import MaterialsUsed from '../components/FeaturedProject/MaterialsUsed';
import ProjectVideo from '../components/FeaturedProject/ProjectVideo';
import ProjectGallery from '../components/FeaturedProject/ProjectGallery';
import SimilarProjects from '../components/FeaturedProject/SimilarProjects';
import Testimonials from '../components/Testimonials';

import GetInTouch from '../components/Project/GetInTouch';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = featuredProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found</h2>
        <p>Looking for: <strong>{id}</strong></p>
        <Link to="/">← Go Home</Link>
      </div>
    );
  }

  return (
    <div className="pd-page">

      {/* 1. HERO */}
      <FeaturedProjectOverview project={project} />

      {/* 2. ABOUT */}
      <AboutProjectOverview project={project} />

 {/* 6. GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}



      {/* 3. PROJECT INFO */}
      <ProjectInfo project={project} />

      {/* 4. MATERIALS USED */}
      <MaterialsUsed project={project} />

      {/* 5. VIDEO TOUR (side-by-side text + video) */}
      {/* 👇 project prop pass karna zaroori hai */}
      <ProjectVideo project={project} />

     
      {/* 7. SIMILAR PROJECTS */}
      <SimilarProjects currentProjectId={project.id} />

<Testimonials/>
      {/* 8. GET IN TOUCH */}
      <GetInTouch />

     

    </div>
  );
};

export default ProjectDetail;