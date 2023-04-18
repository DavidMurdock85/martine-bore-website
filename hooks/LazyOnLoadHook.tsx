import { useState, useEffect, useRef, RefObject } from "react";
import { ImageProps } from "next/image";
import { Base } from "@mb/components/layout";

function useLazyOnLoad(ref: RefObject<HTMLDivElement>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

type LazyImageProps = ImageProps & {
  lazyOnLoad?: boolean;
};

export default function LazyImage({
  src,
  alt,
  lazyOnLoad = true,
  ...rest
}: LazyImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useLazyOnLoad(imageRef);
{/*
  if (lazyOnLoad) {
    return (
      <Base ref={imageRef}>
        {isIntersecting && <Image src={src} alt={alt} {...rest} />}
      </Base>
    );
  }

  return <Image src={src} alt={alt} {...rest} />;
  */}
}
