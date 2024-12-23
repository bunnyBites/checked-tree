import { useContext } from "react";
import { TreeDisplayContext } from "../../Context.provider";
import { TreeDisplayView } from "./TreeDisplay.component.view";

export const TreeDisplayWrapper: React.FC = () => {
  const treeViewContext = useContext(TreeDisplayContext);

  return (
    <>
      {treeViewContext?.[0].treeNodes?.map((node) => (
        <div key={node.nodeId}>
          <TreeDisplayView
            currentNode={{ ...node }}
            isExpandNode={!!treeViewContext?.[0].isExpanded}
          />
        </div>
      ))}
    </>
  );
};
