import './Board.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { moveDownAction, moveLeftAction, moveRightAction, moveUpAction } from './actions';


function Board() {
    const snake = useSelector((state) => state.snake);
    const dispatch = useDispatch();

    useEffect(() => {
        const keyPressed = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    dispatch(moveUpAction());
                    break;
                case 'ArrowDown':
                    dispatch(moveDownAction());
                    break;
                case 'ArrowLeft':
                    dispatch(moveLeftAction());
                    break;
                case 'ArrowRight':
                    dispatch(moveRightAction());
                    break;
                default:
            }
        }
        document.addEventListener('keydown', keyPressed);
        return () => document.removeEventListener('keydown', keyPressed);
    }, [dispatch])

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <div className="board">
            <table>
                <tbody>
                    {arr.map((y, key) => {
                        return (
                            <tr key={key}>
                                {arr.map(x => (snake.find(item => JSON.stringify(item) === JSON.stringify({ x: x, y: y })) ? <td key={x} id="snake"/> : <td key={x}/>))}
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default Board;