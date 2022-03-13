import React from 'react'
import { styled, withStyles } from '@mui/styles'
import { Box, Button, Container, FormControl, Grid, InputBase, Link, Paper, Typography } from '@mui/material'
import madeInIndia from '../assets/icn_Made with Γ¥ñ∩╕Å in India.svg'
import isoCertified from '../assets/icn_ISO.svg'
import { useNavigate } from 'react-router-dom'

const styles = () => ({
    root: {
        width: '100%'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '15px 60px'
    },
    sectionIntro: {
        backgroundColor: '#fbf7f4',
        paddingLeft: '100px !important',
        paddingRight: '100px !important',
        paddingTop: '30px',
        paddingBottom: '30px'
    },
    paper: {
        padding: '30px 30px 70px',
        maxWidth: '340px',
        margin: '0 auto'
    }
})

const StyledPaper = styled(Paper)({
    borderRadius: '5px !important'
})

const Login = props => {
    const { classes } = props
    const navigate = useNavigate()
    const [counter, setCounter] = React.useState('')
    const [mobile, setMobile] = React.useState('')
    const [otp, setOtp] = React.useState('')
    const [sent, setSent] = React.useState(false)
    const handleChangeMobile = e => {
        setMobile(e.target.value)
    }
    const handleChangeOtp = e => {
        setOtp(e.target.value)
    }
    const sendOtp = () => {
        fetch('https://niobooks.in/api/web/request_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'client': 'web'
            },
            body: JSON.stringify({
                mobile_number: mobile
            })
        })
            .then(response => response.json())
            .then(() => {
                setSent(true)
            })
            .catch(err => console.log(err))
    }

    const handleLogin = () => {
        fetch('https://niobooks.in/api/web/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'client': 'web'
            },
            body: JSON.stringify({
                mobile_number: mobile,
                otp
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    window.localStorage.setItem('loggedIn', true)
                    window.localStorage.setItem('mobile', data.mobile_number)
                    window.localStorage.setItem('token', data.token)
                    navigate('/items')
                }
            })
            .catch(err => console.log(err))
    }
    React.useEffect(() => {
        if (sent) {
            setCounter('59')
        }
    }, [sent])
    React.useEffect(() => {
        let timeout
        if (counter > 0) {
            timeout = window.setTimeout(() => {
                if (counter < 11) {
                    setCounter('0' + (counter - 1))
                } else {
                    setCounter((counter - 1).toString())
                }
            }, 1000)
        } else {
            setSent(false)
        }
        return () => window.clearTimeout(timeout)
    }, [counter])
    return (
        <Container maxWidth='xl' className={classes.sectionIntro}>
            <Grid container>
                <Grid item container xs={12} sm={8} justifyContent='space-between' direction='column'>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                        <Typography variant='h3' sx={{ marginBottom: '10px' }}>Simple GST Billing & Stock Management</Typography>
                        <Typography variant='h4' sx={{ marginBottom: '20px' }}>software for your business</Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bolder', color: '#000000a3' }}>Atma Nirbhar Vyapaari bane</Typography>
                    </Grid>
                    <Grid item container spacing={3} xs={1}>
                        <Grid item>
                            <img src={madeInIndia} alt='Made in India' />
                        </Grid>
                        <Grid item>
                            <img src={isoCertified} alt='ISO Certified' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledPaper elevation={4} className={classes.paper}>
                        <Typography variant='h5' sx={{ marginBottom: '30px' }}>Login to myBillBook</Typography>
                        <Box component='form'>
                            <FormControl fullWidth sx={{ marginBottom: '25px' }}>
                                <Typography
                                    variant='subtitle2'
                                    sx={{
                                        fontWeight: 600,
                                        marginBottom: '10px',
                                        color: '#00000081'
                                    }}
                                >
                                    Enter Mobile Number
                                </Typography>
                                <InputBase
                                    sx={{
                                        border: '1px solid rgba(0, 0, 0, 0.1)',
                                        borderRadius: '2px',
                                        padding: '5px 15px'
                                    }}
                                    fullWidth
                                    type='tel'
                                    onChange={handleChangeMobile}
                                    value={mobile}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ marginBottom: '15px' }}>
                                <Typography
                                    variant='subtitle2'
                                    sx={{
                                        fontWeight: 600,
                                        marginBottom: '10px',
                                        color: '#00000081'
                                    }}
                                >
                                    Enter OTP
                                </Typography>
                                <InputBase
                                    sx={{
                                        border: '1px solid rgba(0, 0, 0, 0.1)',
                                        borderRadius: '2px',
                                        padding: '5px 15px'
                                    }}
                                    fullWidth
                                    type='number'
                                    onChange={handleChangeOtp}
                                    placeholder='One Time Password'
                                    value={otp}
                                />
                            </FormControl>

                            {sent && counter > 0 ? (
                                <Typography
                                    sx={{
                                        fontWeight: 'bolder',
                                        color: '#00000081',
                                        marginBottom: '40px'
                                    }}
                                >
                                    Resend OTP in <Typography component='span' sx={{ fontWeight: 'bolder', color: '#000' }}>00:{counter}</Typography> seconds
                                </Typography>
                            ) : (
                                <Link onClick={sendOtp}>
                                    <Typography
                                        color={mobile ? 'primary' : 'secondary'}
                                        sx={{
                                            fontWeight: 'bolder',
                                            marginBottom: '40px',
                                            cursor: mobile ? 'pointer' : 'not-allowed'
                                        }}
                                    >
                                        Send OTP
                                    </Typography>
                                </Link>
                            )}
                            <Button
                                variant='contained'
                                color='primary'
                                sx={theme => ({
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main
                                    },
                                    fontWeight: 'bolder'
                                })}
                                fullWidth
                                disabled={!otp || !mobile}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </Box>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Login)