import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  error?: FieldError;
}

export function Input({
  label,
  placeholder,
  isDisabled,
  error,
  ...rest
}: InputProps) {
  return (
    <FormControl id="email" isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput
        placeHolder={placeholder}
        {...rest}
        size="lg"
        color="black"
        width={["300px", "400px", "600px", "350px"]}
        transition="all 0.2s ease-in-out"
        _focus={
          !!error
            ? { borderColor: "#a10000", borderWidth: "1px" }
            : { borderColor: "#95B046", borderWidth: "2px" }
        }
        isDisabled={isDisabled}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
