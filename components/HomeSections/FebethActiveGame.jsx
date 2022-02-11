import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

function FebethActiveGame() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ position: 'relative', width: '100%', backgroundColor: '#0f1932', py: 10,mt:-1 }} >
            <Box component={'div'} sx={{ width: '70%', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Typography variant="h5" sx={{
                    fontSize: "36px", color: '#FFFFFF', fontWeight: 500, lineHeight: "43.57px", fontStyle: 'normal', letterSpacing: '1%', mb: 4, textAlign: 'center'
                }} gutterBottom component="div">
                    Febeth active gamers
                </Typography>
                <Typography variant="subtitle1" sx={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 400, lineHeight: "28px", fontStyle: 'normal', letterSpacing: '1%', textAlign: 'center', mb: 6 }} gutterBottom component="div">
                    Across the globe trust the brands we power the Febeth<br />ecosystem on.
                </Typography>
                <Box sx={{ width: '100%' }} >
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 8 }} columns={{ xs: 1, sm: 2, md: 4 }} >
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image
                                        src="/img/home/binance.png"
                                        alt="binance"
                                        width={500}
                                        height={200}
                                        objectFit={'contain'}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image
                                        src="/img/home/polygon.png"
                                        alt="binance"
                                        width={500}
                                        height={200}
                                        objectFit={'contain'}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image
                                        src="/img/home/unity.png"
                                        alt="binance"
                                        width={500}
                                        height={200}
                                        objectFit={'contain'}
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image
                                        src="/img/home/opensea.png"
                                        alt="binance"
                                        width={500}
                                        height={200}
                                        objectFit={'contain'}
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default FebethActiveGame;
