
import { useContext } from "react";
import { TreeDisplayContext } from "../../Context.provider";
import { TreeDisplayView } from "./TreeDisplay.component.view";
import { onSetTreeNodes } from '../../actions/TreeView.actions';
import { TreeDisplayController } from "./TreeDisplay.controller";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";

export const TreeDisplayWrapper: React.FC = (
) => {
  const treeViewContext = useContext(TreeDisplayContext);
  console.log(treeViewContext?.[0].treeNodes);

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
      {treeViewContext?.[0].treeNodes?.map((node) => (
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
