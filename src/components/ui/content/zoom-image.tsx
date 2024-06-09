"use client";

import { BlurImage } from "@/components";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomImage(
  props: ImageProps & {
    blurDataURL?: string;
    hideCaption?: boolean;
    disableBlur?: boolean;
    zoomContainerClass?: string;
  },
) {
  const { width, height, isDesktop } = useMediaQuery();
  return (
    <figure
      className={
        "not-prose flex flex-col items-center justify-center space-y-3"
      }
    >
      <Zoom
        zoomMargin={isDesktop ? 45 : undefined}
        zoomImg={{
          src: props.src as string,
          alt: props.alt,
          ...(width && height ? { width, height } : {}),
        }}
      >
        <div className={cn(clsx("", props.zoomContainerClass))}>
          {props.disableBlur ? (
            <Image
              {...props}
              className={cn("rounded-lg", props.className)}
              alt={props.alt}
            />
          ) : (
            <BlurImage
              {...props}
              className={cn(
                clsx("rounded-lg border border-gray-200", props.className),
              )}
              placeholder="blur"
              blurDataURL={
                props.blurDataURL ||
                "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
              }
            />
          )}
        </div>
      </Zoom>
      {!props?.hideCaption && (
        <figcaption className="text-center text-sm italic text-gray-500">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
}
