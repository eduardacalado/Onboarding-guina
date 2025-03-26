import { ImgHTMLAttributes } from "react";

type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function AvatarImage({ src, alt, ...props }: AvatarImageProps) {
  return (
    <img className="w-xl h-xl object-fill" src={src} alt={alt} {...props} />
  );
}
