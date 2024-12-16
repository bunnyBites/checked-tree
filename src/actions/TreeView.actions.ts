import { TreeNodeVO } from "../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayReducerActionType, TreeDisplayReducerVO } from "../data/model/treeDisplay/treeDisplayReducer/TreeDisplayReducer.model";

export const onSetTreeNodes = (
    updatedNodes: Array<TreeNodeVO>,
    dispatch: React.Dispatch<TreeDisplayReducerVO>
) => {
    dispatch({
      type: TreeDisplayReducerActionType.SET_TREE_NODES,
      payload: updatedNodes,
    });
}