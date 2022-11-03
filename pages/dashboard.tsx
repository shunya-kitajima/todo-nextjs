import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/outline'
import { Layout } from '../components/Layout'
import { UserInfo } from '../components/UserInfo'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const logout = async (): Promise<void> => {
    queryClient.removeQueries(['user'])
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }

  return (
    <Layout title="Task Board">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={logout}
      />
      <UserInfo />
    </Layout>
  )
}

export default Dashboard
