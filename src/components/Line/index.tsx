import { Point } from "../../pages/TicTacToe"

type LineProps = {
    from: Point
    to: Point
    color?: string
}

function Line({ from, to, color }: LineProps) {
    return (
        <line
            x1={from[0]}
            y1={from[1]}
            x2={to[0]}
            y2={to[1]}
            className={`${color || "text-[#F4B400]"} stroke-current`}
            strokeWidth={5}
        ></line>
    )
}

export default Line;