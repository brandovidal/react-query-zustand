import { useFavoriteReposStore } from '../store/favoriteRepos'
import { Repository } from '../types/repository'

interface CardProps {
  repository: Repository
  isFavorite: boolean
}

const Card = ({ repository, isFavorite = false }: CardProps): JSX.Element => {
  const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteReposStore(
    state => state.removeFavoriteRepo
  )

  const toogleFavorite = (): void => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id)
      return
    }

    addFavoriteRepo(repository.id)
  }

  return (
    <div>
      <h3>{repository.name}</h3>
      <button onClick={toogleFavorite}>
        {isFavorite ? 'dislike' : 'like'}
      </button>
    </div>
  )
}

export { Card }
