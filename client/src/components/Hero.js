import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="top" height="100vh">
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'fitzpatrick.io',
}
