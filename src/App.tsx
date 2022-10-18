import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import "./global.css";
import styles from "./App.module.css"
import { Task } from "./components/Task";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <Task />
      </div>
    </>
  );
}

export { App };
