import { useContext } from "react";
import PropsContext from "../context/PropsContext";

export default function usePropsContext() {
  return useContext(PropsContext);
}
