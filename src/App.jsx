import './App.css'
import Allfoter from './componemts/Allfoter/Allfoter'
import Header from './componemts/Header/Header'
import Navbar from './componemts/Navbar/Navbar'
import Premium from './componemts/Premium/Premium'
import Pricing from './componemts/Pricing/Pricing'
import Started from './componemts/Started/Started'
import Users from './componemts/Users/Users'
import Workflow from './componemts/Workflow/Workflow'


function App() {
  return (
    <>

      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Header></Header>
        <Users></Users>
        <Premium></Premium>
        <Started></Started>
        <Pricing></Pricing>
        <Workflow></Workflow>
      </main>

      <footer>
         <Allfoter></Allfoter>
      </footer>
    </>
  )
}

export default App
