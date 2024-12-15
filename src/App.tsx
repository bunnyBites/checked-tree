import { useReducer } from "react";
import { treeViewReducer } from "./reducers/TreeView.reducer";
import { initialTreeDisplayReducerValues } from "./data/constants/treeDisplay/treeDisplayReducer/TreeDisplayReducer.const";
import { TreeDisplayContext } from "./Context.provider";
import { TreeDisplayWrapper } from "./components/treeDisplay/TreeDisplay.wrapper";

export const App: React.FC = () => {
  const treeDisplayReducer = useReducer(treeViewReducer, initialTreeDisplayReducerValues);

  return (
    <TreeDisplayContext.Provider value={treeDisplayReducer}>
      <div className="bg-dark h-100 min-vh-100 text-light">
        {/* create tree view */}
        <div className="container">
          <div className="pt-5">
            <TreeDisplayWrapper />
          </div>
        </div>
      </div>
    </TreeDisplayContext.Provider>
  );
};
