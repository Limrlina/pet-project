import formStyles from "../Form.module.css";

const RegisterForm = () => {
  return (
    <>
      <p className={formStyles["form-header"]}>Регистрация</p>

      <form className={formStyles["form-container"]}>
        <div className={formStyles["form-block"]}>
          <label htmlFor="nameCompany" className={formStyles["form-label"]}>
            Имя компании
          </label>
          <input
            className={formStyles["form-input"]}
            type="text"
            id="nameCompany"
            placeholder="ООО Элимканц"
          />
        </div>

        <div className={formStyles["form-block"]}>
          <label htmlFor="email" className={formStyles["form-label"]}>
            Адрес электронной почты
          </label>
          <input
            className={formStyles["form-input"]}
            type="email"
            id="email"
            placeholder="name@domain.ru"
          />
        </div>

        <div className={formStyles["form-block"]}>
          <label htmlFor="password" className={formStyles["form-label"]}>
            Пароль
          </label>
          <input
            className={formStyles["form-input"]}
            type="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className={formStyles["form-submit-btn"]}
          disabled={true}
        >
          Создать аккаунт
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
