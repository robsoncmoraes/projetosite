import { Path, useForm, UseFormRegister } from "react-hook-form";
import styles from "./TableCadastroTransport.module.css";
import { useRef, useState } from "react";
import ModalCancel from "./ModalCancel";

interface IFormValues {
  "CNPJ da Transpotadora": string;
  "Razão Social": string;
  "Nome Fantasia (Opcional)": string;
  "Inscrição Estadual": string;
  "Código externo": string;
  CEP: number;
  Rua: string;
  Numero: number;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  estado: string;
  cnpj: string;
  razaosocial: string;
  nomefantasia: string;
  IndicadorInscEstadual: string;
  inscestadual: string;
  codexterno: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder: string;
  id: string;
};

const Input = ({ id, placeholder, label, register, required }: InputProps) => (
  <>
    <input
      id={id}
      className={styles.alignItens}
      placeholder={placeholder}
      {...register(label, { required })}
    />
  </>
);

export default function TableCadastroTransport() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <fieldset className={styles.dadosGerais}>
          <div className={styles.title}>Dados Gerais</div>
          <div className={styles.field}>
            <Input
              id="cnpj"
              placeholder="CNPJ da Transportadora"
              label="CNPJ da Transpotadora"
              register={register}
              required
              {...register("cnpj", { required: true })}
              aria-invalid={errors.cnpj ? "true" : "false"}
            />
            {errors.cnpj?.type === "required" && (
              <p className={styles.error} role="alert">
                CNPJ é obrigatório
              </p>
            )}
          </div>
          <div className={styles.dadosTransp}>
            <Input
              id="razaosocial"
              placeholder="Razão Social"
              label="Razão Social"
              register={register}
              required
              {...register("razaosocial", { required: true })}
              aria-invalid={errors.razaosocial ? "true" : "false"}
            />
            {errors.razaosocial?.type === "required" && (
              <p className={styles.error} role="alert">
                Razão Social é obrigatório
              </p>
            )}

            <Input
              id="nomefantasia"
              label="Nome Fantasia (Opcional)"
              register={register}
              required
              placeholder="Nome Fantasia (Opcional)"
              {...register("nomefantasia", { required: true })}
              aria-invalid={errors.nomefantasia ? "true" : "false"}
            />
            {errors.nomefantasia?.type === "required" && (
              <p className={styles.error} role="alert">
                Nome Fantasia é obrigatório
              </p>
            )}

            <select
              className={styles.alignselect}
              id="IndicadorInscEstadual"
              {...register("IndicadorInscEstadual", {
                validate: (value) => {
                  return value != "0;";
                },
              })}
            >
              <option selected value="Indicador Inscrição Estadual"></option>
              <option value="Contribuinte ICMS">1: Contribuinte ICMS</option>
              <option value="Opção 02">Opção 02</option>
              <option value="Opção 03">Opção 03</option>
            </select>

            <Input
              id="inscestadual"
              label="Inscrição Estadual"
              register={register}
              required
              placeholder="Inscrição Estadual"
              {...register("inscestadual", { required: true })}
              aria-invalid={errors.inscestadual ? "true" : "false"}
            />
            {errors.inscestadual?.type === "required" && (
              <p className={styles.error} role="alert">
                Inscrição Estadual é obrigatório
              </p>
            )}
          </div>
        </fieldset>
        <fieldset className={styles.codExternoAlign}>
          <div className={styles.title}>Código externo da transportadora</div>
          <div>
            <Input
              id="codexterno"
              label="Código externo"
              register={register}
              required
              placeholder="Código externo"
              {...register("codexterno", { required: true })}
              aria-invalid={errors.codexterno ? "true" : "false"}
            />
            {errors.codexterno?.type === "required" && (
              <p className={styles.error} role="alert">
                Cód. Externo é obrigatório
              </p>
            )}
          </div>
        </fieldset>
        <fieldset className={styles.adress}>
          <div className={styles.title}>Endereço</div>
          <div>
            <Input
              id="CEP"
              label="CEP"
              register={register}
              required
              placeholder="CEP"
              {...register("CEP", { required: true })}
              aria-invalid={errors.CEP ? "true" : "false"}
            />
            {errors.CEP?.type === "required" && (
              <p className={styles.error} role="alert">
                CEP é obrigatório
              </p>
            )}
          </div>
          <div div className={styles.field}>
            <Input
              id="Rua"
              label="Rua"
              register={register}
              required
              placeholder="Rua"
              {...register("Rua", { required: true })}
              aria-invalid={errors.Rua ? "true" : "false"}
            />
            {errors.Rua?.type === "required" && (
              <p className={styles.error} role="alert">
                Rua é obrigatório
              </p>
            )}
            <Input
              id="Numero"
              label="Numero"
              register={register}
              required
              placeholder="Número"
              {...register("Numero", { required: true })}
              aria-invalid={errors.Numero ? "true" : "false"}
            />
            {errors.Numero?.type === "required" && (
              <p className={styles.error} role="alert">
                Número é obrigatório
              </p>
            )}
            <Input
              id="Complemento"
              label="Complemento"
              register={register}
              required
              placeholder="Complemento (Opcional)"
              {...register("Complemento", { required: true })}
              aria-invalid={errors.Complemento ? "true" : "false"}
            />
            {errors.Complemento?.type === "required" && (
              <p className={styles.error} role="alert">
                Complemento é obrigatório
              </p>
            )}
          </div>
          <div div className={styles.field}>
            <Input
              id="Bairro"
              label="Bairro"
              register={register}
              required
              placeholder="Bairro"
              {...register("Bairro", { required: true })}
              aria-invalid={errors.Bairro ? "true" : "false"}
            />
            {errors.Bairro?.type === "required" && (
              <p className={styles.error} role="alert">
                Bairro é obrigatório
              </p>
            )}
            <Input
              id="Cidade"
              label="Cidade"
              register={register}
              required
              placeholder="Cidade"
              {...register("Cidade", { required: true })}
              aria-invalid={errors.Cidade ? "true" : "false"}
            />
            {errors.Cidade?.type === "required" && (
              <p className={styles.error} role="alert">
                Cidade é obrigatório
              </p>
            )}
            <select
              className={styles.alignstate}
              id="estado"
              {...register("estado", { required: true })}
            >
              <option selected value="Estado"></option>
              <option>RJ</option>
              <option>SP</option>
              <option>MG</option>
            </select>
          </div>
        </fieldset>
        <div className={styles.btnAlign}>
          <div>
            <button type="button" onClick={handleOpen} className={styles.btn}>
              Cancelar
            </button>
          </div>
          <div>
            <button className={styles.btnnext} type="submit">
              Próximo
            </button>
          </div>
          <div className={styles.modal}>{open ? <ModalCancel /> : null}</div>
        </div>
      </form>
    </>
  );
}
