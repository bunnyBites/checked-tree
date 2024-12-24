import { useContext } from "react";
import { TreeDisplayContext } from "../../../Context.provider";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayController } from "../TreeDisplay.controller";
import { NodeInputView } from "./NodeInput.component.view";
import {
  onSetIsEditableNodePresent,
  onSetTreeNodes,
} from "../../../actions/TreeView.actions";

type NodeInputPropsVO = {
  currentNode: TreeNodeVO;
};

export const NodeInput: React.FC<NodeInputPropsVO> = (
  props: NodeInputPropsVO,
) => {
  const { currentNode } = props;
  const treeViewContext = useContext(TreeDisplayContext);

  const onAddNode = (nodeName: string) => {
    const treeNodeState = treeViewContext?.[0];
    const dispatch = treeViewContext?.[1];

    if (!treeNodeState || !dispatch) return;
    onSetIsEditableNodePresent(false, dispatch);

    const updatedCurrentNode: TreeNodeVO = {
      ...currentNode,
      isEditMode: false,
      name: nodeName,
    };

    // we are going to add new child to the current node
    // we are going to select this new child node by default
    // so we are going to use the onSelectTreeNode method
    // this will automatically create a new child node and update the tree nodes as well
    TreeDisplayController.onSelectTreeNode(
      (updatedTreeNodes) => {
        onSetTreeNodes(updatedTreeNodes, dispatch);
      },
      updatedCurrentNode,
      treeNodeState.treeNodes,
      true,
    );
  };

  return <NodeInputView onAddNode={onAddNode} currentNode={currentNode} />;
};
