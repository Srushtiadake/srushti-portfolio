"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ProjectGlanceData = {
  tags: string[];
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string[];
  domain: string;
  duration: string;
  hasFullCaseStudy: boolean;
  caseStudyHref?: string;
  slides?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }>;
};

type ProjectGlanceModalProps = {
  project: ProjectGlanceData;
  children?: ReactNode;
  triggerClassName?: string;
};

export function ProjectGlanceModal({ project, children, triggerClassName }: ProjectGlanceModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`project-glance-trigger${triggerClassName ? ` ${triggerClassName}` : ""}`}
      >
        {children ?? "View at a glance →"}
      </button>

      {isOpen
        ? createPortal(
            <div className="project-glance-overlay" onClick={() => setIsOpen(false)} role="presentation">
              <div className="project-glance-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <button type="button" className="project-glance-close" onClick={() => setIsOpen(false)} aria-label="Close modal">
              ×
            </button>

            <div className="project-glance-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-glance-tag">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="project-glance-title">{project.title}</h3>
            <p className="project-glance-subtitle">{project.subtitle}</p>

            <hr className="project-glance-divider" />

            <div className="project-glance-columns">
              <div>
                <p className="project-glance-col-title">The Problem</p>
                <p className="project-glance-col-body">{project.problem}</p>
              </div>
              <div>
                <p className="project-glance-col-title">The Solution</p>
                <p className="project-glance-col-body">{project.solution}</p>
              </div>
              <div>
                <p className="project-glance-col-title">Impact</p>
                <ul className="project-glance-impact">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="project-glance-divider" />

            {project.slides && project.slides.length > 0 ? (
              <>
                <p className="project-glance-col-title">Snapshots</p>
                <div className="project-glance-slides" aria-label="Project glance snapshots">
                  {project.slides.map((slide) => (
                    <figure key={slide.src} className="project-glance-slide">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={slide.width}
                        height={slide.height}
                        className="project-glance-slide-image"
                        sizes={`(max-width: ${slide.width}px) 100vw, ${slide.width}px`}
                        quality={100}
                        unoptimized
                      />
                      {slide.caption ? <figcaption className="project-glance-slide-caption">{slide.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
                <hr className="project-glance-divider" />
              </>
            ) : null}

            <div className="project-glance-footer">
              <p className="project-glance-meta">
                {project.domain} · {project.duration}
              </p>
              {project.hasFullCaseStudy && project.caseStudyHref ? (
                <Link href={project.caseStudyHref} className="project-glance-link" onClick={() => setIsOpen(false)}>
                  View full case study →
                </Link>
              ) : null}
            </div>
              </div>
            </div>,
            document.body,
          )
        : null}

      <style jsx>{`
        .project-glance-trigger {
          margin-top: 14px;
          border: none;
          background: transparent;
          padding: 0;
          color: inherit;
          opacity: 0.78;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 600;
        }

        .project-glance-trigger-card {
          margin-top: 0;
          width: 100%;
          text-align: left;
          opacity: 1;
          text-transform: none;
          letter-spacing: normal;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
        }

        .project-glance-trigger-card :global(.work-cta) {
          opacity: 0.85;
        }

        .project-glance-trigger-card:hover {
          text-decoration: none;
        }

        .project-glance-trigger-card:hover :global(.work-cta),
        .project-glance-trigger-card:focus-visible :global(.work-cta) {
          text-decoration: underline;
        }

        .project-glance-trigger:hover {
          text-decoration: underline;
        }

        .project-glance-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: grid;
          place-items: center;
          z-index: 9999;
          animation: projectGlanceFadeIn 300ms ease;
          padding: 20px;
        }

        .project-glance-modal {
          width: min(1240px, calc(100vw - 96px));
          height: calc(100vh - 96px);
          max-width: none;
          max-height: none;
          overflow-y: auto;
          background: #f7f6f3;
          border-radius: 20px;
          padding: 48px;
          position: relative;
          color: #1a1a1a;
        }

        .project-glance-close {
          position: absolute;
          top: 16px;
          right: 18px;
          border: none;
          background: transparent;
          color: #888;
          font-size: 24px;
          cursor: pointer;
          line-height: 1;
        }

        .project-glance-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .project-glance-tag {
          font-size: 12px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #c9c6bf;
          color: #1a1a1a;
        }

        .project-glance-title {
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: clamp(34px, 5vw, 46px);
          font-weight: 400;
          line-height: 1.08;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .project-glance-subtitle {
          color: #666;
          font-size: 16px;
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .project-glance-divider {
          border: none;
          border-top: 1px solid #dfdcd3;
          margin: 22px 0;
        }

        .project-glance-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .project-glance-col-title {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #5b5bd6;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .project-glance-col-body {
          font-size: 14px;
          line-height: 1.6;
          color: #2b2b2b;
        }

        .project-glance-impact {
          margin: 0;
          padding-left: 0;
          list-style: none;
          display: grid;
          gap: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: #2b2b2b;
        }

        .project-glance-footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: baseline;
        }

        .project-glance-slides {
          display: grid;
          gap: 24px;
        }

        .project-glance-slide {
          margin: 0;
          display: grid;
          justify-items: stretch;
          max-width: 100%;
          padding-bottom: 4px;
        }

        .project-glance-slide-image {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          border: 1px solid #ddd9d0;
          background: #fff;
        }

        .project-glance-slide-caption {
          font-size: 12px;
          color: #777;
          margin-top: 8px;
          line-height: 1.4;
        }

        .project-glance-meta {
          color: #888;
          font-size: 13px;
        }

        .project-glance-link {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .project-glance-link:hover {
          text-decoration: underline;
        }

        @keyframes projectGlanceFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 860px) {
          .project-glance-columns {
            grid-template-columns: 1fr;
          }

          .project-glance-modal {
            width: calc(100vw - 28px);
            height: calc(100vh - 28px);
            padding: 36px 24px 24px;
          }
        }
      `}</style>
    </>
  );
}
