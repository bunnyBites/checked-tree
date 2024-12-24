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
      // you can use different library to generate unique id
      id: clonedCurrentNode.id + 20,
      name: "",
      isEditMode: true,
      children: [],
      indeterminate: false,
      isActive: false,
      parentId: clonedCurrentNode.nodeId,

      // you can use different library to generate unique id
      nodeId: `${currentNode.name}-${clonedCurrentNode.id + 20}`,
    };

    clonedCurrentNode.children.push(newChildNode);

    const updatedTreeNodes = TreeDisplayController.updateTreeNode(
      clonedCurrentNode,
      treeNodes,
    );

    onUpdateTreeNode(updatedTreeNodes);
  };
}
