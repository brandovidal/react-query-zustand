import {
  QueryFunctionContext,
  useQuery,
  UseQueryResult
} from '@tanstack/react-query'
import api from '../api/github'

import { Repository } from '../types/repository'

async function fetchRepos (ctx: QueryFunctionContext): Promise<Repository[]> {
  const githubUser = ctx.queryKey.at(1) as string

  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`)
  return data
}

export const useFetchRepositories = (
  githubUser: string
): UseQueryResult<Repository[], unknown> =>
  useQuery(['repos', githubUser], fetchRepos)
