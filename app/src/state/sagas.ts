import { all, call, spawn } from "typed-redux-saga";

import { saga as i18nSaga } from "common/i18n";
import { saga as layoutSaga } from "common/ducks/layout";
import { saga as configSaga } from "common/ducks/config";
import widgets from "widgets/list";

const widgetsWithSagas = Object.entries(widgets)
  .filter(([, widgetProperties]) => widgetProperties.hasSaga)
  .map(([widgetType]) => widgetType);

export const rootSaga = function* rootSaga() {
  yield* spawn(i18nSaga);
  yield* spawn(layoutSaga);
  yield* spawn(configSaga);

  // load and run all widget sagas
  // dynamic loading approaches (redux-sagas-injector, redux-dynamic-modules) bring a higher maintenance trade-off
  const widgetSagaModules = yield* all(
    widgetsWithSagas.map((widget) =>
      call(async () => import(`widgets/${widget}/sagas`))
    )
  );
  yield* all(
    widgetSagaModules.map((sagaModule: any) => spawn(sagaModule.saga))
  );
};
