import { Point } from "../../pages/TicTacToe";

type CircleProps = {
    midpoint: Point
}

function Circle({ midpoint }: CircleProps) {
    const [x, y] = midpoint
    return (
        <circle
            className="text-[#0F9D58] stroke-current fill-transparent"
            fill="transparent"
            cx={x}
            cy={y}
            r="30"
            strokeWidth="5"
        />
    )
}

export default Circle;