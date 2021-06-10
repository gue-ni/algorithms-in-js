class Job {
    constructor(id, start, end, weight) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.weight = weight;
    }

    overlaps(job) {
        return Math.min(this.end, job.end) - Math.max(this.start, job.start) > 0;
    }
}

const jobs = [
    null,
    new Job(1, 4, 12, 1),
    new Job(2, 11, 27, 7),
    new Job(3, 20, 30, 4),
    new Job(4, 35, 45, 4),
    new Job(5, 14, 58, 10),
    new Job(6, 55, 70, 4),
    new Job(7, 72, 89, 4),
    new Job(8, 87, 98, 2),
    new Job(9, 53, 99, 3),
];

console.log("jobs", jobs);

const N = jobs.length;
const P = [null];

for (let i = 1; i < jobs.length; i++) {
    let p = 0;
    for (let j = i - 1; j > 0; j--) {
        if (!jobs[i].overlaps(jobs[j])) {
            p = jobs[j].id;
            break;
        }
    }

    //console.log(`p(${jobs[i].id})=${p}`);
    P[jobs[i].id] = p;
}

console.log("P", P);

const M = new Array(N).fill(null);
M[0] = 0;

function compute_opt(j) {
    if (j == 1) {
        return 0;
    } else {
        return Math.max(jobs[j].weight + compute_opt(P[j]), compute_opt(j - 1));
    }
}

function m_compute_opt(j) {
    if (M[j] == null) {
        M[j] = Math.max(jobs[j].weight + m_compute_opt(P[j]), m_compute_opt(j - 1));
    }
    return M[j];
}

for (let n = 1; n < N; n++) {
    const opt = m_compute_opt(n);
    console.log(`OPT(${n})=${opt}`);
}

function answer(j) {
    let a1 = jobs[j].weight + M[P[j]];
    let a2 = M[j - 1];
    let a3 = M[j];
    return { "wj+M[p(j)]": a1, "M[j-1]": a2, "M[j]": a3 };
}

for (let i = 1; i < N; i++) {
    console.log(i, answer(i));
}

console.log("M", M);
