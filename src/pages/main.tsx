import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Table } from '../components/Table';
//import { Card } from '../components/Card';

export default function Main() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Table />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}