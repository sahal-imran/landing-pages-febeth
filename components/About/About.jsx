import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageGallery from 'react-image-gallery';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function About() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'center',
        background: "none",
        // boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0f1932', py: 16 }} >
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }} >
                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Box component={'dev'} sx={{
                        width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                            md: 'start',
                            xs: 'center'
                        }, flexDirection: 'column'
                    }} >
                        <Typography component={'div'} variant='h3' sx={{ color: 'white', my: 2 }}>Teron Motors</Typography>
                        <Typography component={'div'} variant='body' sx={{
                            color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', textAlign: {
                                md: 'start',
                                xs: 'center'
                            }
                        }} >
                            The future of hyper cars. Own the high performing electric car of the future,<br />
                            strong limited to 5 units and 5 colors
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{
                        mt: 4, width: '100%', display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box component={'div'} sx={{
                            mt: {
                                md: 0,
                                xs: 4
                            },
                            width: {
                                md: '60%',
                                xs: '90%'
                            }
                        }} >
                            <ImageGallery showNav={false} showPlayButton={false} showFullscreenButton={false} items={images} />
                        </Box>
                        <Box component={'div'} sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)', px: 3, py: {
                                md: 4,
                                sm: 6,
                                xs: 4
                            }, borderRadius: '30px', mt: {
                                md: 0,
                                xs: 14
                            }, ml: {
                                md: 4
                            }, width: {
                                md: '40%',
                                xs: '90%'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mb: {
                                md: 13
                            }
                        }} >
                            <Typography component={'div'} variant='h3' sx={{ color: 'white', mb: 1 }}>BMW MT5</Typography>
                            <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                ID#3322
                            </Typography>
                            <Box component={'div'} sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                        SPEED
                                    </Typography>
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                        7.6
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ overflow: 'hidden', borderRadius: '10px', mt: 1, width: '100%', height: '4px', background: '#DFD4FE' }} >
                                    <Box component={'div'} sx={{ width: '90%', height: '100%', background: '#FA180C' }} ></Box>
                                </Box>
                            </Box>
                            <Box component={'div'} sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                        acceleration
                                    </Typography>
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                        7.6
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ overflow: 'hidden', borderRadius: '10px', mt: 1, width: '100%', height: '4px', background: '#DFD4FE' }} >
                                    <Box component={'div'} sx={{ width: '80%', height: '100%', background: '#FA180C' }} ></Box>
                                </Box>
                            </Box>
                            <Box component={'div'} sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                        handling
                                    </Typography>
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', }} >
                                        7.6
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ overflow: 'hidden', borderRadius: '10px', mt: 1, width: '100%', height: '4px', background: '#DFD4FE' }} >
                                    <Box component={'div'} sx={{ width: '70%', height: '100%', background: '#FA180C' }} ></Box>
                                </Box>
                            </Box>
                            <Box component={'div'} sx={{ mt: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', textTransform: 'uppercase' }} >
                                        durability
                                    </Typography>
                                    <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 400, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                        7.6
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ overflow: 'hidden', borderRadius: '10px', mt: 1, width: '100%', height: '4px', background: '#DFD4FE' }} >
                                    <Box component={'div'} sx={{ width: '90%', height: '100%', background: '#FA180C' }} ></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box component={'div'} sx={{ mt: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography component={'div'} variant='h3' sx={{ color: 'white', mb: 2, textAlign: 'center' }}>Feature Highlights</Typography>
                    <Box sx={{ width: '100%', mt: 6 }} >
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Grid container rowSpacing={8} columnSpacing={{ xs: 8 }} columns={{ xs: 2, sm: 4 }} >
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            5 <Box component={'span'} sx={{ fontSize: '12px' }} >9-speed</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Passenger capacity
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            2.0L <Box component={'span'} sx={{ fontSize: '12px' }} >inline-4 turbo</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Engine
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            255hp <Box component={'span'} sx={{ fontSize: '12px' }} >@ 5,800-6,100 rpm</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Power
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            9G-TRONIC <Box component={'span'} sx={{ fontSize: '12px' }} >9-speed</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Automatic transmission
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            13.1<Box component={'span'} sx={{ fontSize: '12px' }} >9-speed</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Passenger capacity
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            2.0L <Box component={'span'} sx={{ fontSize: '12px' }} >cu ft</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Cargo capacity
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            6.0 <Box component={'span'} sx={{ fontSize: '12px' }} >sec 0-60 mph</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            Acceleration
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 0, m: 0 }} >
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal' }} >
                                            21 <Box component={'span'} sx={{ fontSize: '12px' }} >mpg</Box>
                                        </Typography>
                                        <Typography component={'div'} variant='body' sx={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: '21.78px', fontStyle: 'normal', mt: 2 }} >
                                            City fuel economy
                                        </Typography>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Box component={'div'} sx={{ mt: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography component={'div'} variant='h3' sx={{ color: 'white', mb: 8, textAlign: 'center' }}>Why Teron Motors?</Typography>
                    <Box sx={{ width: '100%' }} >
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 8 }} columns={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 4, px: 2
                                        }} >
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '24px', lineHeight: '29.05px', fontStyle: 'normal', mb: 2, textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                Cashflow
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                Teron games creates new standard for gaming and earning as you play. All your earnings are recoreded and stored on the blockchain, leaving no room.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 4, px: 2
                                        }} >
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '24px', lineHeight: '29.05px', fontStyle: 'normal', mb: 2, textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                NFTs
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                Customized and NFTize your Teron Motors gaming assets as you play. Teron NFTs can be traded on Febeth marketplace and Opensea
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item xs={1}>
                                    <Item>
                                        <Box component={'div'} sx={{
                                            width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                                md: 'start',
                                                xs: 'center'
                                            }, flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', py: 4, px: 2
                                        }} >
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '24px', lineHeight: '29.05px', fontStyle: 'normal', mb: 2, textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                EVs
                                            </Typography>
                                            <Typography component={'div'} variant='body' sx={{
                                                color: 'white', fontWeight: 400, fontSize: '16px', lineHeight: '19.36px', fontStyle: 'normal', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} >
                                                Teron eletronic vehicles are currently undergoing the ideation phase. The EVs powered vehicles will be designed to mint Febeth tokens when in use.
                                            </Typography>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
                <Button variant="contained" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '130px', mt: 6, py: 2, px: 3, lineHeight: '24px', fontWeight: 500, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '16px', '&:hover': {
                        backgroundColor: "#d1284d"
                    }
                }} href="#">Read Teron Motors Doc</Button>
            </Container>
        </Box>
    </>
}

export default About;

const images = [
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t1.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t2.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t1.png',
    },
    {
        original: 'img/About/slide1.png',
        thumbnail: 'img/About/t2.png',
    },
];
