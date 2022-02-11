import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function IntroFebethGames() {
    return <>
        <Box component={'div'} sx={{ position: 'relative', width: '100%', backgroundColor: '#0f1932', py: 10, mt: -1 }} >
            <Box component={'div'} sx={{
                width: {
                    md: '70%',
                    xs: '90%'
                }, m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }} >
                <Typography variant="h5" sx={{
                    fontSize: "36px", color: '#FFFFFF', fontWeight: 500, lineHeight: "43.57px", fontStyle: 'normal', letterSpacing: '1%', mb: 2, textAlign: {
                        md: 'start',
                        xs: 'center'
                    }
                }} gutterBottom component="div">
                    Introducing Febeth Games
                </Typography>
                <Typography variant="subtitle1" sx={{
                    fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "28px", fontStyle: 'normal', letterSpacing: '1%', textAlign: 'center', mb: 6,
                }} gutterBottom component="div">
                    One of the fastest growing metaverse and NFTs pay-and-earn<br />games platforms.
                </Typography>
                <Box sx={{ width: '100%',overflow:'hidden' }} >
                    {/* <img style={{ width: '100%' }} src="img/home/introGame.png" alt="introGame" /> */}
                    <Image
                        src="/img/home/introGame.png"
                        alt="binance"
                        width={1280}
                        height={500}
                        objectFit={'contain'}
                    />
                </Box>
            </Box>
        </Box>
    </>
}

export default IntroFebethGames;
