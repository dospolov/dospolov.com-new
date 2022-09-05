import clsx from 'clsx'

function Header({ blogLinkActive }) {
  return (
    <header className="max-w-6xl mx-auto p-4 sm:p-6 relative">
      <div className="flex justify-between">
        <a href="/" className="flex mr-8 sm:mr-16">
          <div className="w-10 mr-3">
            <img
              src={'/i-know-this-image-is-not-optimized.jpg'}
              alt={'Marat Dospolov'}
              width={40}
              height={40}
              className="rounded-full inline-block"
            />
          </div>
          <div className="pt-2">Marat Dospolov | JavaScript Tech Leader</div>
        </a>

        <nav>
          <ul className="flex flex-grow justify-end items-center">
            <li>
              <a
                href="/"
                className={clsx(
                  'text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out',
                  {
                    'border-b-2 border-purple-600': blogLinkActive
                  }
                )}
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
