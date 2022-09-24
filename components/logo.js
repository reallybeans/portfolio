import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import BeanLogo from './icons/beanIcon.svg'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms esae;
    filter: ${props => (props.invert ? 'invert(1)' : 'none')};
  }
  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox invert={useColorModeValue(false, true)}>
          <Image
            src={BeanLogo}
            fill="invert"
            width={20}
            height={20}
            alt="logo"
          />
          <Text
            color={useColorModeValue('gay.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="bold"
            ml={3}
          >
            Bean
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
export default Logo
