import { FormLabel, FormControl, Input as CakraInput, InputProps as CakraInputProps  } from '@chakra-ui/react';

interface InputProps extends CakraInputProps {
  name: string;
  label?: string;
}
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <CakraInput
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}