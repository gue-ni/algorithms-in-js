let ROOT = undefined;
const display = document.querySelector("#display");

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

function search(p, s) {
    while (p != null && p.key != s) {
        if (s < p.key) {
            p = p.left;
        } else {
            p = p.right;
        }
    }
    return p;
}

function minimum(p) {
    if (p == null) {
        return null;
    }

    while (p.left != null) {
        p = p.left;
    }

    return p;
}

function maximum(p) {
    if (p == null) {
        return null;
    }

    while (p.right != null) {
        p = p.right;
    }

    return p;
}

function predecessor(p) {
    if (p.left != null) {
        return maximum(p.left);
    } else {
        let q = p.parent;
        while (q != null && p == q.left) {
            p = q;
            q = q.parent;
        }
        return q;
    }
}

function successor(p) {
    if (p.right != null) {
        return minimum(p.right);
    } else {
        let q = p.parent;
        while (q != null && p == q.right) {
            p = q;
            q = q.parent;
        }
        return q;
    }
}

function remove(root, q) {
    let r;

    if (q.left == null || q.right == null) {
        r = q;
    } else {
        r = successor(q);
        q.key = r.key;
    }

    if (r.left != null) {
        p = r.left;
    } else {
        p = r.right;
    }

    if (p != null) {
        p.parent = r.parent;
    }

    if (r.parent == null) {
        root = p;
    } else {
        if (r == r.parent.left) {
            r.parent.left = p;
        } else {
            r.parent.right = p;
        }
    }
}

function insert_button(number) {
    number = Number(number);
    if (ROOT == undefined) {
        console.log(`making ${number} root`);
        ROOT = new Node(number);
    } else {
        console.log(`inserting: ${number}`);
        insert(ROOT, new Node(number));
    }

    console.log(ROOT);
}

function remove_button(number) {
    number = Number(number);
    if (!ROOT) {
        console.log("tree is empty");
        return;
    }

    const node = search(ROOT, number);

    if (!node) {
        console.log("found nothing");
    } else {
        remove(ROOT, node);
        console.log(ROOT);
    }
}

/*
let root = new Node(10);
insert(root, new Node(5));
insert(root, new Node(7));
insert(root, new Node(20));
insert(root, new Node(9));
insert(root, new Node(4));
console.log(root);
*/
