import React, { useState } from "react";
import clsx from "clsx";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplay } from "./TreeDisplay.component";

type TreeDisplayViewPropsVO = {
  currentNode: TreeNodeVO;
};

export const TreeDisplayView: React.FC<TreeDisplayViewPropsVO> = (
  props: TreeDisplayViewPropsVO
) => {
  const { currentNode } = props;
  const [isExpandNode, setIsExpandNode] = useState<boolean>(true);

  const renderCheckboxInput = () => (
    <div
      className={clsx("form-check", {
        "ms-2": !currentNode.children.length,
      })}
    >
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={`${currentNode.id}-checkbox`}
        onChange={() => setIsExpandNode(true)}
      />
      <label
        className="form-check-label"
        htmlFor={`${currentNode.id}-checkbox`}
      >
        {currentNode.name}
      </label>
    </div>
  );

  const renderExpandCollapseBtn = () => (
    <button
      type="button"
      onClick={() => setIsExpandNode(!isExpandNode)}
      className="btn btn-sm btn-flush"
    >
      <i
        className={clsx("bi bi-caret-down-fill text-white", {
          "bi-caret-down-fill": isExpandNode,
          "bi-caret-right-fill": isExpandNode,
        })}
      />
    </button>
  );

  return (
    <div className="ps-4 py-1">
      <div className="d-flex align-items">
        {!!currentNode.children.length && renderExpandCollapseBtn()}
        {renderCheckboxInput()}
      </div>
      {!!currentNode.children.length && isExpandNode && (
        <TreeDisplay treeNodes={currentNode.children} />
      )}
    </div>
  );
};
