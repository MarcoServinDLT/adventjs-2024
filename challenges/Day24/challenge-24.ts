export function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
    if(!tree1 || !tree2)
        return [tree1 === tree2, ''];
    const [l, vl] = isTreesSynchronized(tree1.left, tree2.right);
    const [r, vr] = isTreesSynchronized(tree1.right, tree2.left);
    return [
        (tree1.value === tree2.value) && l && r,
        tree1.value
    ];
}
