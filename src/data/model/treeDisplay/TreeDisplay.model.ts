export interface TreeNodeVO {
    id: number;
    name: string;
    isActive: boolean;

    // to show that parent has partial active children
    indeterminate: boolean;
    children: Array<TreeNodeVO>;
}