import { TreeDisplay } from "./components/treeDisplay/TreeDisplay.component"
import { TREE_DISPLAY_MOCK } from "./data/constants/treeDisplay/TreeDisplay.const"

export const App: React.FC = () => {
  return (
    <div className="bg-dark h-100 min-vh-100 text-light">
      {/* create tree view */}
      <TreeDisplay treeNodes={TREE_DISPLAY_MOCK} />
    </div>
  )
}
