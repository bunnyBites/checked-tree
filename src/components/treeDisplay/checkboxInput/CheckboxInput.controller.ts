import uuid from "react-uuid";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayController } from "../TreeDisplay.controller";

export class CheckboxInputController {
  public static onAddSubNode = (
    onUpdateTreeNode: (updatedNodes: Array<TreeNodeVO>) => void,
    currentNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>,
  ): void => {
    const clonedCurrentNode = { ...currentNode };

    const newChildNode: TreeNodeVO = {
      name: "",
      isEditMode: true,
      children: [],
      indeterminate: false,
      isActive: false,
      parentId: clonedCurrentNode.nodeId,
      nodeId: uuid(),
    };

    // Create new array of children to avoid mutation
    clonedCurrentNode.children = [...clonedCurrentNode.children, newChildNode];

    const activeChildrenLen = clonedCurrentNode.children.filter(
      (node) => node.isActive,
    ).length;

    clonedCurrentNode.isActive =
      activeChildrenLen === clonedCurrentNode.children.length;
    clonedCurrentNode.indeterminate =
      activeChildrenLen > 0 &&
      activeChildrenLen < clonedCurrentNode.children.length;

    const updatedTreeNodes = TreeDisplayController.updateTreeNode(
      clonedCurrentNode,
      treeNodes,
    );

    onUpdateTreeNode(updatedTreeNodes);
  };
}
