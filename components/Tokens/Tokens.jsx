import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Tokens() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ position: 'relative', width: '100%', backgroundColor: '#0f1932' }} >
            <Container maxWidth="lg" sx={{
                minHeight: "100vh", pt:20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }} >
                <Box component={'div'} sx={{
                    display: 'flex', justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    }, alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
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
                        py: {
                            md: 0,
                            xs: 8
                        }
                    }} >
                        <Typography variant="h2" sx={{
                            color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", fontStyle: 'normal', textAlign: {
                                md: 'start',
                                xs: 'center'
                            }
                        }} gutterBottom component="div">
                            Introducing Febeth Tokenized ETF
                        </Typography>
                        <Typography variant="subtitle" sx={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 400, lineHeight: "27px", fontStyle: 'normal' }} gutterBottom component="div">
                            Febeth ecosystem, over time, will release several products to make the community and accelerated projects self-sufficient and sustainable. Febeth tokens powers this ecosystem and is key to enhancing community-driven governance while empowering token holders with several advantages.
                        </Typography>
                        <Button variant="contained" sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '130px', mt: 6, py: 2, px: 3, lineHeight: '19.36px', fontWeight: 700, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
                                backgroundColor: "#d1284d"
                            }, fontSize: '16px'
                        }} href="#">Read Febeth Tokens Doc</Button>
                    </Box>
                    <Box component={'div'} sx={{
                        width: {
                            md: '50%',
                            sm: "80%",
                            xs: '90%'
                        }, display: 'flex', justifyContent: {
                            md: 'flex-end',
                            xs: 'center'
                        }, alignItems: 'center'
                    }} >
                        <Image
                            src="/img/Tokens/coin.png"
                            alt="HomePicture"
                            width={350}
                            height={400}
                        />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', my: 8 }} >
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 4 }} columns={{ xs: 1, md: 5 }} >
                            <Grid item xs={1}>
                                <Item sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center', width: '100%'
                                }} >
                                    <Image
                                        src="/img/Tokens/red.png"
                                        alt="red"
                                        width={10}
                                        height={100}
                                        objectFit={'contain'}
                                    />
                                    <Box component={'div'} sx={{ ml: 2, display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 200, fontSize: '18px', lineHeight: '32px', fontStyle: 'normal', textTransform: 'uppercase', textAlign: 'start' }} >
                                            token name
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '28px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                            na
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center'
                                }} >
                                    <Image
                                        src="/img/Tokens/blue.png"
                                        alt="red"
                                        width={10}
                                        height={100}
                                        objectFit={'contain'}
                                    />
                                    <Box component={'div'} sx={{ ml: 2, display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 200, fontSize: '18px', lineHeight: '32px', fontStyle: 'normal', textTransform: 'uppercase', textAlign: 'start' }} >
                                            current price
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '28px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                            NA
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center'
                                }} >
                                    <Image
                                        src="/img/Tokens/skyblue.png"
                                        alt="red"
                                        width={10}
                                        height={100}
                                        objectFit={'contain'}
                                    />
                                    <Box component={'div'} sx={{ ml: 2, display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 200, fontSize: '18px', lineHeight: '32px', fontStyle: 'normal', textTransform: 'uppercase', textAlign: 'start' }} >
                                            Maximum supply
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '28px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                            200 Million
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center'
                                }} >
                                    <Image
                                        src="/img/Tokens/skyblue.png"
                                        alt="red"
                                        width={10}
                                        height={100}
                                        objectFit={'contain'}
                                    />
                                    <Box component={'div'} sx={{ ml: 2, display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 200, fontSize: '18px', lineHeight: '32px', fontStyle: 'normal', textTransform: 'uppercase', textAlign: 'start' }} >
                                            Circulating supply
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '28px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                            na
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{
                                    display: 'flex', justifyContent: 'start', alignItems: 'center'
                                }} >
                                    <Image
                                        src="/img/Tokens/skyblue.png"
                                        alt="red"
                                        width={10}
                                        height={100}
                                        objectFit={'contain'}
                                    />
                                    <Box component={'div'} sx={{ ml: 2, display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 200, fontSize: '18px', lineHeight: '32px', fontStyle: 'normal', textTransform: 'uppercase', textAlign: 'start' }} >
                                            Circulating supply
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '28px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                            na
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box component={'div'} sx={{ my: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography component={'div'} variant='h3' sx={{ color: 'white', mb: 2, textAlign: 'center' }}>Why Febeth Tokens?</Typography>
                    <Typography component={'div'} variant='body' sx={{
                        width: {
                            md: '70%'
                        }, color: 'white', fontWeight: 200, fontSize: '18px', fontStyle: 'normal', textTransform: 'uppercase', lineHeight: '30px', letterSpacing: '1%', textAlign: 'center', mb: 6
                    }} >
                        Febeth tokens present to you the rare oppurtuity to be among the decesion markers and earners of one of the fastest gamefi hubs.
                    </Typography>
                    <Box sx={{ width: '100%' }} >
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 4 }} columns={{ xs: 1, md: 3 }} >
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 6, px: 2
                                        }} >
                                            <Image
                                                src="/img/Tokens/pic1.png"
                                                alt="binance"
                                                width={55}
                                                height={55}
                                                objectFit={'contain'}
                                            />
                                            <Typography component={'div'} variant='body' sx={{ mt: 4, color: 'white', fontWeight: 500, fontSize: '24px', fontStyle: 'normal', lineHeight: '29.05px' }} >
                                                Anti-whale mechanism
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 200, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }, mt: 1
                                            }} >
                                                Febeth tokens anti-whale mechanism democratizes power to all its users. Please check our whitepaper for more information.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 6, px: 2
                                        }} >
                                            <Image
                                                src="/img/Tokens/pic2.png"
                                                alt="binance"
                                                width={55}
                                                height={55}
                                                objectFit={'contain'}
                                            />
                                            <Typography component={'div'} variant='body' sx={{ mt: 4, color: 'white', fontWeight: 500, fontSize: '24px', fontStyle: 'normal', lineHeight: '29.05px' }} >
                                                Cross-border Structure
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 200, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }, mt: 1
                                            }} >
                                                Febeth tokens is cross-bordered which enables it to double as the utility and governance token for Febeth Inc.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 6, px: 2
                                        }} >
                                            <Image
                                                src="/img/Tokens/pic3.png"
                                                alt="binance"
                                                width={55}
                                                height={55}
                                                objectFit={'contain'}
                                            />
                                            <Typography component={'div'} variant='body' sx={{ mt: 4, color: 'white', fontWeight: 500, fontSize: '24px', fontStyle: 'normal', lineHeight: '29.05px' }} >
                                                Multichain Networks
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 200, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }, mt: 1
                                            }} >
                                                Febeth tokens is deployed on multichain netwoks to scale ease of transaction. Please check our docs for more information.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box component={'div'} sx={{
                    width: '100%', mt: {
                        md: 12,
                        xs: 4
                    }
                }} >
                    {/* <img style={{ width: '100%' }} src="img/Tokens/flow.png" alt="" /> */}
                    <Image
                        src="/img/Tokens/flow.png"
                        alt="binance"
                        width={1280}
                        height={900}
                        objectFit={'contain'}
                    />
                </Box>
            </Container>
        </Box>
    </>
}

export default Tokens;
