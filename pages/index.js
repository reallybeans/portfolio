import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layout/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import AvatarI from '../public/images/bean.png'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.5}>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            align="center"
          >
            Hello, I&apos;m a full-stack developer based in Viet Nam!
          </Box>
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Le Nhut Anh
              </Heading>
              <p>Developer</p>
            </Box>
            <Box
              flexShrink={1}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="WhiteAlpha.700"
                borderWidth={4}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src={AvatarI.src}
                alt="Profile Image"
              />
            </Box>
          </Box>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant={'section-title'}>
            About
          </Heading>
          <Paragraph>
            I&apos;m a Software Engineer who is passionate about design, coding and
            learning new technologies and best practices to become a better
            engineer.
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Box align="center">
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('orange.200', 'orange.600')}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>Oct 2000 </BioYear>
            Born in Ca Mau, Viet Nam
          </BioSection>
          <BioSection>
            <BioYear>Sep 2018 - Aug 2022</BioYear>
            <br></br>
            Graduated with a Bachelor&apos;s degree in Software Engineering from
            FPT University HCM Campus, Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>Apr 2021 - Oct 2021</BioYear>
            <br></br>
            Software Engineering Intern at FPT Software Ho Chi Minh, Viet Nam
          </BioSection>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Playing Guitar, Photography, Travel, Machine Learning
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/reallybeans" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @reallybeans
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://gitlab.com/reallybeans" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGitlab />}
                >
                  @reallybeans
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/le-nhut-anh-33213b216/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Bean (Le Nhut Anh)
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.facebook.com/pinocchio.xxx/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @pinocchjo_ (Le Nhut Anh)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/pinocchjo_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @pinocchjo_
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
