import PageBackground from './PageBackground'
import Header from './Header'
import Footer from './Footer'

const Container = ({ children, blogLinkActive = false }) => {
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageBackground />
        </div>
        <Header {...{ blogLinkActive }} />

        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Container
