import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

// author:  {avata_url, name, role}
// content:  String
// publishedAt:  {date, time}

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tallesguerra.png",
      name: "Talles Guerra",
      role: "FrontEnd Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jantale.design/doctorcare" },
    ],
    publishedAt: new Date("2025-03-18 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jantale.design/doctorcare" },
    ],
    publishedAt: new Date("2025-03-20 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
