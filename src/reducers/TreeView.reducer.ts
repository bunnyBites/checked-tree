import { initialTreeDisplayReducerValues } from "../data/constants/treeDisplay/treeDisplayReducer/TreeDisplayReducer.const";
import {
  TreeDisplayReducerActionType,
  TreeDisplayReducerVO,
  TreeDisplayReducerStateVO,
} from "../data/model/treeDisplay/treeDisplayReducer/TreeDisplayReducer.model";

export const treeViewReducer = (
  state: TreeDisplayReducerStateVO = initialTreeDisplayReducerValues,
  action: TreeDisplayReducerVO,
): TreeDisplayReducerStateVO => {
  switch (action.type) {
    case TreeDisplayReducerActionType.SET_IS_EDITABLE_NODE_PRESENT:
      return { ...state, isEditableNodePresent: !!action.payload };
    case TreeDisplayReducerActionType.SET_TREE_NODES: {
      return {
        ...state,
        treeNodes: Array.isArray(action.payload) ? [...action.payload] : [],
      };
    }
    default:
      return { ...state };
  }
};
