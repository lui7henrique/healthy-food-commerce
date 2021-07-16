import { Stack, Flex, Button, Image, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../../atoms/Input";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.scss";

type Adress = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export function Register() {
  const { handleSubmit, register, watch, setValue } = useForm();
  const [address, setAdress] = useState<Adress>();
  const [error, setError] = useState<boolean>(false);

  const history = useHistory();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
    localStorage.setItem("", "myvalue");
  }, []);

  const watchCpf = watch("cep");

  useEffect(() => {
    async function request() {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${watchCpf}/json/`);
        const data = await res.json();
        setAdress(data);
      } catch (err) {
        console.log(err);
      }
    }
    request();
  }, [setValue, watchCpf]);

  useEffect(() => {
    setValue("street", address?.logradouro);
    setValue("neighborhood", address?.bairro);
    setValue("city", address?.localidade);
    setValue("state", address?.uf);
  }, [setValue, address]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Subscribe to receive news and products 🤗</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Tom Hiddleston"
            isRequired
            {...register("name")}
          />
          <Input
            label="Data de nascimento"
            type="date"
            isRequired
            {...register("date")}
          />

          <Input
            label="CPF"
            type="number"
            placeholder="000.000.000-00"
            isRequired
            {...register("cpf")}
          />
          <Input
            label="CEP"
            type="number"
            placeholder="00000-000"
            isRequired
            {...register("cep")}
          />
          <Input
            label="Rua"
            type="text"
            isDisabled
            value={address?.logradouro}
            {...register("street")}
          />
          <Input
            label="Bairro"
            type="text"
            isDisabled
            value={address?.bairro}
            {...register("neighborhood")}
          />
          <Input
            label="Cidade"
            type="text"
            isDisabled
            width="20%"
            value={address?.localidade}
            {...register("city")}
          />
          <Input
            label="Estado"
            type="text"
            isDisabled
            value={address?.uf}
            {...register("state")}
          />
          <Button
            variant="solid"
            bg="var(--primary)"
            transition="all 0.2s ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
            color="white"
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
      <img src="bloco_services.svg" alt="Register" />
    </div>
  );
}
