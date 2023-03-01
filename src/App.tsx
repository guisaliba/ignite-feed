//author: { avatar_url "", name: "", role: ""}
//publishedAt: Date
//content: String

import { Header } from './componentes/Header'
import { Post } from './componentes/Post'
import { Sidebar } from './componentes/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://i.pinimg.com/564x/00/cb/0b/00cb0b930a775fb15b7bd2907b9f362d.jpg',
      name: 'Guilherme Saliba',
      role: 'React Student',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal!' },

      {
        type: 'paragraph',
        content:
          'Acabei de terminar mais um projeto e quero compartilhá-lo aqui com vocês! Estou treinando React e o projeto chama Ignite Feed! Dá uma olhada aí, se liga no link:',
      },

      { type: 'link', content: 'saliba.design/feedreact' },
    ],
    publishedAt: new Date('2022-07-12 13:52:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://www.animeunited.com.br/oomtumtu/2020/04/Sem-T%C3%ADtulo-1-1.jpg',
      name: 'Gabriel Saliba',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'E aí galera!!' },

      {
        type: 'paragraph',
        content:
          'Passando aqui pra avisar que programar em React é bem maneiro, e tem bastante conteúdo gratuito na internet. Juntei vários aqui no link:',
      },

      { type: 'link', content: 'link.reactjs/conteudo' },
    ],
    publishedAt: new Date('2022-07-13 19:52:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
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
