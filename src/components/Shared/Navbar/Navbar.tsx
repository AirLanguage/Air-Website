import setLanguage from 'next-translate/setLanguage'
import NextLink from '@/material-ui/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize: 35 }}
          >
            AIR
          </Typography>

          {/* <Button onClick={async () => await setLanguage('en')}>EN</Button>
          <Button onClick={async () => await setLanguage('es')}>ES</Button>
          <Button onClick={async () => await setLanguage('fr')}>FR</Button>
          <Button onClick={async () => await setLanguage('de')}>DE</Button>
          <Button onClick={async () => await setLanguage('it')}>IT</Button>
          <Button onClick={async () => await setLanguage('se')}>SE</Button>
          <Button onClick={async () => await setLanguage('no')}>NO</Button>
          <Button onClick={async () => await setLanguage('pl')}>PL</Button>
          <Button onClick={async () => await setLanguage('ua')}>UA</Button>
          <Button onClick={async () => await setLanguage('ru')}>RU</Button>
          <Button onClick={async () => await setLanguage('jp')}>JP</Button>
          <Button onClick={async () => await setLanguage('cn')}>CN</Button> */}

          <Typography
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-evenly',
              fontSize: 17,
              textDecoration: 'none',
            }}
          >
            <NextLink href={{ pathname: '/about' }} color="inherit">
              Why Air?
            </NextLink>
            <NextLink href={{ pathname: '/about' }} color="inherit">
              Get Started
            </NextLink>
            <NextLink href={{ pathname: '/about' }} color="inherit">
              Docs
            </NextLink>
            <NextLink href={{ pathname: '/about' }} color="inherit">
              Play
            </NextLink>
            <NextLink href={{ pathname: '/about' }} color="inherit">
              Blog
            </NextLink>
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
