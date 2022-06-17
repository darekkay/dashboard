import React from "react";
import { Trans } from "react-i18next";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import Link from "components/link";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const RandomImage = ({
  id,
  meta,
  triggerUpdate,
  imageUrl,
  authorName,
  authorUrl,
  altText,
  widgetStatusDisplay,
}: Props) => {
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  if (widgetStatusDisplay) return widgetStatusDisplay;

  return (
    <figure className="relative h-full w-full">
      <img
        src={imageUrl}
        className="h-full w-full object-fit-cover"
        alt={altText}
      />
      {authorUrl && (
        <figcaption className="absolute bottom-0 w-full text-0 py-1 px-2 truncate background-overlay">
          <Trans
            i18nKey="widget.random-image.attribution"
            values={{ authorName }}
            components={{
              authorLink: (
                <Link
                  href={`${authorUrl}?utm_source=dashboard&utm_medium=referral`}
                >
                  {""}
                </Link>
              ),
              unsplashLink: (
                <Link href="https://unsplash.com/?utm_source=dashboard&utm_medium=referral">
                  {""}
                </Link>
              ),
            }}
          />
        </figcaption>
      )}
    </figure>
  );
};

interface Props extends WidgetProps {
  imageUrl?: string;
  authorName?: string;
  authorUrl?: string;
  altText?: string;
}

export default RandomImage;
