import './styles.css';
import { LevelContext } from "./LevelContext"

export default function Division({ level, children }) {
    return (
        <section className="borderclass">
            <LevelContext value={level+1}>
                {children}
            </LevelContext>
        </section>
    );
}