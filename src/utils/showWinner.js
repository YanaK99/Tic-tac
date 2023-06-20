export function showWinner (winner) {
    switch (winner) {
        case 'X' :
            return 'Winner X'
        case 'O' :
            return 'Winner O'
        default :
            return 'Friendship winner'
    }
}