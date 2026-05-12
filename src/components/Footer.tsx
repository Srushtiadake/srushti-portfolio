"use client";

import { Mail } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 9.5V18M6.5 6.5V6.6M10.5 18V9.5M10.5 13.25C10.5 11.25 11.85 9.25 14.3 9.25C16.65 9.25 18 10.9 18 13.55V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <section className="footer-cta" aria-label="Contact call to action">
          <h2>
            Let&apos;s build something
            <br />
            worth using.
          </h2>
          <div className="footer-cta-actions">
            <a className="footer-button footer-button--primary" href="mailto:adakesrushti@gmail.com">
              Send me an email
            </a>
            <a
              className="footer-button footer-button--secondary"
              href="https://www.linkedin.com/in/srushti-adake/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </section>

        <div className="footer-divider" />

        <section className="footer-links-row" aria-label="Footer navigation">
          <div className="footer-brand">
            <p>Srushti.</p>
            <span>Product Designer · MS HCI · UT Austin</span>
          </div>

          <nav className="footer-nav" aria-label="Footer links">
            <a href="/work">Work</a>
            <a href="/resume">Resume</a>
            <a href="mailto:adakesrushti@gmail.com">Contact</a>
          </nav>

          <div className="footer-social" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/srushti-adake/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a href="mailto:adakesrushti@gmail.com" aria-label="Email">
              <Mail size={20} strokeWidth={1.8} />
            </a>
          </div>
        </section>

        <section className="footer-copyright" aria-label="Copyright">
          <p>© 2026 Srushti Adake. All rights reserved.</p>
          <p>Designed &amp; built by Srushti in Cursor ✦</p>
        </section>
      </div>

      <style jsx>{`
        .site-footer {
          width: 100%;
          background: #1a1a1a;
          color: #fff;
          padding: 80px 48px 40px;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-cta {
          text-align: center;
        }

        .footer-cta h2 {
          font-family: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
          font-size: 56px;
          line-height: 1.02;
          font-style: italic;
          font-weight: 400;
          color: #fff;
          margin-bottom: 28px;
        }

        .footer-cta-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        .footer-button {
          border-radius: 999px;
          padding: 14px 28px;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          transition:
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }

        .footer-button--primary {
          background: #fff;
          color: #1a1a1a;
        }

        .footer-button--primary:hover,
        .footer-button--primary:focus-visible {
          background: #f7f6f3;
        }

        .footer-button--secondary {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .footer-button--secondary:hover,
        .footer-button--secondary:focus-visible {
          border-color: #fff;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 64px 0 32px;
        }

        .footer-links-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
        }

        .footer-brand p {
          color: #fff;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .footer-brand span {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          line-height: 1.4;
        }

        .footer-nav {
          display: flex;
          gap: 32px;
        }

        .footer-nav a,
        .footer-social a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .footer-nav a {
          font-size: 13px;
          line-height: 1;
        }

        .footer-nav a:hover,
        .footer-nav a:focus-visible,
        .footer-social a:hover,
        .footer-social a:focus-visible {
          color: #fff;
        }

        .footer-social {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .footer-social a {
          display: inline-flex;
        }

        .footer-copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          margin-top: 32px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
        }

        .footer-copyright p {
          color: rgba(255, 255, 255, 0.3);
          font-size: 11px;
          line-height: 1.4;
        }

        @media (max-width: 767px) {
          .site-footer {
            padding: 56px 16px calc(32px + env(safe-area-inset-bottom));
          }

          .footer-cta h2 {
            font-size: clamp(34px, 10vw, 42px);
            line-height: 1.05;
            margin-bottom: 24px;
          }

          .footer-cta-actions {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .footer-button {
            width: 100%;
            min-height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 16px 24px;
            text-align: center;
            font-size: 15px;
          }

          .footer-divider {
            margin: 48px 0 28px;
          }

          .footer-links-row {
            flex-direction: column;
            text-align: center;
            gap: 28px;
          }

          .footer-brand p {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .footer-brand span {
            display: block;
            max-width: 260px;
            font-size: 13px;
            line-height: 1.5;
          }

          .footer-nav {
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px 12px;
          }

          .footer-nav a {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 12px;
            font-size: 15px;
          }

          .footer-social {
            justify-content: center;
            gap: 12px;
          }

          .footer-social a {
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
          }

          .footer-copyright {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
            padding-top: 22px;
            margin-top: 28px;
          }

          .footer-copyright p {
            max-width: 280px;
            font-size: 12px;
            line-height: 1.5;
          }
        }
      `}</style>
    </footer>
  );
}
