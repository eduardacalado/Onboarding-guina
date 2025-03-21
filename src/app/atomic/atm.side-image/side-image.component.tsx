import { ImgHTMLAttributes } from "react";

type SideImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function SideImage({ src, alt, ...props }: SideImageProps) {
  return (
    <img
      className="w-[708px] h-[972px] object-fill"
      src={src}
      alt={alt}
      {...props}
    />
  );
}
