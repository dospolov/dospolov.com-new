export default function Layout({ currentSlug, children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
