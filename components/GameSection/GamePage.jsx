import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function GamePage() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0f1932' }} >
            <Container maxWidth="md" sx={{
                minHeight: "100vh", pt: 20, pb: 8, display: 'flex', justifyContent: 'cenetr', alignItems: 'center', flexDirection: 'column'
            }} >
                <Typography variant="h5" sx={{
                    fontSize: "36px", color: '#FFFFFF', fontWeight: 500, lineHeight: "43.57px", fontStyle: 'normal', letterSpacing: '1%', mb: 2, textAlign: 'center'
                }} gutterBottom component="div">
                    Febeth Game Hub
                </Typography>
                <Typography variant="subtitle1" sx={{
                    fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "28px", fontStyle: 'normal', letterSpacing: '1%', textAlign: 'center', mb: 12,
                }} gutterBottom component="div">
                    Be part of Febeth’s GameFi Revolution. Febeth partners with other traditional game developers  across the globe to integrate their games on blockchain.
                    You can refer to Febeth Game Hub Document for more information
                </Typography>
                <Box sx={{ width: '100%', mb: 12 }} >
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 4 }} columns={{ xs: 1, sm: 2 }} >
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game1.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game2.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game3.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game4.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game5.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Link href="#" underline="none">
                                    <Image
                                        src="/img/Game/game6.png"
                                        alt="binance"
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                    />
                                </Link>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{
                    fontSize: "36px", color: '#FFFFFF', fontWeight: 500, lineHeight: "43.57px", fontStyle: 'normal', letterSpacing: '1%', mb: 6, textAlign: 'center'
                }} gutterBottom component="div">
                    List your games on Febeth GameFi Hub, earn Febeth Tokens on every game playes.
                </Typography>
                <Button variant="contained" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '130px', py: 2, px: 3, lineHeight: '24.2px', fontWeight: 700, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '16px',mb:4, '&:hover': {
                        backgroundColor: "#d1284d"
                    }
                }} href="#">Send us a proposal </Button>
                <Typography variant="subtitle1" sx={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 700, lineHeight: "31px", fontStyle: 'normal', letterSpacing: '1%', textAlign: 'center', mb: 6 }} gutterBottom component="div">
                    NB: Proposals will be reviewed by the Febeth team but approved by
                    Febeth’s Decentralized Autonomous Organization (DAO).
                </Typography>
            </Container>
        </Box>
    </>
}

export default GamePage;
