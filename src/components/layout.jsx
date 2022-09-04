import Header from './Header'
import Footer from './Footer'
import '../styles/style.scss'

export default function Layout({ currentSlug, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
