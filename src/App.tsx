import './App.css'
import { Homepage } from './pages/MainHomepage'
import { NotificationProvider } from './context/NotificationContext'
import { DarkModeProvider } from '@/hooks/useDarkMode'

function App() {

  return (
    <NotificationProvider>
      <DarkModeProvider>
        <Homepage/>
      </DarkModeProvider>
    </NotificationProvider>
  )
}

export default App
