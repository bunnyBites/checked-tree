import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";

export class TreeDisplayController {
  public static readonly removeEditableNodes = (
    treeNodes: Array<TreeNodeVO>,
  ): Array<TreeNodeVO> =>
    treeNodes
      .filter((node) => !node.isEditMode)
      .map((node) => ({
        ...node,
        children: TreeDisplayController.removeEditableNodes(node.children),
      }));

  public static readonly onSelectTreeNode = (
    setTreeNodes: (updatedTreeNodes: Array<TreeNodeVO>) => void,
    selectedNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>,
    isNodeSelected: boolean,
  ): void => {
    const updatedSelectedNode: TreeNodeVO = {
      ...selectedNode,
      isActive: isNodeSelected,
    };

    // toggle all child nodes of the updated selectedNode based on isNodeSelected
    updatedSelectedNode.children =
      TreeDisplayController.toggleAllChildNodeActiveState(
        updatedSelectedNode.children,
        isNodeSelected,
      );

    const updatedTreeNode = TreeDisplayController.updateTreeNode(
      updatedSelectedNode,
      treeNodes,
    );

    // toggle all parent nodes of the updated selectedNode
    TreeDisplayController.updateTillRootParentNode(
      updatedSelectedNode,
      updatedTreeNode,
    );

    // set the updatedTreeNode to state
    setTreeNodes(updatedTreeNode);
  };

  public static readonly updateTreeNode = (
    updatedTreeNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>,
  ): Array<TreeNodeVO> =>
    treeNodes.map((node) => {
      if (updatedTreeNode.nodeId === node.nodeId) {
        return updatedTreeNode;
      } else if (node.children.length) {
        node.children = TreeDisplayController.updateTreeNode(
          updatedTreeNode,
          node.children,
        );
      }
      return node;
    });

  private static readonly updateTillRootParentNode = (
    childNode: TreeNodeVO,
    treeNodes: Array<TreeNodeVO>,
  ): TreeNodeVO | null => {
    if (!childNode.parentId) return childNode;

    const parentNode = TreeDisplayController.getParentNode(
      childNode.parentId,
      treeNodes,
    );

    if (parentNode) {
      parentNode.children = parentNode.children.map((node) => {
        if (node.nodeId === childNode.nodeId) return childNode;
        return node;
      });

      const activeChildrenLen = parentNode.children.filter(
        (node) => node.isActive,
      ).length;
      const isActiveChildren = parentNode.children.length === activeChildrenLen;

      parentNode.isActive = isActiveChildren;

      parentNode.indeterminate =
        !!activeChildrenLen && activeChildrenLen < parentNode.children.length;

      return TreeDisplayController.updateTillRootParentNode(
        parentNode,
        treeNodes,
      );
    }

    return null;
  };

  private static getParentNode(
    parentId: string,
    treeNodesToBeProbed: Array<TreeNodeVO>,
  ): TreeNodeVO | undefined {
    for (const node of treeNodesToBeProbed) {
      if (node.nodeId === parentId) {
        return node;
      }

      if (node.children.length) {
        const searchedParentNode = TreeDisplayController.getParentNode(
          parentId,
          node.children,
        );

        if (searchedParentNode) return searchedParentNode;
      }
    }

    return undefined;
  }

  private static readonly toggleAllChildNodeActiveState = (
    childNodes: Array<TreeNodeVO>,
    isParentActive: boolean,
  ): Array<TreeNodeVO> =>
    childNodes?.map((node) => ({
      ...node,
      isActive: isParentActive,
      children: TreeDisplayController.toggleAllChildNodeActiveState(
        node?.children,
        isParentActive,
      ),
    }));
}
