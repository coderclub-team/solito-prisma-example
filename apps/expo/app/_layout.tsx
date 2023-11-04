import { Provider } from '@acme/app/provider'
import { Stack } from 'expo-router'
import { Platform } from 'react-native'
import Constants from 'expo-constants'
import { TRPCProvider } from '../utils/api'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const isExpoGo = Constants.appOwnership == "expo"
export default function Root() {
  if (isExpoGo) {
    return (
      <TRPCProvider>
        <SafeAreaProvider>
          <Provider>
            <Stack />
          </Provider>
        </SafeAreaProvider>
      </TRPCProvider>
    )
  }

  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
