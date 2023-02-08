import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Student's Feedback </Heading>
          
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Competent Faculty</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://img.freepik.com/free-photo/placa-del-ajuntament-valencia-spain_1398-2381.jpg?w=1060&t=st=1675853275~exp=1675853875~hmac=a65ea9b1cc8000b66f5d2f444b99bbedb1464566729f999154911395cc48a2f0'
              }
              name={'Ali Raza'}
              title={'Student'}
              
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Interactive Online Sessions</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-41.jpg?w=1380&t=st=1675853247~exp=1675853847~hmac=1a570c2d43dc6e43cd1afe395593946dd01f723b52dc99ed2e6019ca867342ad'
              }
              name={'Wajeeha Ahmed'}
              title={' Student'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Extensive Syllabus</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://img.freepik.com/free-photo/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london_181624-44376.jpg?w=1380&t=st=1675853056~exp=1675853656~hmac=43693c6d627cd3b787db8e61d1b80fdad6beaf516bbcb0f9fa06bf0a7d808d95'
              }
              name={'Maliha Asif'}
              title={'Student'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}