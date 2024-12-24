import { useState } from "react";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";

type NodeInputPropsVO = {
  currentNode: TreeNodeVO;
  onAddNode: (nodeName: string) => void;
};

export const NodeInputView: React.FC<NodeInputPropsVO> = (
  props: NodeInputPropsVO,
) => {
  const { currentNode, onAddNode } = props;
  const [nodeName, setNodeName] = useState<string>("");

  return (
    <div className="input-group w-auto">
      <input
        type="text"
        maxLength={12}
        autoFocus
        className="form-control"
        name={currentNode.nodeId}
        onChange={(event) => {
          setNodeName(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" && nodeName.trim()) {
            onAddNode(nodeName.trim());
          }
        }}
      />
      <button
        type="button"
        disabled={!nodeName.trim()}
        onClick={() => onAddNode(nodeName.trim())}
        className="input-group-text btn btn-success"
        id="basic-addon1"
      >
        +
      </button>
    </div>
  );
};
