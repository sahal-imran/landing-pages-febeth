import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Button from '@mui/material/Button';

function Doc() {

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        textAlign: 'start',
        background: "none",
        boxShadow: 'none'
    }));

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: '#0A1227', pt: {
            md:4,
            xs:16
        } }} >
            <Container maxWidth="lg" sx={{
                minHeight: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexDirection: 'column'
            }} >
                <Typography variant="h5" sx={{
                    fontSize: "48px", color: '#FFFFFF', fontWeight: 700, lineHeight: "58.09px", fontStyle: 'normal', letterSpacing: '1%', mb: 8
                }} gutterBottom component="div">
                    Document
                </Typography>
                <Box sx={{ width: '100%' }} >
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid container rowSpacing={8} columnSpacing={{ xs: 8 }} columns={{ xs: 1, sm: 2, md: 4 }} >
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box component={'div'} sx={{ width: '100%' }} >
                                        <Image
                                            src="/img/Docs/Doc1.png"
                                            alt="binance"
                                            width={500}
                                            height={600}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="h5" sx={{
                                        fontSize: "24px", color: '#FFFFFF', fontWeight: 500, lineHeight: "32px", fontStyle: 'normal', mt: 2
                                    }} gutterBottom component="div">
                                        White paper
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{
                                        fontSize: "18px", color: '#FFFFFF', fontWeight: 400, lineHeight: "32px", fontStyle: 'normal', mb: 2
                                    }} gutterBottom component="div">
                                        (2022)
                                    </Typography>
                                    <Button variant="contained" sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '5px', py: 1, px: 6, lineHeight: '21.78px', fontWeight: 500, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
                                            backgroundColor: "#d1284d"
                                        }
                                    }} href="#">Download</Button>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box component={'div'} sx={{ width: '100%' }} >
                                        <Image
                                            src="/img/Docs/Doc2.png"
                                            alt="binance"
                                            width={500}
                                            height={600}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="h5" sx={{
                                        fontSize: "24px", color: '#FFFFFF', fontWeight: 500, lineHeight: "32px", fontStyle: 'normal', mt: 2
                                    }} gutterBottom component="div">
                                        Febeth Tokens
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{
                                        fontSize: "18px", color: '#FFFFFF', fontWeight: 400, lineHeight: "32px", fontStyle: 'normal', mb: 2
                                    }} gutterBottom component="div">
                                        (2022)
                                    </Typography>
                                    <Button variant="contained" sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '5px', py: 1, px: 6, lineHeight: '21.78px', fontWeight: 500, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
                                            backgroundColor: "#d1284d"
                                        }
                                    }} href="#">Download</Button>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box component={'div'} sx={{ width: '100%' }} >
                                        <Image
                                            src="/img/Docs/Doc3.png"
                                            alt="binance"
                                            width={500}
                                            height={600}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="h5" sx={{
                                        fontSize: "24px", color: '#FFFFFF', fontWeight: 500, lineHeight: "32px", fontStyle: 'normal', mt: 2
                                    }} gutterBottom component="div">
                                        Febeth Game Hub
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{
                                        fontSize: "18px", color: '#FFFFFF', fontWeight: 400, lineHeight: "32px", fontStyle: 'normal', mb: 2
                                    }} gutterBottom component="div">
                                        (2022)
                                    </Typography>
                                    <Button variant="contained" sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '5px', py: 1, px: 6, lineHeight: '21.78px', fontWeight: 500, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
                                            backgroundColor: "#d1284d"
                                        }
                                    }} href="#">Download</Button>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box component={'div'} sx={{ width: '100%' }} >
                                        <Image
                                            src="/img/Docs/Doc4.png"
                                            alt="binance"
                                            width={500}
                                            height={600}
                                            objectFit={'contain'}
                                        />
                                    </Box>
                                    <Typography variant="h5" sx={{
                                        fontSize: "24px", color: '#FFFFFF', fontWeight: 500, lineHeight: "32px", fontStyle: 'normal', mt: 2
                                    }} gutterBottom component="div">
                                        ROADMAP
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{
                                        fontSize: "18px", color: '#FFFFFF', fontWeight: 400, lineHeight: "32px", fontStyle: 'normal', mb: 2
                                    }} gutterBottom component="div">
                                        (2022)
                                    </Typography>
                                    <Button variant="contained" sx={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '5px', py: 1, px: 6, lineHeight: '21.78px', fontWeight: 500, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
                                            backgroundColor: "#d1284d"
                                        }
                                    }} href="#">Download</Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
}

export default Doc;
