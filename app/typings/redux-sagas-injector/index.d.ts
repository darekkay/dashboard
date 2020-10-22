declare module "redux-sagas-injector" {
  import { Saga, SagaMiddleware } from "@redux-saga/types";
  import { Store } from "redux";

  export function injectSaga(key: string, saga: Saga): void;

  export function createInjectSagasStore(
    { rootSaga },
    initialReducers,
    ...args
  ): Store;

  export const sagaMiddleware: SagaMiddleware;
}
