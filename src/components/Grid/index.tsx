import { MAX_HEIGHT, MAX_WIDTH } from "../../pages/TicTacToe";
import Line from "../Line";

function Grid() {
    return (
        <>
            <Line from={[0, MAX_HEIGHT / 3]} to={[MAX_WIDTH, MAX_HEIGHT / 3]} />
            <Line
                from={[0, (MAX_HEIGHT * 2) / 3]}
                to={[MAX_WIDTH, (MAX_HEIGHT * 2) / 3]}
            />
            <Line from={[MAX_WIDTH / 3, 0]} to={[MAX_WIDTH / 3, MAX_HEIGHT]} />
            <Line
                from={[(MAX_WIDTH * 2) / 3, 0]}
                to={[(MAX_WIDTH * 2) / 3, MAX_HEIGHT]}
            />
        </>
    )
}

export default Grid;