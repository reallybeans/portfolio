import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'

const { Box, Container } = require('@chakra-ui/react')
const { default: Head } = require('next/head')

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, innital-scale=1" />
        <title>Le Nhut Anh - HomePage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <VoxelDog />
        {children}
      </Container>
    </Box>
  )
}
export default Main
