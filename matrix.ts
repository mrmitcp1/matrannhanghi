function matrix(room:number[][]){
    let result : number = 0;

    for (let i = 0; i < room.length; i++) {
        for (let j = 0; j < room[i].length; j++) {
            if (i < room.length-1 && room[i][j]===0 ){
               result -= room[i+1][j]

            }else result += room[i][j]

        }
    }return result
}

let room = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3],[1,2,3,0]]
console.log(matrix(room))