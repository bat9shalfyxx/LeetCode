// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    let isMirror = (l: TreeNode | null, r: TreeNode | null): boolean => {
        if (l === null && r === null) {
            return true;
        }
        if (l === null || r === null) {
            return false;
        }
        if (r.left !== l.right || r.right !== l.left) {
            return false;
        }
        return isMirror(l.left, r.left) && isMirror(l.right, r.right);
    };

    return isMirror(root.left, root.right);
}
