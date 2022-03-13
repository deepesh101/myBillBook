import React from 'react'
import { withStyles, styled } from '@mui/styles'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import logo from '../assets/mbb_logo.svg'

const styles = theme => ({
    navLink: {
        margin: 'auto 20px'
    }
})

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#fff',
    paddingLeft: '50px',
    paddingRight: '50px'
})

const TopBar = props => {
    const { classes } = props
    return (
        <StyledAppBar color='inherit' position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        width: '100%'
                    }}>
                        <Box>
                            <img src={logo} alt='mbb_logo' />
                        </Box>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Box className={classes.navLink}>
                                <Typography variant='body2' color='primary' sx={{ fontWeight: 'bold' }}>Why Use My BillBook?</Typography>
                            </Box>
                            <Box className={classes.navLink}>
                                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>Who Is It For?</Typography>
                            </Box>
                            <Box className={classes.navLink}>
                                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>Online Store</Typography>
                            </Box>
                            <Box className={classes.navLink}>
                                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>Pricing</Typography>
                            </Box>
                            <Box className={classes.navLink}>
                                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>FAQs</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
}

export default withStyles(styles)(TopBar)