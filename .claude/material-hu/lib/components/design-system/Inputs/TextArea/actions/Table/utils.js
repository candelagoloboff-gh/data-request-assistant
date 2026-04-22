/**
 * Finds a node by type name(s) and its depth by iterating up the node hierarchy from a ResolvedPos.
 * Uses ProseMirror's ResolvedPos.node(depth) to traverse the document structure.
 * @param $pos - The ResolvedPos to search from
 * @param names - Array of node type names to search for
 * @returns An object with the node and its depth, or null if not found
 */
const findNode = ($pos, names) => {
    for (let depth = $pos.depth; depth >= 0; depth--) {
        const node = $pos.node(depth);
        if (node && names.includes(node.type.name)) {
            return { node, depth };
        }
    }
    return null;
};
export const getCanMergeCells = (editor) => {
    if (!editor)
        return false;
    if (!editor.isActive('table'))
        return false;
    const { selection } = editor.state;
    const { $anchor, $head } = selection;
    return $anchor.pos !== $head.pos;
};
export const getCanSplitCell = (editor) => {
    if (!editor)
        return false;
    if (!editor.isActive('table'))
        return false;
    const { selection } = editor.state;
    const { $anchor } = selection;
    const cellInfo = findNode($anchor, ['tableCell', 'tableHeader']);
    if (!cellInfo)
        return false;
    const attrs = cellInfo.node.attrs;
    return attrs.colspan > 1 || attrs.rowspan > 1;
};
