export interface IUserLogin {
    email: string
    password: string
}
export interface IUserRegister {
    email: string
    password: string
    confirm_password: string
    username: string
}

export interface ILoginReducerAction {
    type: "email" | "password";
    payload: string
}
export interface IRegistereducerAction {
    type: "email" | "password" | "confirm_password" | "username";
    payload: string
}


