import { useState } from "react";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplay } from "./TreeDisplay.component";
import { NodeInput } from "./nodeInput/NodeInput.component";
import { CheckboxInput } from "./checkboxInput/CheckboxInput.component";

type TreeDisplayViewPropsVO = {
  currentNode: TreeNodeVO;
};

export const TreeDisplayView: React.FC<TreeDisplayViewPropsVO> = (
  props: TreeDisplayViewPropsVO,
) => {
  const { currentNode } = props;
  const [isExpandNode, setIsExpandNode] = useState<boolean>(true);

  return (
    <div className="ps-4 py-1">
      <div className="d-flex align-items-center">
        {!currentNode.isEditMode && (
          <CheckboxInput
            currentNode={currentNode}
            isExpanded={isExpandNode}
            setIsExpandNode={setIsExpandNode}
          />
        )}
        {!!currentNode.isEditMode && <NodeInput currentNode={currentNode} />}
      </div>
      {!!currentNode.children.length && isExpandNode && (
        <div className="ps-2">
          <TreeDisplay treeNodes={currentNode.children} />
        </div>
      )}
    </div>
  );
};
