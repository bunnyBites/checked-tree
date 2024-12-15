
import { useContext } from "react";
import { TreeDisplayContext } from "../../Context.provider";
import { TreeDisplayView } from "./TreeDisplay.component.view";

export const TreeDisplayWrapper: React.FC = (
) => {
  const treeDisplayContext = useContext(TreeDisplayContext);

  return (
    <>
      {treeDisplayContext?.[0].treeNodes?.map((node) => (
        <div key={node.id}>
          <TreeDisplayView
            currentNode={{ ...node }}
          />
        </div>
      ))}
    </>
  );
};
