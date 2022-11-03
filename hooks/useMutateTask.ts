import { useRouter } from 'next/router'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Task } from '@prisma/client'
import useStore from '../store'
import { EditedTask } from '../types'

export const useMutateTask = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const update = useStore((state) => state.updateEditedTask)
  const reset = useStore((state) => state.resetEditedTask)

  return {}
}
