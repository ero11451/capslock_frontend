
import { HelmetProvider } from 'react-helmet-async'
import AppNavigation from './navigation/Navigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (

    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HelmetProvider>
        <div className="main-page-wrapper">
          <AppNavigation />
        </div>
      </HelmetProvider>
    </Provider>

    </QueryClientProvider>
  )
}

export default App
