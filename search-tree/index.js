console.log("search tree");

class Node {
    left = null;
    right = null;
    parent = null;

    constructor(key) {
        this.key = key;
    }
}

function insert(root, q) {
    let r = null;
    let p = root;

    while (p != null) {
        r = p;
        if (q.key < p.key) {
            p = p.left;
        } else {
            p = p.right;
        }
    }

    q.parent = r;
    q.left = null;
    q.right = null;

    if (r == null) {
        root = q;
    } else {
        if (q.key < r.key) {
            r.left = q;
        } else {
            r.right = q;
        }
    }
}

// TODO
function predecessor(q) {}

// TODO
function successor(q) {}

// TODO
function remove(root, q) {
    let r;

    if (q.left == null || q.right == null) {
        r = q;
    } else {
    }
}

let root = new Node(10);
insert(root, new Node(5));
insert(root, new Node(7));
insert(root, new Node(20));
insert(root, new Node(9));

console.log(root);
