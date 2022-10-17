import styles from "./NewTask.module.css"
import { PlusCircle } from "phosphor-react"

function NewTask() {
    return (
        <>
            <form className={styles.newTask}>
                <textarea 
                    name="new task"
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </>
    )
}

export {
    NewTask
}