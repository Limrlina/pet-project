import formStyles from "../Form.module.css";

const LoginForm = () => {
  return (
    <>
      <p className={formStyles["form-header"]}>Вход</p>

      <form className={formStyles["form-container"]}>
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
          Войти
        </button>
      </form>
    </>
  );
};

export default LoginForm;
