let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
for (let i = 0; i < matrix.length-1; i++) {
    for (let j = 0; j < i; j++) {
        if (matrix[j-1] === 0){
            maxtrix[j]=0
        }
    }
}