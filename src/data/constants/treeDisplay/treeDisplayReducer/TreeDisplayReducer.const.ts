import { TreeDisplayReducerStateVO } from "../../../model/treeDisplay/treeDisplayReducer/TreeDisplayReducer.model";
import { TREE_DISPLAY_MOCK } from "../TreeDisplay.const";

export const initialTreeDisplayReducerValues: TreeDisplayReducerStateVO = {
  treeNodes: [...TREE_DISPLAY_MOCK],
};