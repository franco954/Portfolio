import React from "react";
import type { Education, Certification, Course } from "../types";
import "./Education.css";

interface EducationProps {
  education: Education[];
  certifications: Certification[];
  courses: Course[];
}

const EducationComponent: React.FC<EducationProps> = ({
  education,
  certifications,
  courses,
}) => {
  const featured = certifications.find((c) => c.important);
  const secondary = certifications.filter((c) => !c.important);

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>
        <p className="section-subtitle">
          Educación, certificaciones y cursos especializados
        </p>

        <div className="education-content">
          {/* Educación */}
          <div className="education-section">
            <h3 className="subsection-title">
              <span className="icon">🎓</span>
              Educación
            </h3>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="edu-header">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    {edu.current && (
                      <span className="current-badge">En Curso</span>
                    )}
                  </div>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-period">{edu.period}</p>
                  {edu.description && (
                    <p className="edu-description">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones AWS - Premium Layout */}
          <div className="certifications-section">
            <h3 className="subsection-title">
              <span className="icon">🏆</span>
              Certificaciones AWS
            </h3>

            <div className="aws-certs-layout">
              {/* Featured - Solutions Architect */}
              {featured && (
                <div className="cert-featured-card">
                  <div className="cert-featured-label">CREDENCIAL PRINCIPAL</div>
                  <div className="cert-featured-inner">
                    <div className="cert-badge-wrapper featured-badge-glow">
                      {featured.badgeImage ? (
                        <img
                          src={featured.badgeImage}
                          alt={featured.name}
                          className="cert-badge-img"
                        />
                      ) : (
                        <div className="cert-badge-placeholder">AWS</div>
                      )}
                    </div>
                    <div className="cert-featured-info">
                      <h4 className="cert-featured-name">{featured.name}</h4>
                      {featured.level && (
                        <span className="cert-level-tag cert-level-associate">
                          {featured.level}
                        </span>
                      )}
                      <p className="cert-featured-date">
                        Obtenida en {featured.date}
                      </p>
                      {featured.description && (
                        <p className="cert-featured-desc">
                          {featured.description}
                        </p>
                      )}
                      {featured.url && (
                        <a
                          href={featured.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-verify-link"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Verificar en Credly
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Secondary Certifications */}
              <div className="cert-secondary-list">
                {secondary.map((cert) => (
                  <div key={cert.id} className="cert-secondary-card">
                    <div className="cert-secondary-badge">
                      {cert.badgeImage ? (
                        <img
                          src={cert.badgeImage}
                          alt={cert.name}
                          className="cert-badge-img-sm"
                        />
                      ) : (
                        <div className="cert-badge-placeholder-sm">AWS</div>
                      )}
                    </div>
                    <div className="cert-secondary-info">
                      <h4 className="cert-secondary-name">{cert.name}</h4>
                      {cert.level && (
                        <span className="cert-level-tag cert-level-foundational">
                          {cert.level}
                        </span>
                      )}
                      <p className="cert-secondary-date">
                        Emitida {cert.date}
                      </p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-verify-link cert-verify-link-sm"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Verificar en Credly
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="certs-footer-note">
              Ambas credenciales son verificables públicamente en Credly.
            </p>
          </div>

          {/* Cursos */}
          <div className="courses-section">
            <h3 className="subsection-title">
              <span className="icon">📚</span>
              Cursos
            </h3>
            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <h4 className="course-name">{course.name}</h4>
                  <p className="course-platform">{course.platform}</p>
                  <p className="course-date">{course.date}</p>
                  {course.url && (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="course-link"
                    >
                      <span className="icon">🔗</span>
                      Ver Certificado
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
