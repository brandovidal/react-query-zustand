import './App.css'
import { Card } from './components/Card'

import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepos'

function App (): JSX.Element {
  const { data, isLoading } = useFetchRepositories('brandovidal')

  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading....</div>
  console.log({ data })

  return (
    <div>
      {data?.map((repository, index) => (
        <Card
          key={index}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  )
}

export default App
