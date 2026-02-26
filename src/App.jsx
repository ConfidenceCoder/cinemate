
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import { Header,Footer } from './components'
function App() {
  

  return (
    <div className='dark:bg-gray-800 min-h-screen dark:text-white flex flex-col'>
      <Header/>
      <section className="flex-grow">
      <AllRoutes/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
