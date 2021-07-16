import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../../atoms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { isValidCPF } from "../../../utils/isValidCPF";
import * as yup from "yup";

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

const createUserFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .max(40, "No máximo, 50 caractéres"),
  date: yup.string().required("Data obrigatória"),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .max(11, "Quantidade de caractéres inválida")
    .min(11, "Quantidade de caractéres inválida"),
  cep: yup
    .string()
    .required("CEP obrigatório")
    .max(8, "Quantidade de caractéres inválida")
    .min(8, "Quantidade de caractéres inválida"),
});

export function Register() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createUserFormSchema) });
  const [address, setAdress] = useState<Adress>();
  const [isValidCpf, setIsValidCpf] = useState<boolean>(false);
  const history = useHistory();

  const onSubmit = useCallback((data: any) => {
    localStorage.setItem(data.name, JSON.stringify(data));
    history.push("/");
  }, []);

  const watchCep = watch("cep");
  useEffect(() => {
    async function request() {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${watchCep}/json/`);
        const data = await res.json();
        setAdress(data);
      } catch (err) {
        console.log(err);
      }
    }
    request();
  }, [setValue, watchCep]);

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
            error={errors.name}
            {...register("name")}
          />
          <Input
            label="Data de nascimento"
            type="date"
            error={errors.date}
            {...register("date")}
          />
          <Input
            label="CPF"
            type="number"
            error={errors.cpf}
            placeholder="00000000000"
            {...register("cpf")}
          />
          <Input
            label="CEP"
            type="number"
            placeholder="00000000"
            error={errors.cep}
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
