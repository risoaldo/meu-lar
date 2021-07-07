import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";

import { RiDashboardLine, RiContactsLine, RiHomeHeartLine, RiHomeSmile2Line } from 'react-icons/ri'


export function Sidebar() {
  return (

    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small" >Admiistrador</Text>
          <Stack spacing="4" mt="8" align="stretch">

            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium" >Dashboard</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium" >Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small" >Casas</Text>
          <Stack spacing="4" mt="8" align="stretch">

            <Link display="flex" alignItems="center">
              <Icon as={RiHomeSmile2Line} fontSize="20" />
              <Text ml="4" fontWeight="medium" >Alugar</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiHomeHeartLine} fontSize="20" />
              <Text ml="4" fontWeight="medium" >Comprar</Text>
            </Link>
          </Stack>
        </Box>

      </Stack>

    </Box>
  )
}