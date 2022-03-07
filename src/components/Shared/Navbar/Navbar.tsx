import setLanguage from 'next-translate/setLanguage'

function Navbar() {
  return (
    <nav>
      <button onClick={async () => await setLanguage('en')}>EN</button>
      <button onClick={async () => await setLanguage('es')}>ES</button>
      <button onClick={async () => await setLanguage('fr')}>FR</button>
      <button onClick={async () => await setLanguage('de')}>DE</button>
      <button onClick={async () => await setLanguage('it')}>IT</button>
      <button onClick={async () => await setLanguage('se')}>SE</button>
      <button onClick={async () => await setLanguage('no')}>NO</button>
      <button onClick={async () => await setLanguage('pl')}>PL</button>
      <button onClick={async () => await setLanguage('ua')}>UA</button>
      <button onClick={async () => await setLanguage('ru')}>RU</button>
      <button onClick={async () => await setLanguage('jp')}>JP</button>
      <button onClick={async () => await setLanguage('cn')}>CN</button>
    </nav>
  )
}

export default Navbar
