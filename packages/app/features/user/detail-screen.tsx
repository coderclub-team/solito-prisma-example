import { View, Text, Pressable } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { AuthGate } from '../auth/gate'
import { Touchable, TouchableOpacity } from 'react-native'

import { useAuth } from '../auth/context'
import { signOut } from '../auth/firebase'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const auth = useAuth()
  
  

  return (
    <AuthGate>
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>
        
<Text>UID {auth?.uid}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    
   <Pressable
   onPress={signOut}
   >
   <Text sx={{ color: 'blue', fontWeight: 'bold' }}>Sign Out</Text>
   </Pressable>
    </View>
    </AuthGate> 
  )
}
