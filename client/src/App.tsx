import './styles/global.css'
import Habits from './components/Habits'

function App() {

  return (
    <div className="App">
      <Habits completed={35}/>
      <Habits completed={65}/>
      <Habits completed={15}/>
      <Habits completed={15}/>
    </div>
  )
}

export default App
