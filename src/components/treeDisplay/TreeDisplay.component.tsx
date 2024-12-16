import { useContext } from "react";
import { TreeDisplayView } from "./TreeDisplay.component.view";
import { onSetTreeNodes } from '../../actions/TreeView.actions';
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayContext } from "../../Context.provider";
import { TreeDisplayController } from "./TreeDisplay.controller";

type TreeDisplayPropsVO = {
  treeNodes: Array<TreeNodeVO>;
};

export const TreeDisplay: React.FC<TreeDisplayPropsVO> = (
  props: TreeDisplayPropsVO
) => {
  const { treeNodes } = props;
  const treeViewContext = useContext(TreeDisplayContext);

  const onSelectNode = (isNodeSelected: boolean, selectedNode: TreeNodeVO) => {
    const dispatch = treeViewContext?.[1];
    const treeViewState = treeViewContext?.[0];
    if (!dispatch || !treeViewState) return;

    TreeDisplayController.onSelectTreeNode(
      (updatedNodes) => { onSetTreeNodes(updatedNodes, dispatch); },
      selectedNode,
      treeViewState.treeNodes,
      isNodeSelected,
    )
  }

  return (
    <>
      {treeNodes.map((node) => (
        <div key={node.nodeId}>
          <TreeDisplayView
            currentNode={{ ...node }}
            onSelectNode={onSelectNode}
          />
        </div>
      ))}
    </>
  );
};
