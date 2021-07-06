import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';

export default function Main() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex>
        sidebar
      </Flex>
    </Flex>
  )
}