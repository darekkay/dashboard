import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { State, STATE_PROPERTIES } from "state/store";
import { actions as stateActions } from "common/ducks/state";
import Link from "components/link";
import Icon from "components/icon";
import FileUpload from "components/forms/file-upload";
import { UpdateStatus } from "components/widget/duck";

export const ImportExport: React.FC<Props> = ({ state, importState }) => {
  const { t } = useTranslation();
  const [uploadResult, setUploadResult] = useState<UpdateStatus>("pending");
  const onDropAccepted = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        (acceptedFiles[0] as File).text().then((data) => {
          const jsonData = JSON.parse(data);
          if (
            // basic validation - the object has to contain all existing state keys
            STATE_PROPERTIES.every((prop) =>
              Object.keys(jsonData).includes(prop)
            )
          ) {
            importState(jsonData);
            setUploadResult("success");
          } else {
            setUploadResult("error");
          }
        });
      }
    },
    [importState]
  );
  return (
    <div>
      <div className="w-full flex justify-center mb-5">
        <Link
          className="inline-flex items-center justify-center"
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            JSON.stringify(state)
          )}`}
          external
          download="dashboard.json"
        >
          <Icon position="left" name="download" />
          {t("config.data.backup")}
        </Link>
      </div>
      <FileUpload
        label={t("config.data.restore.default")}
        className={cn("w-full mb-2", uploadResult)}
        accept=".json"
        onDropAccepted={onDropAccepted}
      />
      {uploadResult === "error" && (
        <div className="flex items-center text-danger">
          <Icon name="error" position="left" />
          {t("config.data.restore.error")}
        </div>
      )}
      {uploadResult === "success" && (
        <div className="flex items-center text-success">
          <Icon name="success" position="left" />
          {t("config.data.restore.success")}
        </div>
      )}
    </div>
  );
};

export interface Props {
  state: State;
  importState: (state: State) => void;
}

export default connect(
  (state: State) => ({ state }),
  stateActions
)(ImportExport);
