import React from 'react'
import { Button, Container, Grid, Link, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import youtube from '../assets/icn_youtube.svg'
import facebook from '../assets/icn_Facebook.svg'
import instagram from '../assets/icn_instagram.svg'
import twitter from '../assets/icn_Twitter.svg'
import linkedin from '../assets/icn_linkedin.svg'
import whatsapp from '../assets/icn_whatsapp.svg'
import chatWithUs from '../assets/icn_chat with us.svg'

const styles = theme => ({
    marginRight: {
        marginRight: '10px'
    }
})

const Footer = props => {
    const { classes } = props
    return (
        <Container
            maxWidth='xl'
            sx={{
                paddingLeft: '90px !important',
                paddingRight: '100px !important',
                marginBottom: '70px'
            }}
        >
            <Grid container spacing={4}>
                <Grid item container xs={4}>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }} color='primary'>Get in touch</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }} color='secondary'>
                            <Link href='mailto:help@flobiz.in' color='inherit' sx={{ textDecoration: 'none' }}>help@flobiz.in</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h4' sx={{ lineHeight: 2.5 }}>
                            +91 74004 17400
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={1}>
                        <Grid item>
                            <Button
                                variant='contained'
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#128C7E2a',
                                    '&:hover': {
                                        backgroundColor: '#128C7E2a' 
                                    }
                                }} 
                                disableElevation
                            >
                                <img src={whatsapp} alt='whatsapp' className={classes.marginRight} />
                                <Typography component='span' sx={{ color: '#128C7E', fontWeight: 'bold' }}>WhatsApp us</Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#488DFF2a',
                                    '&:hover': {
                                        backgroundColor: '#488DFF2a' 
                                    }
                                }}
                                disableElevation
                            >
                                <img src={chatWithUs} alt='chatWithUs' className={classes.marginRight} />
                                <Typography component='span' sx={{ color: '#488DFF', fontWeight: 'bold' }}>Chat with us</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={5}>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }} color='primary'>Information</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>Refund Policy</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }} color='primary'>Privacy Policy</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>Terms and Conditions</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>FAQs</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>Pricing</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>Flobiz Business Group</Typography>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>Blogs</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid item xs={12}>
                        <Typography variant='h5' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }} color='primary'>Follow us</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={youtube} alt='social media' />
                        <img src={facebook} alt='social media' />
                        <img src={instagram} alt='social media' />
                        <img src={twitter} alt='social media' />
                        <img src={linkedin} alt='social media' />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' sx={{ fontWeight: 'bolder', lineHeight: 2.5 }}>FloBooks is a product by <Link href='https://flobiz.in'>Flobiz</Link></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Footer)