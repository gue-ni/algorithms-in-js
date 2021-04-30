let ROOT = undefined;
const display = document.querySelector("#display");

class Node {
    left = null;
    right = null;
    parent = null;
    height = 0;

    constructor(key) {
        this.key = key;
    }
}

function insert(root, q) {}

function remove(root, q) {}

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
