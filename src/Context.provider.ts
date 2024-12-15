import { createContext } from "react";
import { TreeDisplayReducerContextVO } from "./data/model/treeDisplay/treeDisplayReducer/TreeDisplayReducer.model";

export const TreeDisplayContext = createContext<TreeDisplayReducerContextVO | null>(
  null
);