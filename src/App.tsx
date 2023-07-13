import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

const posts: PostType[] = [
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
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
