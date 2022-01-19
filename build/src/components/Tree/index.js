import Tree$1 from './Tree/index.js';
import TreeCategory from './TreeCategory/index.js';
import TreeItem from './TreeItem/index.js';

var Tree = Object.assign(Tree$1, {
    Category: TreeCategory,
    Item: TreeItem,
});

export { Tree as default };
