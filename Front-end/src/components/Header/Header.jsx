import { Box } from '@mui/material'
import Link from '@mui/material/Link'
import './header.scss'

function Header() {
  return (
    <header className='header'>
      <Box className='header--logo'>
        <Link className='header--logo__link' href="#" underline="none">
          <img
            className='header--logo__img'
            src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
            alt=""
          />
          <span className='header--logo__text'>Tốt & Nhanh</span>
        </Link>
      </Box>

      {/* ===== Header main ===== */}
      <Box className='header--main'></Box>
    </header>
  )
}

export default Header