import Header from './components/Header'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Category from './pages/Category'
import DetailPrd from './pages/DetailPrd'

function App() {

  return (
    <>
      <Header/>
      <main className="pt-4">
        <div className="container mx-auto flex gap-4">
          {/* <div className="hidden md:block"><Sidebar /></div> */}
          <DetailPrd />
        </div>
      </main>
    </>
  )
}

export default App