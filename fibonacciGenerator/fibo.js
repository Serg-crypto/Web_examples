

function fibonacciGenerator(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence;
}


