import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { SidebarContainer} from './Sidebar.style'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <hr />
      <LocationOnIcon style={{ color: 'red', fontSize: '30px', marginRight: '10px' }} />
      <MailOutlineIcon style={{ color: 'rgba(17, 244, 217, 1)', fontSize: '30px', marginRight: '10px' }} />
      <RingVolumeIcon style={{ color: 'yellow', fontSize: '30px', marginRight: '10px' }} />
      <GitHubIcon style={{ color: 'white', fontSize: '25px', marginRight: '10px' }} />
      <LinkedInIcon style={{ color: 'rgba(10, 211, 255, 1)', fontSize: '30px', marginRight: '10px' }} />
      <InstagramIcon style={{ color: 'rgba(203, 101, 252, 1)', fontSize: '30px', marginRight: '10px' }} />
    </SidebarContainer>
  )
}

export default Sidebar
