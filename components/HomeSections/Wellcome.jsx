import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Wellcome() {
  return <>
    <Box component={'div'} sx={{ position: 'relative', width: '100%', backgroundColor: '#0f1932' }} >
      <Container maxWidth="lg" sx={{
        minHeight: "100vh", pt: 14, display: 'flex', justifyContent: {
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
            xs:'90%'
          }, display: 'flex', justifyContent: 'center', alignItems: {
            md: 'start',
            xs: 'center'
          }, flexDirection: 'column',
          py:{
            md:0,
            xs:8
          }
        }} >
          <Typography variant="h2" sx={{ color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", fontStyle: 'normal',textAlign:{
            md:'start',
            xs:'center'
          } }} gutterBottom component="div">
            Febeth play-and- earn games.
          </Typography>
          <Typography variant="subtitle" sx={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 400, lineHeight: "29.05px", fontStyle: 'normal' }} gutterBottom component="div">
            Get rewarded for your passision
          </Typography>
          <Button variant="contained" sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#FF325F", color: 'white', borderRadius: '130px', mt: 6, py: 2, px: 3, lineHeight: '24.2px', fontWeight: 700, fontStyle: 'normal', textTransform: 'capitalize', fontSize: '20px', '&:hover': {
              backgroundColor: "#d1284d"
            }
          }} href="#">Get Started <ArrowCircleRightIcon sx={{ fontSize: "18px", ml: 1 }} /></Button>
        </Box>
        <Box component={'div'} sx={{
          width: {
            md: '50%',
            sm: "80%",
            xs:'90%'
          }, display: 'flex', justifyContent: {
            md: 'flex-end',
            xs: 'center'
          }, alignItems: 'center'
        }} >
          <Image
            src="/img/home/Home1.png"
            alt="HomePicture"
            width={550}
            height={300}
          />
        </Box>
      </Container>
    </Box>
  </>
}

export default Wellcome;
