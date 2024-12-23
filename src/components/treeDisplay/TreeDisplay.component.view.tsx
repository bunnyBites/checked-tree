import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { TreeNodeVO } from "../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplay } from "./TreeDisplay.component";
import { NodeInput } from "./nodeInput/NodeInput.component";

type TreeDisplayViewPropsVO = {
  currentNode: TreeNodeVO;
  onSelectNode: (isNodeSelected: boolean, selectedNode: TreeNodeVO) => void;
};

export const TreeDisplayView: React.FC<TreeDisplayViewPropsVO> = (
  props: TreeDisplayViewPropsVO,
) => {
  const { currentNode, onSelectNode } = props;
  const [isExpandNode, setIsExpandNode] = useState<boolean>(true);

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = currentNode.indeterminate;
    }
  }, [currentNode.indeterminate]);

  const renderCheckboxInput = () => (
    <div
      className={clsx("form-check", {
        "ms-2": !currentNode.children.length,
      })}
    >
      <input
        className="form-check-input"
        type="checkbox"
        checked={currentNode.isActive}
        id={`${currentNode.id}-checkbox`}
        ref={checkboxRef}
        onChange={(event) => {
          onSelectNode(event.target.checked, currentNode);
          setIsExpandNode(true);
        }}
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
        className={clsx("text-white", {
          "bi-caret-down-fill": isExpandNode,
          "bi-caret-right-fill": !isExpandNode,
        })}
      />
    </button>
  );

  return (
    <div className="ps-4 py-1">
      <div className="d-flex align-items-center">
        {!!currentNode.children.length && renderExpandCollapseBtn()}
        {!currentNode.isEditMode && renderCheckboxInput()}
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
