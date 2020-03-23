import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import cn from "classnames";
import { ClassValue } from "classnames/types";

import Icon from "components/icon";

import "./styles.scss";

const FileUpload: React.FC<Props> = ({
  label,
  className,
  accept,
  onDropAccepted
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles
  } = useDropzone({
    accept,
    onDropAccepted,
    multiple: false
  });

  return (
    <div
      className={cn(
        "file-upload flex flex-col items-center p-3 text-center bg-color-default",
        { "drag-active": isDragActive },
        className
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="flex items-center">
        <Icon name="upload" position="left" />
        {acceptedFiles.length > 0 ? acceptedFiles[0].name : label}
      </div>
    </div>
  );
};

export interface Props {
  label: string;
  className?: ClassValue;
  accept?: DropzoneOptions["accept"];
  onDropAccepted?: DropzoneOptions["onDropAccepted"];
}

export default FileUpload;
