const gridTravelerTwo = (m ,n) => {
    const table = Array( m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
    return table;
}

console.log(gridTravelerTwo(2,2));
