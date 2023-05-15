import React from "react";
// import image1 from "../../Assets/images/pic5.jpg";
import image2 from "../../Assets/images/ours.jpg";
import image3 from "../../Assets/images/pose.jpg"
import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import firstimage from "../../Assets/images/pic18.jpg";
function Mainsection2() {
  return (
    <div className='mainsection-2'>
      <div className='image-container'>
        <Card sx={{ maxWidth: 345 }} className='mx-10'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='600'
              width='600'
              image={firstimage}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Our First Pic🥰
              </Typography>
              <Typography variant='body2'>
                ❤️16/02/2019❤️ I don't Even realise that this is the day where i
                found my better half.This is really special Day for us papa and
                it is so memorable one too us🥰 The Day we met and started
                talking to Eachother more and more😘.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className='image-container'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='300'
              width='600'
              image={image2}
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='body2'>
                I hope 24 treats you better than 23 did„ just because ur getting
                older doesn't mean you throw me out the window I'm so freaking
                lucky to have you in my life🥰.You accept me at my worst and
                boost me up at my best🥹❤️ „ we have our inside jokes that have
                us dying that no one will ever understand when I make my self
                look stupid you laugh and that's a good friendship you get my
                UgLiEsT pics and vids we have pics of each other's that could
                make us so weird and corky O, but we know we will never use them
                against each other😁🙌 !! „ ur irreplaceable🥹😘„ ur my other
                half💑„ I would not be able to imagine my days without you
                papa🥹💯 we get mad at each other but get over it because we know
                we have to tell each other stupid stuff and gossip😊😋 I Feel
                better when I'm with you❤️💯 I can always count on you to be
                there when I need you🥺❤️💯, you always stick up for me (even
                when I'm wrong and you know it)🥹💯, I want to thank you for
                EVERYTHING for putting up with me when I get a little
                annoying😘💯.FINE a lot annoying you have taught me how to be a
                better person😙🤗 „ I will trust you with my life„ I LOVE YOU
                Papaaaaaa!!!🌏👸💍💖
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className='image-container'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='300'
              width='600'
              image={image3}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h6' component='p'>
                Happy B'DAY Kizie👸💖
              </Typography>
              <Typography variant='body2'>
                You bring to me a happiness that no one else ever could do
                papa🥺💯. You bring to me a love I have never known before
                papa🥺💯. I could not imagine what my life would be like without
                you papa😙😘. I love being with you and I want to spend the rest
                of my life with you papa🌏🥰💑. Every day I wake up thanking God
                for you💖💯. You have been my guiding light when I was lost💯.
                You have been my rock🥰. Sometimes I feel lost and out of touch,
                but when you're there, I feel safe😘. Your voice soothes me
                papa🥰💯.I want to tell you that the love I have for you is
                undying🥺💯. It is a love that is strong and enduring and will stand
                the test of time🥰. I truly feel blessed that you have become a
                part of my life💯💯😘, and I cannot wait for the day that we can join
                our lives together💍💏🌍. I promise to always love you and always hold
                you in my heart🥰🥺💯. I will always be here for you when you need me⚠️🤗,
                and I will love you no matter what life brings us🥺🌍. You are my
                soul mate🌍👑, and I vow to love you all eternity🙈🥰💯. I love you, papaaaaaa.
                once... again Happy BIRTHDAY To My QUEEN👸🌍💍🥰💯
                <br />
                <br />
                YOUR'S LOVINGLY,
                <br />
                <br />
                IMMANUEL RAJKUMAR JUNIOR💖🌏🤗💯
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Mainsection2;
