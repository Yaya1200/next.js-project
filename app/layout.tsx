export const metadata = {
  title: 'Property Pulse',
  description: 'Find the perfect rental property',
  keywords: 'rental, property, real estate',
}
import Navbar from "./components/Navbar"

const MainLayout = ({children}:any)=> {
  return (
    <html>
      <head>
         <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default MainLayout