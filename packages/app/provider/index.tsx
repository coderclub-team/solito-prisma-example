import { AuthProvider } from '@acme/app/features/auth/context'
import { Dripsy } from './dripsy'
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Dripsy>{children}</Dripsy>
    </AuthProvider>
  )
}
