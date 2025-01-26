import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from "./apis/userApi";
import { publicApi } from "./apis/publicApi";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(publicApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useSignupMutation,
  useLoginMutation,
  useUpdateUserMutation,
  useFetchUserQuery,
} from "./apis/userApi";

export { useFetchUsersMutation } from "./apis/publicApi";

export { store };
