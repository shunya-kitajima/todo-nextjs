import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Task } from '@prisma/client'

export const useQueryTasks = () => {
  const router = useRouter()

  const getTasks = async (): Promise<Task[]> => {
    const { data } = await axios.get<Task[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/todo`
    )
    return data
  }

  return useQuery<Task[], Error>({
    queryKey: ['todos'],
    queryFn: getTasks,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}
