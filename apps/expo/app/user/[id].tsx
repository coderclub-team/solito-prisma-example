import { UserDetailScreen } from '@acme/app/features/user/detail-screen'
import {AuthGate} from '@acme/app/features/auth/gate'
export default function UserDetail() {
  return <AuthGate><UserDetailScreen/></AuthGate>
}
