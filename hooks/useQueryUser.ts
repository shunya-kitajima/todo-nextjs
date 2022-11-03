import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { User } from '@prisma/client'

export const useQueryUser = () => {
  const router = useRouter()

  const getUser = async (): Promise<Omit<User, 'hashedPassword'>> => {
    const { data } = await axios.get<Omit<User, 'hashedPassword'>>(
      `${process.env.NEXT_PUBLIC_API_URL}/user`
    )
    return data
  }

  return useQuery<Omit<User, 'hashedPassword'>, Error>({
    queryKey: ['user'],
    queryFn: getUser,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}
