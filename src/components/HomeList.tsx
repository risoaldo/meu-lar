import { Box, Flex, Heading, Button, Icon } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";


export function HomeList() {
  return (
    <Flex mb="8" justifyContent="space-between" align="center">
      <Heading size="lg" fontWeight="normal">Casas</Heading>

      <Button as="a" size="sm" fontSize="sm" colorScheme="pink" rightIcon={<Icon as={RiAddLine} />} >
        Add
      </Button>
    </Flex>
  )
}