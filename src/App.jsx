import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Talles Guerra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse deserunt sed, qui ipsa tempora reiciendis architecto? Neque quis veritatis molestiae laborum. Quidem, ex similique ratione aspernatur optio architecto voluptates!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
