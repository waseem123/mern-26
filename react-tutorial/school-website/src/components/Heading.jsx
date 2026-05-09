import { useContext } from "react"
import { LevelContext } from "./LevelContext"

export default function Heading({ children }) {

    const level = useContext(LevelContext)
    switch (level) {
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>

        default:
            return <h4>{children}</h4>
    }

}