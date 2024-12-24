import { useContext } from "react";
import {
  onSetIsEditableNodePresent,
  onSetTreeNodes,
} from "../../../actions/TreeView.actions";
import { TreeDisplayContext } from "../../../Context.provider";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayController } from "../TreeDisplay.controller";
import { CheckboxInputView } from "./CheckboxInput.component.view";
import { CheckboxInputController } from "./CheckboxInput.controller";

type CheckboxInputPropsVO = {
  currentNode: TreeNodeVO;
  isExpanded: boolean;
  setIsExpandNode: (isExpanded: boolean) => void;
};

export const CheckboxInput: React.FC<CheckboxInputPropsVO> = (
  props: CheckboxInputPropsVO,
) => {
  const { currentNode, isExpanded, setIsExpandNode } = props;

  const treeViewContext = useContext(TreeDisplayContext);

  const onSelectNode = (isNodeSelected: boolean, selectedNode: TreeNodeVO) => {
    const dispatch = treeViewContext?.[1];
    const treeViewState = treeViewContext?.[0];
    if (!dispatch || !treeViewState) return;

    TreeDisplayController.onSelectTreeNode(
      (updatedNodes) => {
        onSetTreeNodes(updatedNodes, dispatch);
      },
      selectedNode,
      Array.from(treeViewState.treeNodes),
      isNodeSelected,
    );
  };

  const onAddNode = () => {
    const dispatch = treeViewContext?.[1];
    const treeViewState = treeViewContext?.[0];
    if (!dispatch || !treeViewState) return;
    onSetIsEditableNodePresent(true, dispatch);

    CheckboxInputController.onAddSubNode(
      (updatedNodes) => {
        onSetTreeNodes(updatedNodes, dispatch);
      },
      currentNode,
      Array.from(treeViewState.treeNodes),
    );
  };

  return (
    <CheckboxInputView
      isExpanded={isExpanded}
      onAddNode={onAddNode}
      setIsExpandNode={setIsExpandNode}
      onSelectNode={onSelectNode}
      currentNode={currentNode}
      isShowAddNodeBtn={!treeViewContext?.[0].isEditableNodePresent}
    />
  );
};
