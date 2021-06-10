function all_substrings(S) {
    const n = S.length;

    for (let len = 0; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len;
            console.log(S.substring(i, j));
        }
    }
}

function longest_substring(X, Y) {
    let m = X.length;
    let n = Y.length;

    L = new Array();
    for (let i = 0; i < m + 1; i++) L.push(new Array(n + 1));

    let result = 0;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0) {
                L[i][j] = 0;
            } else if (X[i - 1] === Y[j - 1]) {
                L[i][j] = L[i - 1][j - 1] + 1;
                result = Math.max(result, L[i][j]);
            } else {
                L[i][j] = 0;
            }
        }
    }

    return result;
}

const A = "ATCGAT";
const B = "AGATGC";

console.log(longest_substring(A, B));

//all_substrings("abcd");
