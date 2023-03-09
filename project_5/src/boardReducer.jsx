const initialState = {
    snake: [
        { x: 4, y: 4 },
        { x: 3, y: 4 },
        { x: 2, y: 4 }
    ],
    direction: 'right'
};

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVE_UP':
            return {
                snake: (state.direction !== 'down' && state.snake[0].y !== 0) ? [{ x: state.snake[0].x, y: state.snake[0].y - 1 }, ...state.snake.slice(0, 2)] : [...state.snake],
                direction: (state.direction !== 'down' && state.snake[0].y !== 0) ? 'up' : state.direction
            };
        case 'MOVE_DOWN':
            return {
                snake: (state.direction !== 'up' && state.snake[0].y !== 9) ? [{ x: state.snake[0].x, y: state.snake[0].y + 1 }, ...state.snake.slice(0, 2)] : [...state.snake],
                direction: (state.direction !== 'up' && state.snake[0].y !== 0) ? 'down' : state.direction
            };
        case 'MOVE_RIGHT':
            return {
                snake: (state.direction !== 'left' && state.snake[0].x !== 9) ? [{ x: state.snake[0].x + 1, y: state.snake[0].y }, ...state.snake.slice(0, 2)] : [...state.snake],
                direction: (state.direction !== 'left' && state.snake[0].x !== 9) ? 'right' : state.direction
            };
        case 'MOVE_LEFT':
            return {
                snake: (state.direction !== 'right' && state.snake[0].x !== 0) ? [{ x: state.snake[0].x - 1, y: state.snake[0].y }, ...state.snake.slice(0, 2)] : [...state.snake],
                direction: (state.direction !== 'right' && state.snake[0].x !== 0) ? 'left' : state.direction
            };
        default:
            return state;
    }
}

