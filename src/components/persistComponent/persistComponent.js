import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "../../store/store";

const PersistComponent = ({ children }) => {
  if (typeof window === undefined) {
    return children;
  } else {
    return (
      <PersistGate loading={null} persistor={persistedStore}>
        {() => children}
      </PersistGate>
    );
  }
};

export default PersistComponent;
