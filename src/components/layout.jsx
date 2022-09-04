import Footer from './Footer'
import '../styles/style.scss'

export default function Layout({ currentSlug, children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
