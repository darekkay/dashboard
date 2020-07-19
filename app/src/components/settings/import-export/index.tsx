import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { State, STATE_PROPERTIES } from "state/store";
import { actionCreators } from "common/ducks/state";
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
      <Link
        className="inline-flex items-center mr-6 mb-3"
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
          JSON.stringify(state)
        )}`}
        external
        download="dashboard.json"
      >
        <Icon position="left" name="download" />
        {t("common.download")}
      </Link>
      <FileUpload
        label={t("data.restore.default")}
        className={cn("mb-2", uploadResult)}
        accept=".json"
        onDropAccepted={onDropAccepted}
      />
      {uploadResult === "error" && (
        <div className="flex items-center text-color-danger">
          <Icon name="error" position="left" />
          {t("data.restore.error")}
        </div>
      )}
      {uploadResult === "success" && (
        <div className="flex items-center text-color-success">
          <Icon name="success" position="left" />
          {t("data.restore.success")}
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
  actionCreators
)(ImportExport);
