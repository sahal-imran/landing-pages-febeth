import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import LinkNav from 'next/link';

function Footer() {


    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0f1932', py: 8,mt:-1 }} >
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Box component={'div'} sx={{ position: 'relative', width: '100%',overflow:'hidden',borderRadius:'10px' }} >
                    <Box>
                        <Image
                            src={"/img/home/FooterPic.png"}
                            alt={"Background Image"}
                            layout={"fill"}
                            objectFit={"cover"}
                        />
                    </Box>
                    <Box component={'div'} sx={{
                        position: 'relative', width: {
                            md: '60%',
                            xs: '90%'
                        }, display: 'flex', justifyContent: 'center', alignItems: {
                            sm: 'start',
                            xs: 'center'
                        }, flexDirection: 'column', py: 6, px: {
                            md:4,
                            xs:1
                        },m:{
                            sm:'unset',
                            xs:'auto'
                        }
                    }} >
                        <Typography variant="h5" sx={{
                            fontSize: "36px", color: '#FFFFFF', fontWeight: 700, lineHeight: "43.57px", fontStyle: 'normal', letterSpacing: '1%', mb: 2, textAlign: {
                                md: 'start',
                                xs: 'center'
                            }
                        }} gutterBottom component="div">
                            Introducing Febeth Games
                        </Typography>
                        <Typography variant="subtitle" sx={{
                            fontSize: '18px', color: '#FFFFFF', fontWeight: 400, lineHeight: "21.78px", fontStyle: 'normal', mb: 4, textAlign: {
                                md: 'start',
                                xs: 'center'
                            }
                        }} gutterBottom component="div">
                            Learn more about Febeth GameFi Revolution, talk to Febeth team, join Febeth’s core contributors, and earn more Febeth tokens.
                        </Typography>
                        <Button variant="contained" sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '130px', py: 2, px: 3, lineHeight: '24.2px', fontWeight: 700, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '16px', '&:hover': {
                                backgroundColor: "#d1284d"
                            }
                        }} href="#">Join the community</Button>
                    </Box>
                </Box>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 14 }} >
                    <Image
                        src="/img/home/Logo.png"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                </Box>
                <Box sx={{
                    width: {
                        md: "40%",
                        sm: "80%",
                        xs: '90%'
                    }, mt: 4
                }} >
                    <Box component={'div'} sx={{ width:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={0} columnSpacing={{ xs: 1,sm:4 }} columns={{ xs: 9 }} >
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/facebook.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/twitter.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/M.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/unknown.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/youtub.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/telegrm.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/discord.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/linkedIn.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link href="#" underline="none">
                                        <Image
                                            src="/img/home/instagram.png"
                                            alt="binance"
                                            width={30}
                                            height={30}
                                            objectFit={'contain'}
                                        />
                                    </Link>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{
                    width: "100%", mt: 4
                }} >
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 4 }} columns={{ xs: 1, sm: 2, md: 4 }} >
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <LinkNav href="/policy">
                                        <a className='termsLink' >Privacy policy</a>
                                    </LinkNav>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <LinkNav href="/terms">
                                        <a className='termsLink' >Terms and conditons</a>
                                    </LinkNav>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Link sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '26px', fontStyle: 'normal', color: 'white' }} href="#" underline="none">
                                        hello@febeth.com
                                    </Link>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Typography variant="subtitle" sx={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 400, lineHeight: "26px", fontStyle: 'normal' }} gutterBottom component="div">
                                        Copyright © 2021 Febeth.
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
}

export default Footer;
