import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      align="center"
    >
      <Text
        fontSize="3xl"
      >
        meuLar
      </Text>

      <Flex
        align="center"
        ml="auto"
      >
        <Box mr="4" textAlign="right">
          <Text>Risoaldo Nóbrega</Text>
          <Text color="gray.300" fontSize="small" >
            Noobregarisoaldo@gmail.com
          </Text>
        </Box>
        <Avatar size="md" name="Risoaldo" src="https://github.com/risoaldo.png" />
      </Flex>
    </Flex>
  )
}