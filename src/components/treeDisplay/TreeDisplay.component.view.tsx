import React from "react";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplay } from "./TreeDisplay.component";

type TreeDisplayViewPropsVO = {
  currentNode: TreeNodeVO;
};

export const TreeDisplayView: React.FC<TreeDisplayViewPropsVO> = (
  props: TreeDisplayViewPropsVO
) => {
  const { currentNode } = props;

  return (
    <div className="ps-4 py-1">
      <h3>{currentNode.name}</h3>
      {!!currentNode.children.length && <TreeDisplay treeNodes={currentNode.children} />}
    </div>
  );
};
