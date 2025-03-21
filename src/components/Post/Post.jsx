import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

// author:  {avata_url, name, role}
// publishedAt:  {date, time}
// content:  String

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/tallesguerra.png" />

          <div className={styles.authorInfo}>
            <strong>Talles Guerra</strong>
            <span>FrontEnd Developer</span>
          </div>
        </div>

        <time title="14 de Março às 16:44h" dateTime="2025-03-14 16:44:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          <a href="">devTallesGuerra.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>

      <div className="commentList">
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
