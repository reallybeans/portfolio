import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import ItnowThumb from '../public/images/itnow.png'
import Layout from '../components/layout/article'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.3}>
          <Heading as="h3" fontSize={16} mb={4}>
            Works
          </Heading>
        </Section>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              link="https://itnow.vn/"
              title="Tickets management system"
              thumnail={ItnowThumb.src}
            >
              The system helps customers have a better experience when using the
              service and helps reduce manual management by up to 60%
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
