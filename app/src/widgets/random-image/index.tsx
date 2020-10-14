import React from "react";
//import { useTranslation } from "react-i18next";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const RandomImage: React.FC<Props> = ({
  id,
  meta,
  triggerUpdate,
  imageUrl,
  authorName,
  authorUrl,
}) => {
  //const { t } = useTranslation();
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  return (
    <img
      src={imageUrl}
      className="h-full w-full object-fit-cover"
      alt={"Unsplash Photo by " + authorName}
    />
  );
};

interface Props extends WidgetProps {
  imageUrl: string;
  authorName: string;
  authorUrl: string;
}

export default RandomImage;
