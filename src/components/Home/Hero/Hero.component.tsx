import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import UseStyles from './Hero.styles'

const Navbar: React.FC = () => {
  const styles = UseStyles()
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.topWrapper}></div>
          <div className={styles.mainWrapper}>
            <div className={styles.title}>AIR</div>
            <div className={styles.slogan}>
              Easy, efficient and incredibly enjoyable open-source programming
              language. See for yourself how easy it is!
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="contained" size="large">
                Get Started
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                Documentation
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                Download
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
