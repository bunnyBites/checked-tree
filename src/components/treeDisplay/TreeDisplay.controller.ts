import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";

export class TreeDisplayController {
  public static readonly onSelectTreeNode = (
    setTreeNodes: (updatedTreeNodes: Array<TreeNodeVO>) => void,
    selectedNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>,
    isNodeSelected: boolean
  ): void => {
    const updatedSelectedNode: TreeNodeVO = {
      ...selectedNode,
      isActive: isNodeSelected,
    };

    // toggle all child nodes of the updated selectedNode based on isNodeSelected
    updatedSelectedNode.children =
      TreeDisplayController.toggleAllChildNodeActiveState(
        updatedSelectedNode.children,
        isNodeSelected
      );

    const updatedTreeNode = TreeDisplayController.updateTreeNode(updatedSelectedNode, treeNodes);
    setTreeNodes(updatedTreeNode);
  };

  private static readonly updateTreeNode = (
    updatedTreeNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>
  ): Array<TreeNodeVO> =>
    treeNodes.map((node) => {
      if (updatedTreeNode.id === node.id) {
        return updatedTreeNode;
      } else if (node.children.length) {
        node.children = TreeDisplayController.updateTreeNode(
          updatedTreeNode,
          node.children
        );
      }
      return node;
    });

  private static readonly toggleAllChildNodeActiveState = (
    childNodes: Array<TreeNodeVO>,
    isParentActive: boolean
  ): Array<TreeNodeVO> =>
    childNodes?.map((node) => ({
      ...node,
      isActive: isParentActive,
      children: TreeDisplayController.toggleAllChildNodeActiveState(
        node?.children,
        isParentActive
      ),
    }));
}
