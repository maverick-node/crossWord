const puzzle = `10000..1000`
const words = [
    'eggs',
    'pasta',
]


function crosswordSolver(emptyPuzzle, words) {
    let lines = emptyPuzzle.split('\n')
    let puzzle = lines.map((line) => line.split(''))
    let start = getStartPosition(puzzle)
    console.log(puzzle)
    console.log(start)
    let place = []

    for (let idx in start) {
        for (let word of words) {
            let Placed = false
            if (canPlaceWord(puzzle, start[idx], word)) {
                place.push([word, start[idx]])
            }
        }
    }
    console.log(place)

}

function canPlaceWord(puzzle, start, word) {
    let [numW, row, col] = start;
    console.log(puzzle[row].slice(col))
    if (word.length <= puzzle[row].slice(col).length) {
        console.log("word: ", word)
        for (let i = 0; i < word.length; i++) {
            if (puzzle[row][+col + i] == '.' || puzzle[row][+col + word.length] != '.') {
                return false;
            } else {
                console.log(word, "err")
            }
        }
        return true;
    }


    if (row + word.length <= puzzle.length - row) {
        for (let i = 0; i < word.length; i++) {
            if (puzzle[+row + i][col] == '.') {
                return false;
            }
        }
        return true;
    }

    return false;

}


function getStartPosition(puzzle) {
    let start = []
    let x = 0
    for (let rows in puzzle) {
        for (let cols in puzzle[rows]) {
            if (puzzle[rows][cols] != '.' && puzzle[rows][cols] != '0') {
                start.push([puzzle[rows][cols], rows, cols])
            }
        }
    }
    return start
}

console.log(crosswordSolver(puzzle, words))