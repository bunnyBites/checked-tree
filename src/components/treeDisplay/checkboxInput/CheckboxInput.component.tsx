import { useContext } from "react";
import { onSetTreeNodes } from "../../../actions/TreeView.actions";
import { TreeDisplayContext } from "../../../Context.provider";
import { TreeNodeVO } from "../../../data/model/treeDisplay/TreeDisplay.model";
import { TreeDisplayController } from "../TreeDisplay.controller";
import { CheckboxInputView } from "./CheckboxInput.component.view";

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

  return (
    <CheckboxInputView
      isExpanded={isExpanded}
      setIsExpandNode={setIsExpandNode}
      onSelectNode={onSelectNode}
      currentNode={currentNode}
    />
  );
};
