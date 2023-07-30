import { useForm } from "react-hook-form";
import styles from "./TableCadastroTransport.module.css";
import Submitbutton from "./Submitbutton";

export default function TableCadastroTransport() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className={styles.form}>
        <fieldset className={styles.dadosGerais}>
          <div className={styles.title}>Dados Gerais</div>
          <div className={styles.field}>
            <input
              className={styles.cnpj}
              label="CNPJ da Transpotadora"
              text="CNPJ da Transportadora"
              name="cnpj"
              placeholder="CNPJ da transportadora"
              register={register}
              errors={errors}
            ></input>
          </div>
          <div className={styles.dadosTransp}>
            <input
              className={styles.razaoSocial}
              label="Razão Social"
              text="Razão Social"
              name="razaosocial"
              placeholder="Razão Social"
              register={register}
              errors={errors}
            ></input>

            <input
              className={styles.nomeFantasia}
              title="Nome Fantasia (Opcional)"
              label="Nome Fantasia (Opcional)"
              text="Nome Fantasia (Opcional)"
              name="nomefantasia"
              placeholder="Nome Fantasia (Opcional)"
              register={register}
              errors={errors}
            ></input>

            <select
              className={styles.alignselect}
              id="IndicadorInscEstadual"
              {...register("nomefantasia", {
                validate: (value) => {
                  return value != "0;";
                },
              })}
            >
              <option
                selected
                disabled
                value="Indicador Inscrição Estadual"
              ></option>
              <option value="Contribuinte ICMS">1: Contribuinte ICMS</option>
              <option value="Opção 02">Opção 02</option>
              <option value="Opção 03">Opção 03</option>
            </select>

            {errors?.nomefantasia?.type === "required" && (
              <p className={styles.errormsg}>Nome Fantasia é obrigatório</p>
            )}

            <input
              className={styles.inscEstadual}
              label="Inscrição Estadual"
              text="Inscrição Estadual"
              placeholder="Inscrição Estadual"
            ></input>
          </div>
        </fieldset>
        <fieldset className={styles.codExternoAlign}>
          <div className={styles.title}>Código externo da transportadora</div>
          <div>
            <input
              className={styles.codExterno}
              label="Código externo"
              text="Código externo"
              name="codigoexterno"
              placeholder="Código externo"
              register={register}
              errors={errors}
            ></input>
          </div>
        </fieldset>
        <fieldset className={styles.adress}>
          <div className={styles.title}>Endereço</div>
          <div>
            <input
              className={styles.cep}
              label="CEP"
              text="CEP"
              name="cep"
              placeholder="CEP"
              register={register}
              errors={errors}
            ></input>
          </div>
          <div>
            <input
              className={styles.rua}
              label="Rua"
              text="Rua"
              name="rua"
              placeholder="Rua"
              register={register}
              errors={errors}
            ></input>
            <input
              className={styles.numero}
              label="Número"
              text="Número"
              name="numero"
              placeholder="Número"
              register={register}
              errors={errors}
            ></input>
            <input
              className={styles.complemento}
              label="Complemento"
              text="Complemento"
              name="complemento"
              placeholder="Complemento (Opcional)"
              register={register}
              errors={errors}
            ></input>
          </div>
          <div>
            <input
              className={styles.bairro}
              label="Bairro"
              text="Bairro"
              name="bairro"
              placeholder="Bairro"
              register={register}
              errors={errors}
            ></input>
            <input
              className={styles.cidade}
              label="Cidade"
              text="Cidade"
              name="cidade"
              placeholder="Cidade"
              register={register}
              errors={errors}
            ></input>
            <select
              className={styles.alignstate}
              id="Estado"
              {...register("estado", { required: true })}
            >
              <option selected disabled value="Estado"></option>
              <option>RJ</option>
              <option>SP</option>
              <option>MG</option>
            </select>
            {errors?.estado?.type === "required" && (
              <p className="error-message">Estado é obrigatório</p>
            )}
          </div>
        </fieldset>
        <div className={styles.btnAlign}>
          <button className={styles.btn}>Cancelar</button>
          <Submitbutton
            id="ButtonId"
            text="Próximo"
            onClick={(event) => {
              event.preventDefault();
              alert("teste");
            }}
          />
        </div>
      </form>
    </>
  );
}
