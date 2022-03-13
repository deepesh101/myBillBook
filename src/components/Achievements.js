import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'

const Achievements = props => {
    return (
        <>
            <Divider sx={{ width: '17%', height: '3px', border: 'none', backgroundColor: '#DB631AD3' }} />
            <Container maxWidth='xl' sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '70px' }}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Grid item xs={3}>
                        <Typography color='primary' variant='h2'>1,00,000+</Typography>
                        <Typography>Businesses Trust us</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography color='primary' variant='h2'>30,00,000+</Typography>
                        <Typography>Invoices created</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography color='primary' variant='h2'>5,000+</Typography>
                        <Typography>Cities & towns in India</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography color='primary' variant='h2'>4.5&#x2605;</Typography>
                        <Typography>Rating on Google Play</Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Achievements