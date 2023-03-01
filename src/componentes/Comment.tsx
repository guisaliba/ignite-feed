import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { TrashSimple, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://www.animeunited.com.br/oomtumtu/2020/04/Sem-T%C3%ADtulo-1-1.jpg"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Saliba</strong>
              <time title="13 de Julho às 14:35" dateTime="2022-07-13 14:35:45">
                Há 45min
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <TrashSimple size={22} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Gostei
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
