import React from 'react'

const MainLayout = ({children}:any)=> {
  return (
    <html>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default MainLayout