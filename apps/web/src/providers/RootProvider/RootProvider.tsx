import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IRootProvider } from './types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
})
export const RootProvider: FC<IRootProvider> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
