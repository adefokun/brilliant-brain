

export interface IUser {
    email: string
    password: string
}
export interface IReducerAction {
    type: "email" | "password";
    payload: string
}
