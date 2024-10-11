// StoreProvider.tsx
"use client";

import React, { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore, Persistor } from "redux-persist";
import { makeStore } from "@/store/store";

interface StoreProviderProps {
  children: ReactNode;
}

const store = makeStore();
const StoreProvider = ({ children }: StoreProviderProps) => {
  const persistor: Persistor = useMemo(() => persistStore(store), []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
