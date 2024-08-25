import { Box, Typography, IconButton } from '@mui/material'
import {
  Facebook,
  Instagram,
  EmailOutlined,
  YouTube,
  CallOutlined,
  WhatsApp,
} from '@mui/icons-material'
import PropTypes from 'prop-types'

const Footer = ({ links = {}, refs = {} }) => {
  const handleNavigation = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'var(--dark)',
        color: 'white',
        padding: '2rem',
        mt: 'auto',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
        flexWrap='wrap'
      >
        <Box
          component='a'
          href={links.locationLink || '#'}
          target='_blank'
          color='var(--light)'
        >
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            fontWeight={600}
            gutterBottom
          >
            Kerala Kuttichathan Jyothisyalaya
          </Typography>
          <Typography
            variant='body2'
            fontFamily='var(--font-title)'
            textTransform='capitalize'
          >
            Madhavan poduval (thantri),
            <br />
            Bunts Hostel,
            <br />
            Mangaluru, Karnataka - 575 003.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            gutterBottom
          >
            Quick Links
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
          >
            <Typography
              component='a'
              onClick={() => handleNavigation(refs.home)}
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              Home
            </Typography>
            <Typography
              component='a'
              onClick={() => handleNavigation(refs.about)}
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              About
            </Typography>
            <Typography
              component='a'
              onClick={() => handleNavigation(refs.services)}
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none', mb: 1 }}
            >
              Services
            </Typography>
            <Typography
              component='a'
              onClick={() => handleNavigation(refs.contact)}
              color='inherit'
              sx={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              Contact
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily='var(--font-title)'
            gutterBottom
          >
            Follow On
          </Typography>
          <Box display='flex'>
            {links.email && (
              <IconButton
                color='inherit'
                href={`mailto:${links.email}`}
                aria-label='Email'
              >
                <EmailOutlined />
              </IconButton>
            )}

            {links.facebookLink && (
              <IconButton
                color='inherit'
                href={links.facebookLink}
                target='_blank'
                aria-label='Facebook'
              >
                <Facebook />
              </IconButton>
            )}

            {links.instagramLink && (
              <IconButton
                color='inherit'
                href={links.instagramLink}
                target='_blank'
                aria-label='Instagram'
              >
                <Instagram />
              </IconButton>
            )}

            {links.phone && (
              <IconButton
                color='inherit'
                href={`tel:${links.phone}`}
                aria-label='Phone'
              >
                <CallOutlined />
              </IconButton>
            )}

            {links.phone && (
              <IconButton
                color='inherit'
                href={`https://wa.me/${links.phone}/`}
                target='_blank'
                aria-label='WhatsApp'
              >
                <WhatsApp />
              </IconButton>
            )}

            {links.youtubeLink && (
              <IconButton
                color='inherit'
                href={links.youtubeLink}
                target='_blank'
                aria-label='YouTube'
              >
                <YouTube />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        mt={3}
        textAlign='center'
      >
        <Typography
          variant='body2'
          color='inherit'
          fontFamily='var(--font-title)'
        >
          &copy; {new Date().getFullYear()} Kerala Kuttichathan Jyothisyalaya.
          All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  links: PropTypes.shape({
    email: PropTypes.string,
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    locationLink: PropTypes.string,
    phone: PropTypes.string,
    youtubeLink: PropTypes.string,
  }),
  refs: PropTypes.shape({
    home: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired,
    services: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired,
  }).isRequired,
}

export default Footer
