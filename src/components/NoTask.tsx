import { ClipboardText } from "phosphor-react"
import styles from "./NoTask.module.css"

function NoTask() {
    return (
        <>
            <div className={styles.noTask}>
                <ClipboardText size={56} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </>
    )
}

export {
    NoTask
}