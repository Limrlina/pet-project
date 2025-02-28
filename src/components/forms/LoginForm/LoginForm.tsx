import formStyles from "../Form.module.css";
import React, { useState } from "react";
import { supabase } from "../../../supabaseClient.ts";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext.tsx";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorInfo, setErrorInfo] = useState<{
    isError: boolean;
    text: string;
  }>({ isError: false, text: "" });
  const navigate = useNavigate();
  const { setStatus } = useAuth();

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null);
  const [emailIsValid, setEmailIsValid] = useState<boolean | null>(null);

  const handleChangeEmail = (newEmailValue: string) => {
    if (errorInfo.isError) setErrorInfo({ isError: false, text: "" });
    setEmail(newEmailValue);
    setEmailIsValid(EMAIL_REGEXP.test(newEmailValue));
  };

  const handleChangePassword = (newPasswordValue: string) => {
    if (errorInfo.isError) setErrorInfo({ isError: false, text: "" });
    setPassword(newPasswordValue);
    setPasswordIsValid(newPasswordValue.length >= 6);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorInfo({ isError: true, text: "Неверный логин или пароль!" });
      return;
    }

    setStatus("authenticated");
    navigate(`/`);
  };

  return (
    <>
      <p className={formStyles.formHeader}>Вход</p>

      {errorInfo.isError && (
        <div className={formStyles.errorErea}>{errorInfo.text}</div>
      )}

      <form className={formStyles.formContainer} onSubmit={handleSubmit}>
        <div className={formStyles.formBlock}>
          <label htmlFor="email" className={formStyles.formLabel}>
            Адрес электронной почты
          </label>
          <input
            className={clsx(
              formStyles.formInput,
              emailIsValid === false && formStyles.notValidInput,
              emailIsValid && formStyles.ValidInput,
            )}
            type="email"
            id="email"
            placeholder="name@domain.ru"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />
        </div>

        <div className={formStyles.formBlock}>
          <label htmlFor="password" className={formStyles.formLabel}>
            Пароль
          </label>
          <input
            className={clsx(
              formStyles.formInput,
              passwordIsValid === false && formStyles.notValidInput,
              passwordIsValid && formStyles.ValidInput,
            )}
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={clsx(
            formStyles.formSubmitBtn,
            emailIsValid && passwordIsValid && formStyles.validBtn,
          )}
          disabled={!emailIsValid && !passwordIsValid}
        >
          Войти
        </button>
      </form>
    </>
  );
};

export default LoginForm;
