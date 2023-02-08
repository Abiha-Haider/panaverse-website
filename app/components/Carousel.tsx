import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slidernpm
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Panaverse DAO',
      text:
        "The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.",
      image:
        'https://img.freepik.com/free-photo/3d-render-network-communications-background-with-connecting-lines-dots_1048-14022.jpg?w=900&t=st=1675844616~exp=1675845216~hmac=80f5595f07ed786a47fce84e45d68f48f858f9ca36b4731fdd9b0b1db0def4b5',
        
    },
    {
      title: 'The Program in a Nutshell: Earn While You Learn',
      text:
        "In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.",
      image:
        'https://img.freepik.com/free-photo/geometric-hex-backgrounds-networking_23-2149755775.jpg?w=1380&t=st=1675844472~exp=1675845072~hmac=60a08bdc3319b539112018d064ffeb2b17a1e75edf27188c8314730f60662d27',
    },
    {
      title: 'Program of Studies',
      text:
        "This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.",
      image:
        'https://img.freepik.com/free-photo/round-particle-lines-futuristic-gradient-wallpaper_53876-97643.jpg?w=1380&t=st=1675844712~exp=1675845312~hmac=69d6ff442714b881966c8e8a9501676937b286880c7dcf574288fbde289ae4ef',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color="white"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        color="white"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color="white" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}