"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";
import { shimmerDataUrl } from "@/lib/shimmer";

interface ShimmerImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  fallbackSrc?: string;
}

export default function ShimmerImage({
  src,
  alt,
  className,
  style,
  fallbackSrc,
  ...props
}: ShimmerImageProps) {
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
  }, [src]);

  return (
    <div
      style={{
        position: props.fill ? "absolute" : "relative",
        width: props.fill ? "100%" : undefined,
        height: props.fill ? "100%" : undefined,
        overflow: "hidden",
      }}
    >
      <Image
        src={imgSrc}
        alt={alt || "Nisab College Image"}
        placeholder="blur"
        blurDataURL={shimmerDataUrl(800, 600)}
        onLoad={() => setLoading(false)}
        onError={() => {
          if (fallbackSrc && imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        className={className}
        style={{
          ...style,
          transition: "opacity 0.4s ease, filter 0.4s ease",
          opacity: loading ? 0.7 : 1,
          filter: loading ? "blur(4px)" : "blur(0)",
        }}
        {...props}
      />
    </div>
  );
}
