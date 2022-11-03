import React, { FormEvent } from 'react'
import { TextInput, Button, Center } from '@mantine/core'
import { IconDatabase } from '@tabler/icons'
import useStore from '../store'
import { useMutateTask } from '../hooks/useMutateTask'

export const TaskForm: React.FC = () => {
  const { editedTask } = useStore()
  const update = useStore((state) => state.updateEditedTask)
  const { createTaskMutation, updateTaskMutation } = useMutateTask()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === 0) {
      createTaskMutation.mutate({
        title: editedTask.title,
        description: editedTask.description,
      })
    } else {
      updateTaskMutation.mutate(editedTask)
    }
  }

  return <div>TaskForm</div>
}
