import './App.css'
import { Homepage } from './pages/MainHomepage'
import { NotificationProvider } from './context/NotificationContext'

function App() {

  return (
    <NotificationProvider>
      <Homepage/>
    </NotificationProvider>
  )
}

export default App
