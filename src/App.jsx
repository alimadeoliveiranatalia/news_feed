import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61992237?v=4",
      name: "Diego Rocha",
      role: "Android Developer"
    },
    content: [
      { type: "paragraph", content: "Hello Guys 👋"},
      { type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur"}, 
      { type: "paragraph", content: "impedit velit soluta repellat harum molestias alias enim eos cumque modi"}, 
      { type: "paragraph", content: "Provident harum, consequatur non alias quas sint nobis ipsam officiis?"},
      { type: "link", content: "#space #universe"}
    ],
    publishedAt: new Date("2023-02-24 15:35:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/C5603AQGr2PwmekdtxA/profile-displayphoto-shrink_400_400/0/1647119064932?e=1682553600&v=beta&t=f38UH743StnDa-puiERuyEb7jEcDhhqp8wb1EWS2vns",
      name: "Iana Nadina",
      role: "CTO @Iana's Variedades"
    },
    content: [
      { type: "paragraph", content: "Hello Guys 👋"},
      { type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur"}, 
      { type: "paragraph", content: "impedit velit soluta repellat harum molestias alias enim eos cumque modi"}, 
      { type: "paragraph", content: "Provident harum, consequatur non alias quas sint nobis ipsam officiis?"},
      { type: "link", content: "#space #universe"}
    ],
    publishedAt: new Date("2023-02-23 16:55:00")
  }
];
export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
