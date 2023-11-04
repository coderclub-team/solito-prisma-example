import { Text, View } from 'dripsy'
import { useAuth } from '../context'
import { signInAnonymously, signInWithEmailAndPassword, singinWithCredential } from '../firebase'

export function AuthGate({
  children,
}: {
  children: React.ReactNode | ((user: { uid: string }) => React.ReactNode)
}) {
  const auth = useAuth()

  const handleSignin = async () => {
    try {
     await signInWithEmailAndPassword("kaarulmurugan.new@gmail.com","Asdf@123$")
     

    } catch (error) {
      console.log(error)
    }
  }

  if (!auth) {
    return (
      <>
        <View
          sx={{
            bg: '$background',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text onPress={handleSignin}>Sign In</Text>
        </View>
      </>
    )
  }

  return <>{typeof children == 'function' ? children(auth) : children}</>
}
