import React from 'react'
import { List, ThemeIcon, Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { TaskItem } from './TaskItem'

export const TaskList: React.FC = () => {
  const { data, status } = useQueryTasks()

  return <div>TaskList</div>
}
