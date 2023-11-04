import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { useEffect } from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { api as nextapi } from '../../../../apps/next/utils/api'
import { api as expoapi } from '../../../../apps/expo/utils/api'
import { Platform, TouchableOpacity } from 'react-native'
import { useAuth } from '../auth/context'

export function HomeScreen() {
  let api = Platform.OS === 'web' ? nextapi : expoapi
  const { data, isLoading, mutateAsync,error } =
    api.auth.register_request.useMutation()
  const handleCreateBtnPress = () => {
    mutateAsync({
      phone: '9944781012',
    })
      .then((res) => {
      })
      .catch((err) => {
      })
  }
  useEffect(() => {},[data])
  const auth = useAuth()
  //  const {data:session}= api.auth.getSession.useQuery()

  const sx = useSx()
  useEffect(() => {
    
   if(error) {
    console.log(error?.message)
    alert(error?.message)
   }
  }, [error])

  if (isLoading)
    return (
      <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
      <Row>
        <TouchableOpacity onPress={handleCreateBtnPress}>
          <Text>create</Text>
        </TouchableOpacity>
      </Row>
    </View>
  )
}
