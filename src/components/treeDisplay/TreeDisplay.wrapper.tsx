import { useContext, useEffect } from "react";
import { TreeDisplayContext } from "../../Context.provider";
import { TreeDisplayView } from "./TreeDisplay.component.view";
import { TreeDisplayController } from "./TreeDisplay.controller";
import {
  onSetIsEditableNodePresent,
  onSetTreeNodes,
} from "../../actions/TreeView.actions";

export const TreeDisplayWrapper: React.FC = () => {
  const treeViewContext = useContext(TreeDisplayContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const treeNodes = treeViewContext?.[0].treeNodes;
      const dispatch = treeViewContext?.[1];

      if (event.key === "Escape" && treeNodes && dispatch) {
        const updatedTreeNodes = TreeDisplayController.removeEditableNodes(
          Array.from(treeNodes),
        );

        onSetIsEditableNodePresent(false, dispatch);
        onSetTreeNodes(updatedTreeNodes, dispatch);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [treeViewContext]);

  return (
    <>
      {treeViewContext?.[0].treeNodes?.map((node) => (
        <div key={node.nodeId}>
          <TreeDisplayView currentNode={{ ...node }} />
        </div>
      ))}
    </>
  );
};
