import { useEffect } from "react";

import dayjs from "common/date";
import log from "common/log";
import useInterval from "common/hooks/useInterval";
import { TriggerUpdateAction, WidgetMeta } from "components/widget/duck";

interface UseTriggerUpdate {
  id: string;
  params: Record<string, any>;
  meta: WidgetMeta;
  triggerUpdate: (action: TriggerUpdateAction) => void;
}

/*
 * Hook to trigger widget updates.
 *
 * An update should be triggered
 *  - After each update cycle (defined per widget type)
 *  - Whenever a dependent prop changes (e.g. when adjusting the settings)
 *  - On page reload
 * */
const useTriggerUpdate = (
  { id, params, meta, triggerUpdate }: UseTriggerUpdate,
  deps: any[]
) => {
  if (meta.updateCycle === undefined) {
    log.error(`Widget ${id} does not support updates.`);
  }

  const updateProps = { id, params };

  const canTriggerUpdate =
    meta.updateCycle !== undefined &&
    meta.updateStatus !== "pending" &&
    Object.values(params).every((value) => !!value);

  useEffect(() => {
    if (canTriggerUpdate) {
      triggerUpdate(updateProps);
      log.debug(`Update triggered for ${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useInterval(
    () => {
      if (canTriggerUpdate) {
        triggerUpdate(updateProps);
        log.debug(`Update triggered for ${id}`);
      }
    },
    meta.updateCycle !== undefined
      ? dayjs.duration(meta.updateCycle).asMilliseconds()
      : null
  );
};

export default useTriggerUpdate;
