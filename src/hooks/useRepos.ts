import { useQuery, UseQueryResult } from '@tanstack/react-query'
import api from '../api/github'

import { Repository } from '../types/repository'

async function fetchRepos (): Promise<Repository[]> {
  const { data } = await api.get<Repository[]>('/users/brandovidal/repos')
  return data
}

export const useFetchRepositories = (): UseQueryResult<Repository[], unknown> =>
  useQuery(['repos'], fetchRepos)
