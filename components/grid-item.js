import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import LinkNext from 'next/link'

export const GridItem = ({ children, href, title, thumnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor={Pointer}>
      <Image
        src={thumnail}
        alt={title}
        placeholder="blur"
        loading="lazy"
        className="grid-item-thumbnail"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
export const WorkGridItem = ({ children, link, title, thumnail }) => (
  <Box w="100%" align="center">
    <LinkNext href={`${link}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/${link}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </LinkNext>
  </Box>
)
export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail {
        border-radius: 12px;
    }`}
  />
)
