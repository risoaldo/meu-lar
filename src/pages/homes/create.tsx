import { Box, Flex, Heading, Divider, VStack, SimpleGrid, Textarea } from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function CreateHome() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />
        <Box as="form" flex="1" borderRadius="8" bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal" >Cadastrar Casa</Heading>

          <Divider my="6" borderColor="pink.400" />
            <VStack spacing="5">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="cidade" label="Cidade" />
                <Input name="estado" label="Estado" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="rua" label="Rua" />
                <Input name="bairro" label="Bairro" />
                <Input name="numero" label="Número" type="number" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="m2" label="M²" />
                <Input name="valor" label="Valor" type="number" />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
              <Textarea placeholder="Descrição" borderColor="pink.300" />
            </SimpleGrid>
            </VStack>
        </Box>
      </Flex>
    </Box>
  )
}