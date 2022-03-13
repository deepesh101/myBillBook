import React from 'react'
import { withStyles } from '@mui/styles'
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import crown from '../assets/icn_pricing_crown.svg'
import device from '../assets/icn_devices.svg'
import checked from '../assets/icn_ic_check-fill.svg'
import doubleChecked from '../assets/icn_ic_check-double-fill.svg'
import moneyBack from '../assets/icn_moneyback.svg'

const styles = theme => ({
    border: {
        borderRadius: '4px',
        border: '2px solid silver',
        padding: '15px 15px 30px'
    },
    marginRight: {
        marginRight: '10px'
    }
})

const Pricing = props => {
    const { classes } = props
    return (
        <>
            <Container maxWidth='xl' sx={{ paddingLeft: '100px !important', paddingRight: '100px !important', marginBottom: '60px' }}>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='h4'>Now try all benefits of My BillBook app</Typography>
                        <Typography variant='h4' color='primary' sx={{ fontWeight: 'bolder' }}>Free for 14 days</Typography>
                    </Grid>
                    <Grid item>
                        <img src={moneyBack} alt='moneyBack' />
                    </Grid>
                </Grid>
            </Container>
            <Container
                maxWidth='xl'
                sx={{
                    paddingLeft: '100px !important',
                    paddingRight: '100px !important',
                    marginBottom: '70px'
                }}
            >
                <Grid container spacing={3} alignItems='stretch'>
                    <Grid item container xs={4}>
                        <Grid item container className={classes.border} spacing={1} direction='column'>
                            <Grid item>
                                <img src={crown} alt='crown' />
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Silver Plan</Typography>
                            </Grid>
                            <Grid item sx={{ marginBottom: '10px' }}>
                                <Typography variant='body2'>
                                    <Typography component='span' sx={{ textDecoration: 'line-through', color: 'gray' }}>₹ 1299</Typography>{' '}
                                    <Typography component='span' variant='h4' sx={{ color: '#7882A4' }}>₹ 799</Typography>{' '}
                                    /year
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                alignItems='center'
                                justifyContent='center'
                                sx={{
                                    backgroundColor: '#EEEEEE',
                                    color: '#7882A4',
                                    padding: '8px'
                                }}
                            >
                                <img src={device} alt='device' className={classes.marginRight} />
                                <Typography component='span' sx={{ fontWeight: 'bolder' }}>Mobile + Desktop</Typography>
                            </Grid>
                            <Grid item>
                                <List>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Unlimited Stock Adjustments</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>GST Reports, Profits & Loss Report</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Remove MyBillBook from Invoice</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Only Mobile Device supported</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>+5 more features</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4} sx={{ position: 'relative' }}>
                        <Box
                            sx={(theme) => ({
                                background: theme.palette.primary.main,
                                color: '#fff',
                                position: 'absolute',
                                padding: '3px 25px',
                                borderRadius: '20px',
                                top: '5px',
                                right: '20px'
                            })}
                        >
                            <Typography sx={{ fontSize: '12px', fontWeight: 'bolder' }}>Most Popular</Typography>
                        </Box>
                        <Grid item container className={classes.border} sx={{ backgroundColor: '#fbf7f4', borderColor: 'gold' }} direction='column' spacing={1}>
                            <Grid item>
                                <img src={crown} alt='crown' />
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Gold Plan</Typography>
                            </Grid>
                            <Grid item sx={{ marginBottom: '10px' }}>
                                <Typography variant='body2'>
                                    <Typography component='span' sx={{ textDecoration: 'line-through', color: 'gray' }}>₹ 2599</Typography>{' '}
                                    <Typography component='span' variant='h4' sx={{ color: '#F0A500' }}>₹ 1799</Typography>{' '}
                                    /year
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                alignItems='center'
                                justifyContent='center'
                                sx={{
                                    backgroundColor: '#FFB72B3a',
                                    color: '#F0A500',
                                    padding: '8px'
                                }}
                            >
                                <img src={device} alt='device' className={classes.marginRight} />
                                <Typography component='span' sx={{ fontWeight: 'bolder' }}>Mobile + Desktop</Typography>
                            </Grid>
                            <Grid item>
                                <List>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={doubleChecked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>All Silver Features</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Add <Typography component='span' color='inherit' sx={{ fontWeight: 'bold' }}>upto 5 staff</Typography> to My BillBook</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Unlimited Mobile + Desktop Logins</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item container className={classes.border} spacing={1} direction='column' alignItems='flex-start'>
                            <Grid item>
                                <img src={crown} alt='crown' />
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' sx={{ fontWeight: 'bolder' }}>Diamond Plan</Typography>
                            </Grid>
                            <Grid item sx={{ marginBottom: '10px' }}>
                                <Typography variant='body2'>
                                    <Typography component='span' sx={{ textDecoration: 'line-through', color: 'gray' }}>₹ 4599</Typography>{' '}
                                    <Typography component='span' variant='h4' color='primary'>₹ 3599</Typography>{' '}
                                    /year
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                alignItems='center'
                                justifyContent='center'
                                sx={theme => ({
                                    backgroundColor: '#FFBC803a',
                                    color: theme.palette.primary.main,
                                    padding: '8px'
                                })}
                            >
                                <img src={device} alt='device' className={classes.marginRight} />
                                <Typography component='span' sx={{ fontWeight: 'bolder' }}>Mobile + Desktop</Typography>
                            </Grid>
                            <Grid item>
                                <List>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={doubleChecked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>All Gold Features</Typography>
                                    </ListItem>
                                    <ListItem sx={{ padding: '5px 0px' }}>
                                        <img src={checked} alt='checked' className={classes.marginRight} />
                                        <Typography component='span' color='secondary'>Add <Typography component='span' color='inherit' sx={{ fontWeight: 'bold' }}>unlimited staff</Typography> to My BillBook</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default withStyles(styles)(Pricing)