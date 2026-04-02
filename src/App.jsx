import { Suspense } from 'react'
import './App.css'
import Allfoter from './componemts/Allfoter/Allfoter'
import Header from './componemts/Header/Header'
import Navbar from './componemts/Navbar/Navbar'
import Premium from './componemts/Premium/Premium'
import Pricing from './componemts/Pricing/Pricing'
import Started from './componemts/Started/Started'
import Users from './componemts/Users/Users'
import Workflow from './componemts/Workflow/Workflow'
import PremiumHeader from './componemts/PremiumHeader/PremiumHeader'


const fetchData =async()=>{
   const res = await fetch("/data.json")
   return res.json();
}

function App() {

  const cardPromise= fetchData();
  return (
    <>

      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Header></Header>
        <Users></Users>
          <PremiumHeader></PremiumHeader>
        <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
            <Premium cardPromise={cardPromise}>
              
            </Premium>
        </Suspense>
        
        {/* <Started></Started>
        <Pricing></Pricing>
        <Workflow></Workflow> */}
      </main>

      <footer>
         {/* <Allfoter></Allfoter> */}
      </footer>
    </>
  )
}

export default App
