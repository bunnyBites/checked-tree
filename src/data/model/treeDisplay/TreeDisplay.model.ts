import uuid from "react-uuid";

export interface TreeNodeVO {
  name: string;
  isActive: boolean;
  parentId?: string;
  nodeId?: string;
  isEditMode?: boolean;

  // to show that parent has partial active children
  indeterminate: boolean;
  children: Array<TreeNodeVO>;
}

// helper function
export class TreeDisplayHelper {
  public static prepareTreeNodeInitialValues = (
    treeNodes: Array<TreeNodeVO>,
  ): Array<TreeNodeVO> =>
    treeNodes.map((node) => {
      const nodeId = node?.nodeId || uuid();

      return {
        ...node,
        parentId: "",
        nodeId,
        children: TreeDisplayHelper.prepareTreeNodeWithParentId(
          node.children,
          nodeId,
        ),
      };
    });

  private static prepareTreeNodeWithParentId = (
    childNodes: Array<TreeNodeVO>,
    parentNodeId: string,
  ): Array<TreeNodeVO> =>
    childNodes?.map((node) => {
      const nodeId = node?.nodeId || uuid();

      return {
        ...node,
        nodeId,
        parentId: parentNodeId,
        children: TreeDisplayHelper.prepareTreeNodeWithParentId(
          node.children,
          nodeId,
        ),
      };
    });
}
