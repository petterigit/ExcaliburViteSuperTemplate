import { DevTool } from "@excaliburjs/dev-tools";
import { AllProps } from "../types";

export const useDevUtils = (props: AllProps) => {
  new DevTool(props.game);
};
