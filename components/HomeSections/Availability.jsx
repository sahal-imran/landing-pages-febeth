import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Availability() {
    return <>
        <Box component={'div'} sx={{ position: 'relative', width: '100%', backgroundColor: '#0A1227',py:10,mt:-1 }} >
            <Container maxWidth="lg" sx={{
                minHeight: "100vh", pt: 10, display: 'flex', justifyContent: {
                    md: 'space-between',
                    xs: 'center'
                }, alignItems: 'center',
                flexDirection: {
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
                    }, flexDirection: 'column',mb:{
                        md:0,
                        xs:14
                    }
                }} >
                    <Typography variant="h2" sx={{
                        color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", fontStyle: 'normal', textAlign: {
                            md: 'start',
                            xs: 'center'
                        }
                    }} gutterBottom component="div">
                        Life is mobile, so are our games
                    </Typography>
                    <Typography variant="subtitle" sx={{
                        fontSize: '18px', color: '#FFFFFF', fontWeight: 400, lineHeight: "21.78px", fontStyle: 'normal', mb: 4, textAlign: {
                            md: 'start',
                            xs: 'center'
                        }
                    }} gutterBottom component="div">
                        Enjoy our games across multiple devices and get rewarded for your passion!
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 400, lineHeight: "28px", fontStyle: 'normal' }} gutterBottom component="div">
                        Play on
                    </Typography>
                    <Box component={'div'} sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Link href="#" underline="none" sx={{ mr: 1 }}>
                            <Image
                                src="/img/home/Googleplay.png"
                                alt="HomePicture"
                                width={120}
                                height={40}
                            />
                        </Link>
                        <Link href="#" underline="none" sx={{}}>
                            <Image
                                src="/img/home/Appstore.png"
                                alt="HomePicture"
                                width={120}
                                height={40}
                            />
                        </Link>
                    </Box>
                    <Box component={'div'} sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box component={'span'} sx={{ mr: 4 }} >
                            <Image
                                src="/img/home/linux.png"
                                alt="HomePicture"
                                width={50}
                                height={50}
                            />
                        </Box>
                        <Box component={'span'} sx={{ mr: 4 }} >
                            <Image
                                src="/img/home/window.png"
                                alt="HomePicture"
                                width={50}
                                height={50}
                            />
                        </Box>
                        <Box component={'span'} sx={{}} >
                            <Image
                                src="/img/home/apple.png"
                                alt="HomePicture"
                                width={50}
                                height={50}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box component={'div'} sx={{
                    width: {
                        md: '50%',
                        sm: "80%",
                        xs: '90%'
                    }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'
                }} >
                    <Image
                        src="/img/home/playOn.png"
                        alt="HomePicture"
                        width={600}
                        height={300}
                    />
                </Box>
            </Container>
        </Box>
    </>
}

export default Availability;
