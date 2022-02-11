import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';

function Info() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0f1932', py: 10, mt: -1 }} >
            <Container maxWidth="lg" sx={{
                minHeight: "100vh", pt: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {
                    md: 'row',
                    xs: 'column'
                },
            }} >
                <Box component={'div'} sx={{
                    width: {
                        md: '50%',
                        sm: "80%",
                        xs: '90%'
                    }, display: 'flex', justifyContent: 'center', alignItems: {
                        md: 'start',
                        xs: 'center'
                    }, flexDirection: 'column',
                    mb: {
                        md: 0,
                        xs: 10
                    }
                }} >
                    <Typography variant="h5" sx={{
                        fontSize: "26px", color: '#FFFFFF', fontWeight: 600, lineHeight: "31.47px", fontStyle: 'normal', mb: 8, textAlign: {
                            md: 'start',
                            xs: 'center'
                        }
                    }} gutterBottom component="div">
                        At Febeth, we are developing<br /> scalable games on the blockchain ecosystems and protocols.
                    </Typography>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} >
                        <CheckCircleIcon sx={{ color: '#FF325F', mr: 1, }} />
                        <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 0, }} gutterBottom component="div">
                            Player friendly games
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} >
                        <CheckCircleIcon sx={{ color: '#FF325F', mr: 1 }} />
                        <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 0 }} gutterBottom component="div">
                            Metaverse environment
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} >
                        <CheckCircleIcon sx={{ color: '#FF325F', mr: 1 }} />
                        <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 0 }} gutterBottom component="div">
                            PVP & PVE games
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} >
                        <CheckCircleIcon sx={{ color: '#FF325F', mr: 1 }} />
                        <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 0 }} gutterBottom component="div">
                            Earn as you play
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }} >
                        <CheckCircleIcon sx={{ color: '#FF325F', mr: 1 }} />
                        <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 0 }} gutterBottom component="div">
                            Zero hidden charges on gaming assets
                        </Typography>
                    </Box>
                </Box>
                <Box component={'div'} sx={{
                    width: {
                        md: '50%',
                        sm: "90%",
                        xs: '100%'
                    }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
                }} >
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 4 }} columns={{ xs: 1, sm: 2 }} >
                        <Grid item xs={1}>
                            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',minHeight:'300px' }} >
                                <Box component={'div'} sx={{
                                    maxWidth: {
                                        sm: '100%',
                                        xs: "90%"
                                    }, display: 'flex', justifyContent: 'center', alignItems: {
                                        sm: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 3, borderRadius: '7px'
                                }} >
                                    <Box component={'div'} sx={{ mb: 5 }} >
                                        <Image
                                            src="/img/home/card1.png"
                                            alt="binance"
                                            width={55}
                                            height={55}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 2 }} gutterBottom component="div">
                                        Play & Earn Games
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontSize: '14px', color: '#f0f0f0', fontWeight: "lighter", lineHeight: "16.94px", fontStyle: 'normal', mb: 2, textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} gutterBottom component="div">
                                        Play multiple games in one platform, earn Febeth tokens  for your passion
                                    </Typography>
                                    <Link href="#" underline="none" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', lineHeight: '16.94px', color: '#FFFFFF' }}>
                                        Learn More <ArrowForwardIcon sx={{ fontSize: '14px', ml: 1 }} />
                                    </Link>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',minHeight:'300px' }} >
                                <Box component={'div'} sx={{
                                    maxWidth: {
                                        sm: '100%',
                                        xs: "90%"
                                    }, display: 'flex', justifyContent: 'center', alignItems: {
                                        sm: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 3, borderRadius: '7px'
                                }} >
                                    <Box component={'div'} sx={{ mb: 5 }} >
                                        <Image
                                            src="/img/home/card2.png"
                                            alt="binance"
                                            width={55}
                                            height={55}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 2 }} gutterBottom component="div">
                                        Febeth Token
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontSize: '14px', color: '#f0f0f0', fontWeight: "lighter", lineHeight: "16.94px", fontStyle: 'normal', mb: 2, textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} gutterBottom component="div">
                                        Febeth token, the utility token for Febeth ecosystem, will be across trading across  DExs & CExs
                                    </Typography>
                                    <Link href="#" underline="none" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', lineHeight: '16.94px', color: '#FFFFFF' }}>
                                        Learn More <ArrowForwardIcon sx={{ fontSize: '14px', ml: 1 }} />
                                    </Link>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',minHeight:'300px' }} >
                                <Box component={'div'} sx={{
                                    maxWidth: {
                                        sm: '100%',
                                        xs: "90%"
                                    }, display: 'flex', justifyContent: 'center', alignItems: {
                                        sm: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 3, borderRadius: '7px'
                                }} >
                                    <Box component={'div'} sx={{ mb: 5 }} >
                                        <Image
                                            src="/img/home/card3.png"
                                            alt="binance"
                                            width={55}
                                            height={55}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 2 }} gutterBottom component="div">
                                    Marketplace
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontSize: '14px', color: '#f0f0f0', fontWeight: "lighter", lineHeight: "16.94px", fontStyle: 'normal', mb: 2, textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} gutterBottom component="div">
                                        Febeth token, the utility token for Febeth ecosystem, will be across trading across  DExs & CExs
                                    </Typography>
                                    <Link href="#" underline="none" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', lineHeight: '16.94px', color: '#FFFFFF' }}>
                                        Learn More <ArrowForwardIcon sx={{ fontSize: '14px', ml: 1 }} />
                                    </Link>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={1}>
                            <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',minHeight:'300px' }} >
                                <Box component={'div'} sx={{
                                    maxWidth: {
                                        sm: '100%',
                                        xs: "90%"
                                    }, display: 'flex', justifyContent: 'center', alignItems: {
                                        sm: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 3, borderRadius: '7px'
                                }} >
                                    <Box component={'div'} sx={{ mb: 5 }} >
                                        <Image
                                            src="/img/home/card4.png"
                                            alt="binance"
                                            width={55}
                                            height={55}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "30px", fontStyle: 'normal', mb: 2 }} gutterBottom component="div">
                                        DAO
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontSize: '14px', color: '#f0f0f0', fontWeight: "lighter", lineHeight: "16.94px", fontStyle: 'normal', mb: 2, textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} gutterBottom component="div">
                                        Become part of Febeth governance, earn Febeth tokens as you decide
                                    </Typography>
                                    <Link href="#" underline="none" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', lineHeight: '16.94px', color: '#FFFFFF' }}>
                                        Learn More <ArrowForwardIcon sx={{ fontSize: '14px', ml: 1 }} />
                                    </Link>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </>;
}

export default Info;
