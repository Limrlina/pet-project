import formStyles from "../Form.module.css";

const RegisterForm = () => {
  return (
    <>
      <p className={formStyles.formHeader}>Регистрация</p>

      <form className={formStyles.formContainer}>
        <div className={formStyles.formBlock}>
          <label htmlFor="nameCompany" className={formStyles.formLabel}>
            Имя компании
          </label>
          <input
            className={formStyles.formInput}
            type="text"
            id="nameCompany"
            placeholder="ООО Элимканц"
          />
        </div>

        <div className={formStyles.formBlock}>
          <label htmlFor="email" className={formStyles.formLabel}>
            Адрес электронной почты
          </label>
          <input
            className={formStyles.formInput}
            type="email"
            id="email"
            placeholder="name@domain.ru"
          />
        </div>

        <div className={formStyles.formBlock}>
          <label htmlFor="password" className={formStyles.formLabel}>
            Пароль
          </label>
          <input
            className={formStyles.formInput}
            type="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className={formStyles.formSubmitBtn}
          disabled={true}
        >
          Создать аккаунт
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
