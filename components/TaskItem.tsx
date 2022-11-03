import React from 'react'
import { Task } from '@prisma/client'
import { List } from '@mantine/core'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import useStore from '../store'
import { useMutateTask } from '../hooks/useMutateTask'

export const TaskItem: React.FC<
  Omit<Task, 'createdAt' | 'updatedAt' | 'userId'>
> = ({ id, title, description }) => {
  const update = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()

  return <div>TaskItem</div>
}
