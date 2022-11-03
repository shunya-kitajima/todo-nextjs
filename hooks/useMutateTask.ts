import { useRouter } from 'next/router'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Task } from '@prisma/client'
import useStore from '../store'
import { EditedTask } from '../types'

export const useMutateTask = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedTask)

  const createTaskMutation = useMutation(
    async (task: Omit<EditedTask, 'id'>) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/todo`,
        task
      )
      return res.data
    },
    {
      onSuccess: (res: any) => {
        const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
        if (previousTasks) {
          queryClient.setQueryData<Task[]>(
            ['tasks'],
            [res.data, ...previousTasks]
          )
        }
        reset()
      },
      onError: (err: any) => {
        if (err.response.status === 401 || err.response.status === 403)
          router.push('/')
      },
    }
  )

  return {}
}
