import {
  Input as ChakraInput,
  Heading,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}

export function Input({
  label,
  placeholder,
  isRequired,
  isDisabled,
  ...rest
}: InputProps) {
  return (
    <FormControl id="email" isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput
        placeHolder={placeholder}
        {...rest}
        size="lg"
        color="black"
        width={["300px", "400px", "600px", "350px"]}
        transition="all 0.2s ease-in-out"
        _focus={{ borderColor: "#95B046", borderWidth: "2px" }}
        isRequired={isRequired}
        isDisabled={isDisabled}
      />
    </FormControl>
  );
}
