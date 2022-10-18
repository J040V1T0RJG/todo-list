import { NoTask } from "./NoTask"
import styles from "./Task.module.css"

function Task() {
    const total = 0

    return (
        <>
            <div className={styles.task}>
                <header>
                    <div className={styles.left}>
                        <p>Tarefas criadas</p>
                        <div className={styles.number}>0</div>
                    </div>
                    <div className={styles.rigth}>
                        <p>Concluídas</p>
                        <div className={styles.number}>0 de 5</div>
                    </div>
                </header>

                {total === 0 ? <NoTask /> : "modulo de tar"}
            </div>
        </>
    )
}

export {
    Task
}