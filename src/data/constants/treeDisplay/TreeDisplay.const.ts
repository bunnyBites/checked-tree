import { TreeNodeVO } from "../../model/treeDisplay/TreeDisplay.model";

export const TREE_DISPLAY_MOCK: Array<TreeNodeVO> = [
  {
    id: 1,
    name: "Parent 1",
    isActive: false,
    indeterminate: false,
    children: [
      {
        id: 2,
        name: "Child 1.1",
        isActive: false,
        indeterminate: false,
        children: [],
      },
      {
        id: 3,
        name: "Child 1.2",
        isActive: false,
        indeterminate: false,
        children: [],
      },
    ],
  },
  {
    id: 4,
    name: "Parent 2",
    isActive: false,
    indeterminate: false,
    children: [
      {
        id: 5,
        name: "Child 2.1",
        isActive: false,
        indeterminate: false,
        children: [],
      },
      {
        id: 6,
        name: "Child 2.2",
        isActive: false,
        indeterminate: false,
        children: [],
      },
    ],
  },
];
