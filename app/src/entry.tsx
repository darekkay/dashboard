import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "components/app";
import Loading from "components/loading";
import initStore from "state/store";

const { store, persistor, purgeStore } = initStore();
export const PersistorContext = React.createContext(purgeStore);

const Entry: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading className="mt-8" />} persistor={persistor}>
      <PersistorContext.Provider value={purgeStore}>
        <App />
      </PersistorContext.Provider>
    </PersistGate>
  </Provider>
);

export default Entry;
