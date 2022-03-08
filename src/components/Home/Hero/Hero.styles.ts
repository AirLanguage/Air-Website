import { makeStyles } from '@mui/styles'
import Panda from '@/assets/home/panda.jpg'
import BlurPanda from '@/assets/home/blur.jpg'

const useStyles = makeStyles(() => ({
  section: {
    position: 'relative',
    backgroundImage: `url(${Panda.src})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#090909',
    backgroundAttachment: 'fixed',
    color: '#fff',
    height: 700,
    maxHeight: '100vh',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'brightness(0.9)',
  },
  wrapper: {
    width: 1200,
  },
  topWrapper: {},
  mainWrapper: {
    paddingTop: 30,
  },
  title: {
    fontFamily: 'Ethnocentric',
    lineHeight: '90px',
    fontSize: 120,
  },
  slogan: {
    fontSize: 24,
    lineHeight: '24px',
    width: 700,
    padding: '20px 0',
  },
  buttons: {},
}))

export default useStyles
