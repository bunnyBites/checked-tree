// checked-tree/src/components/treeDisplay/nodeInput/NodeInput.component.tsx
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
      isActive: false,
      indeterminate: false,
    };

    const updatedTreeNodes = TreeDisplayController.updateTreeNode(
      updatedCurrentNode,
      treeNodeState.treeNodes,
    );

    onSetTreeNodes(updatedTreeNodes, dispatch);
  };

  return <NodeInputView onAddNode={onAddNode} currentNode={currentNode} />;
};
