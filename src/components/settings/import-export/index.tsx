import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { State } from "state/store";
import { actionCreators } from "common/ducks/config";
import Link from "components/link";
import Icon from "components/icon";

export const ImportExport: React.FC<Props> = ({ state }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Link
        className="inline-flex items-center m-4"
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
          JSON.stringify(state)
        )}`}
        external
        download="dashboard.json"
      >
        <Icon position="left" name="download" />
        {t("common.download")}
      </Link>
    </div>
  );
};

export interface Props {
  state: State;
}

export default connect(
  (state: State) => ({ state }),
  actionCreators
)(ImportExport);
