"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ImageStack.module.css";

type ImageStackProps = {
  slideIndex: number;
};

const DESIGN_SYSTEMS = "/carousel/design-systems.jpg";
const STARTUP = "/carousel/startup.jpg";
const RESEARCH = "/carousel/Research.png";
const AI_IN_PRACTISE = "/carousel/AI%20in%20Practise.png";
const SYSTEMS_THINKING = "/carousel/systemsthinking.png";

function getMainImage(slideIndex: number) {
  if (slideIndex === 2) return RESEARCH;
  if (slideIndex === 3) return AI_IN_PRACTISE;
  if (slideIndex === 4) return SYSTEMS_THINKING;
  if (slideIndex === 1) return STARTUP;
  return DESIGN_SYSTEMS;
}

type PosKey = "top" | "middle" | "bottom" | "outTop" | "outBottom";
type StackState = { top: string | null; middle: string; bottom: string | null };
const LAST_IMAGE_SLIDE_INDEX = 4;

const POSITIONS: Record<PosKey, { top: string; centered: boolean }> = {
  top: { top: "-300px", centered: false },
  middle: { top: "52%", centered: true },
  bottom: { top: "calc(100% + 40px)", centered: false },
  outTop: { top: "-720px", centered: false },
  outBottom: { top: "calc(100% + 460px)", centered: false },
};

function getInitialStack(slideIndex: number): StackState {
  return {
    top: slideIndex > 0 ? getMainImage(slideIndex - 1) : null,
    middle: getMainImage(slideIndex),
    bottom: slideIndex < LAST_IMAGE_SLIDE_INDEX ? getMainImage(slideIndex + 1) : null,
  };
}

export function ImageStack({ slideIndex }: ImageStackProps) {
  const [stack, setStack] = useState<StackState>(getInitialStack(slideIndex));
  const [incoming, setIncoming] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateReady, setAnimateReady] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const prevSlideRef = useRef(slideIndex);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (slideIndex === prevSlideRef.current || isAnimating) return;
    const movingDown = slideIndex > prevSlideRef.current;
    setDirection(movingDown ? 1 : -1);

    const incomingImage = movingDown
      ? slideIndex < LAST_IMAGE_SLIDE_INDEX
        ? getMainImage(slideIndex + 1)
        : null
      : slideIndex > 0
        ? getMainImage(slideIndex - 1)
        : null;

    prevSlideRef.current = slideIndex;
    setIncoming(incomingImage);
    setIsAnimating(true);
    setAnimateReady(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimateReady(true));
    });

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setStack(getInitialStack(slideIndex));
      setIncoming(null);
      setIsAnimating(false);
      setAnimateReady(false);
      timeoutRef.current = null;
    }, 900);
  }, [slideIndex, isAnimating]);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  const transition = "top 900ms cubic-bezier(0.76, 0, 0.24, 1)";

  const renderCardBase = (
    src: string | null,
    posKey: PosKey,
    muted: boolean,
    keyName: string,
    keepCenteredTransform = false,
  ) => {
    if (!src) return null;
    const pos = POSITIONS[posKey];
    const useCenteredTransform = keepCenteredTransform || pos.centered;
    const floatInnerClass =
      keyName === "top"
        ? styles.floatTop
        : keyName === "middle"
          ? styles.floatMiddle
          : keyName === "bottom"
            ? styles.floatBottom
            : styles.innerStatic;

    return (
      <div
        key={keyName}
        className="work-main-card"
        style={{
          top: pos.top,
          bottom: "auto",
          background: "transparent",
          overflow: "hidden",
          borderRadius: "12px",
          border: muted ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.28)",
          opacity: muted ? 0.58 : 1,
          transform: useCenteredTransform
            ? "perspective(860px) rotateY(-15deg) rotateZ(3.5deg) translateY(-50%)"
            : "perspective(860px) rotateY(-15deg) rotateZ(3.5deg)",
          boxShadow: muted
            ? "-18px 22px 48px rgba(0,0,0,0.24)"
            : "-26px 34px 72px rgba(0,0,0,0.38)",
          zIndex: muted ? 1 : 2,
          transition: isAnimating ? transition : undefined,
        }}
      >
        <div className={floatInnerClass}>
          <img
            src={src}
            alt=""
            className={`work-stack-img ${muted ? "work-stack-img--peek" : ""}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
    );
  };

  const topPos: PosKey = !isAnimating
    ? "top"
    : direction === 1
      ? animateReady
        ? "outTop"
        : "top"
      : animateReady
        ? "middle"
        : "top";
  const middlePos: PosKey = !isAnimating
    ? "middle"
    : direction === 1
      ? animateReady
        ? "top"
        : "middle"
      : animateReady
        ? "bottom"
        : "middle";
  const bottomPos: PosKey = !isAnimating
    ? "bottom"
    : direction === 1
      ? animateReady
        ? "middle"
        : "bottom"
      : animateReady
        ? "outBottom"
        : "bottom";
  const incomingPos: PosKey | null = !isAnimating || !incoming
    ? null
    : direction === 1
      ? animateReady
        ? "bottom"
        : "outBottom"
      : animateReady
        ? "top"
        : "outTop";

  return (
    <div
      className={styles.parallaxRoot}
      style={{
        transform: `translateX(${mouseX * 12}px) translateY(${mouseY * 8}px)`,
        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {renderCardBase(stack.top, topPos, true, "top")}
      {renderCardBase(stack.middle, middlePos, false, "middle", true)}
      {renderCardBase(stack.bottom, bottomPos, true, "bottom")}
      {incomingPos ? renderCardBase(incoming, incomingPos, true, "incoming") : null}
    </div>
  );
}
