import {
  Table as TableCakra,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box
} from "@chakra-ui/react"

export function Table() {
  return (
    <Box bg="gray.800" p="8">
      <TableCakra  borderRadius="10" colorScheme="whiteAlpha" variant="simple">
        <TableCaption>Mês de Dezembro</TableCaption>
        <Thead>
          <Tr>
            <Th>Usuários</Th>
            <Th>Apartamentos</Th>
            <Th isNumeric>Casas</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </TableCakra>
    </Box>
  )
}