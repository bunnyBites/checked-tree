import { TreeDisplayView } from "./TreeDisplay.component.view";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";

type TreeDisplayPropsVO = {
  treeNodes: Array<TreeNodeVO>;
};

export const TreeDisplay: React.FC<TreeDisplayPropsVO> = (
  props: TreeDisplayPropsVO,
) => {
  const { treeNodes } = props;

  return (
    <>
      {treeNodes.map((node) => (
        <div key={node.nodeId}>
          <TreeDisplayView currentNode={{ ...node }} />
        </div>
      ))}
    </>
  );
};
