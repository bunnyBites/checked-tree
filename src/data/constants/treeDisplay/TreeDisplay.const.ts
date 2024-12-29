import { TreeNodeVO } from "../../model/treeDisplay/TreeDisplay.model";

export const TREE_DISPLAY_MOCK: Array<TreeNodeVO> = [
  {
    name: "Parent 1",
    isActive: false,
    indeterminate: false,
    children: [
      {
        name: "Child 1.1",
        isActive: false,
        indeterminate: false,
        children: [],
      },
      {
        name: "Child 1.2",
        isActive: false,
        isEditMode: false,
        indeterminate: false,
        children: [],
      },
    ],
  },
  {
    name: "Parent 2",
    isActive: false,
    indeterminate: false,
    children: [
      {
        name: "Child 2.1",
        isActive: false,
        indeterminate: false,
        children: [],
      },
      {
        name: "Child 2.2",
        isActive: false,
        indeterminate: false,
        children: [],
      },
    ],
  },
];
