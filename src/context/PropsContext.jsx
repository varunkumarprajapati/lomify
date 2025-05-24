import { createContext } from "react";

const PropsContext = createContext();

function PropsProvider({ children }) {
  const data = {};
  return <PropsContext.Provider value={data}>{children}</PropsContext.Provider>;
}

export default PropsContext;
export { PropsProvider };
