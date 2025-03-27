import { ImgHTMLAttributes } from "react";
import { VariantProps } from "tailwind-variants";
import { imageVariants } from "./image.component.style";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof imageVariants> & {
    src: string;
    alt: string;
  };

export function Image({ variant, src, alt, ...props }: ImageProps) {
  return (
    <img
      className={imageVariants({ variant })}
      src={src}
      alt={alt}
      {...props}
    />
  );
}
