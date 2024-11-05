import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayView } from "./TreeDisplay.component.view";

type TreeDisplayPropsVO = {
  treeNodes: Array<TreeNodeVO>;
};

export const TreeDisplay: React.FC<TreeDisplayPropsVO> = (
  props: TreeDisplayPropsVO
) => {
  const { treeNodes } = props;

  return (
    <>
      {treeNodes.map((node) => (
        <div key={node.id}>
          <TreeDisplayView
            currentNode={{ ...node }}
          />
        </div>
      ))}
    </>
  );
};
