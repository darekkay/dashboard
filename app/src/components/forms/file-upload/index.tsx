import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import cn, { Argument as ClassValue } from "classnames";

import Icon from "components/icon";

import "./styles.scss";

const FileUpload = ({ label, className, accept, onDropAccepted }: Props) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDropAccepted,
      multiple: false,
    });

  return (
    <div
      className={cn(
        "file-upload flex flex-col items-center p-3 text-center bg-default",
        { "drag-active": isDragActive },
        className
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} aria-label={label} />
      <div className="flex items-center">
        <Icon name="upload" position="left" />
        {/* NICE: display a generic "invalid file type" error message for rejectedFiles */}
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
