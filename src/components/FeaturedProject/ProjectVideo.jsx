// src/components/FeaturedProject/ProjectVideo.jsx
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import './ProjectVideo.css';

const ProjectVideo = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project?.video?.src) return null;

  const video = project.video;

  return (
    <section className="pv-section">
      <div className="pv-container">

        {/* LEFT — TEXT */}
        <div className="pv-text">
          <ScrollReveal animation="fade-left" delay={0}>
            <span className="pv-tag">Video Tour</span>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={100}>
            <h2 className="pv-title">{video.title || 'Project Walkthrough'}</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={200}>
            <p className="pv-desc">
              {video.subtitle || 'Take a cinematic tour of this space.'}
            </p>
          </ScrollReveal>

          {video.highlights?.length > 0 && (
            <ScrollReveal animation="fade-up" delay={300}>
              <ul className="pv-highlights">
                {video.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </ScrollReveal>
          )}
        </div>

        {/* RIGHT — VIDEO */}
        <ScrollReveal animation="fade-up" delay={200} className="pv-media-wrap">
          <div className="pv-media">
            {!isPlaying ? (
              <button className="pv-poster" onClick={() => setIsPlaying(true)} aria-label="Play video">
                {video.poster && <img src={video.poster} alt={video.title || 'Video'} />}
                <span className="pv-play">▶</span>
              </button>
            ) : (
              <video src={video.src} poster={video.poster} controls autoPlay playsInline className="pv-video" />
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ProjectVideo;