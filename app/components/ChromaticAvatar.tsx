"use client";

import { useEffect, useRef, useState } from "react";

export default function ChromaticAvatar() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hasPermission, setHasPermission] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const x = ((e.gamma ?? 0) / 45) * 6;   // -6px to +6px horizontal
        const y = ((e.beta  ?? 0) / 90) * 6;   // -6px to +6px vertical
        setOffset({ x: Math.max(-6, Math.min(6, x)), y: Math.max(-6, Math.min(6, y)) });
      });
    };

    if (!ios) {
      window.addEventListener("deviceorientation", handleOrientation);
      setHasPermission(true);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const requestIOSPermission = async () => {
    const DeviceOrientationEventAny = DeviceOrientationEvent as any;
    if (typeof DeviceOrientationEventAny.requestPermission === "function") {
      const permission = await DeviceOrientationEventAny.requestPermission();
      if (permission === "granted") {
        setHasPermission(true);
        window.addEventListener("deviceorientation", (e: DeviceOrientationEvent) => {
          const x = ((e.gamma ?? 0) / 45) * 6;
          const y = ((e.beta  ?? 0) / 90) * 6;
          setOffset({ x: Math.max(-6, Math.min(6, x)), y: Math.max(-6, Math.min(6, y)) });
        });
      }
    }
  };

  const imgStyle = (dx: number, dy: number, color: string): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    mixBlendMode: "screen",
    filter: `saturate(2) ${color}`,
    transform: `translate(${dx}px, ${dy}px)`,
    transition: "transform 0.05s linear",
  });

  return (
    <div
      onClick={isIOS && !hasPermission ? requestIOSPermission : undefined}
      style={{
        width: "100%",
        aspectRatio: "3 / 4",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        background: "#000",
        cursor: isIOS && !hasPermission ? "pointer" : "default",
      }}
    >
      {/* Base layer */}
      <img src="/avatar.png" alt="Eudis Alvarez"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />

      {/* Red channel */}
      <img src="/avatar.png" alt=""
        style={imgStyle(-offset.x * 1.2, -offset.y * 0.8, "sepia(1) saturate(5) hue-rotate(0deg)")}
      />

      {/* Blue channel */}
      <img src="/avatar.png" alt=""
        style={imgStyle(offset.x * 1.2, offset.y * 0.8, "sepia(1) saturate(5) hue-rotate(180deg)")}
      />

      {isIOS && !hasPermission && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          paddingBottom: "16px",
        }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, background: "rgba(0,0,0,0.4)", padding: "4px 10px", borderRadius: 20 }}>
            tap to enable motion
          </span>
        </div>
      )}
    </div>
  );
}
