import '../styles/globals.css'
import NavBar from './components/navbar'
import RightNavBar from './components/right-navbar'
import LeftBar from './components/left-bar'


export const metadata = {
  title: 'Isaac\'s Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  //wrap the navbar with a useClient to make it a client entry
  return (
    <html lang="en">
      <body className='flex flex-col bg-black'>
        {/* Include shared UI here e.g. a navbar */}
        <NavBar />
        <div className='flex flex-row'>
          <LeftBar />
          {children}
          <RightNavBar />
        </div>
      </body>
    </html>
  )
}
