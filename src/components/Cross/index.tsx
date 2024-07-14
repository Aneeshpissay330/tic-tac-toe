import { Point } from "../../pages/TicTacToe"
import Line from "../Line"

type CrossProps = {
    midpoint: Point
}

function Cross({ midpoint }: CrossProps) {
    const [x, y] = midpoint
    const length = 70
    const sin45 = 1 / Math.sqrt(2)

    const offset = (length / 2) * sin45

    return (
        <g>
            <Line
                color="text-[#4285F4]"
                from={[x - offset, y - offset]}
                to={[x + offset, y + offset]}
            />
            <Line
                color="text-[#4285F4]"
                from={[x - offset, y + offset]}
                to={[x + offset, y - offset]}
            />
        </g>
    )
}

export default Cross;