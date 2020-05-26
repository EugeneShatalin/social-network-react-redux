import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}> {/*handleSubmit прокидывает сюда контейнерная компонента
                                                reduxForm из библиотеки  redux-form,
                                                handleSubmit собирает в себе все данные из формы*/}
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/> {/*Field компонента из redux-form для отрисовки и обработки полей формы
                                                                                     обязательно указывать значение component и name*/}
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm); {/*reduxForm - HOC который образует контейнерную
                                                                    компоненту для работы с form*/}

const Login = (props) => {
    const onSubmit = (formData) => {}
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;

