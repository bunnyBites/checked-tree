import { useEffect, useRef } from "react";
import clsx from "clsx";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";

type CheckboxInputViewPropsVO = {
  currentNode: TreeNodeVO;
  onSelectNode: (isSelected: boolean, selectedNode: TreeNodeVO) => void;
  isExpanded: boolean;
  setIsExpandNode: (isExpanded: boolean) => void;
  onAddNode: () => void;
  isShowAddNodeBtn: boolean;
};

export const CheckboxInputView: React.FC<CheckboxInputViewPropsVO> = (
  props: CheckboxInputViewPropsVO,
) => {
  const {
    currentNode,
    onSelectNode,
    isExpanded,
    setIsExpandNode,
    onAddNode,
    isShowAddNodeBtn,
  } = props;

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = currentNode.indeterminate;
    }
  }, [currentNode.indeterminate]);

  const renderExpandCollapseBtn = () => (
    <button
      type="button"
      onClick={() => setIsExpandNode(!isExpanded)}
      className="btn btn-sm btn-flush"
    >
      <i
        className={clsx("text-white", {
          "bi-caret-down-fill": isExpanded,
          "bi-caret-right-fill": !isExpanded,
        })}
      />
    </button>
  );

  return (
    <>
      {!!currentNode.children.length && renderExpandCollapseBtn()}
      <div className="d-flex align-items-center">
        <div
          className={clsx("form-check", {
            "ms-2": !currentNode.children.length,
          })}
        >
          <input
            className="form-check-input"
            type="checkbox"
            checked={currentNode.isActive}
            id={`${currentNode.nodeId}-checkbox`}
            ref={checkboxRef}
            onChange={(event) => {
              onSelectNode(event.target.checked, currentNode);
              setIsExpandNode(true);
            }}
          />
          <label
            className="form-check-label"
            htmlFor={`${currentNode.nodeId}-checkbox`}
          >
            {currentNode.name}
          </label>
        </div>
        {isShowAddNodeBtn && (
          <button
            onClick={onAddNode}
            type="button"
            className="btn btn-dark btn-sm ms-2"
          >
            +
          </button>
        )}
      </div>
    </>
  );
};
