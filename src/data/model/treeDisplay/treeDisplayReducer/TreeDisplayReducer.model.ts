import { TreeNodeVO } from "../TreeDisplay.model";

export type TreeDisplayReducerStateVO = {
  treeNodes: Array<TreeNodeVO>;
};

export type TreeDisplayReducerContextVO = [
  TreeDisplayReducerStateVO,
  React.Dispatch<TreeDisplayReducerVO>,
];

export enum TreeDisplayReducerActionType {
  SET_TREE_NODES = "TREE_DISPLAY_REDUCER_SET_TREE_NODES",
}

export type TreeDisplayReducerVO = {
  type: string;
  payload: Array<TreeNodeVO>;
};
