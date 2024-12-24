import { TreeNodeVO } from "../TreeDisplay.model";

export type TreeDisplayReducerStateVO = {
  treeNodes: Array<TreeNodeVO>;
  isEditableNodePresent: boolean;
};

export type TreeDisplayReducerContextVO = [
  TreeDisplayReducerStateVO,
  React.Dispatch<TreeDisplayReducerVO>,
];

export enum TreeDisplayReducerActionType {
  SET_TREE_NODES = "TREE_DISPLAY_REDUCER_SET_TREE_NODES",
  SET_IS_EDITABLE_NODE_PRESENT = "TREE_DISPLAY_REDUCER_SET_IS_EDITABLE_NODE_PRESENT",
}

export type TreeDisplayReducerVO = {
  type: string;
  payload: Array<TreeNodeVO> | boolean;
};
