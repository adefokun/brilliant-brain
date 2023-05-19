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

export interface ICandidate {
    name: string;
    email: string;
    number: string;
    category: "primary" | "secondary" | "undergraduate" | "postgraduate";
}
export interface IAdvisory {
    name: string;
    email: string;
    number: string;
    title: string;
    image: string;
}
export interface IAmbassador {
    name: string;
    email: string;
    number: string;
    title: string;
    image: string;
}

export interface ITableColumn {
    name: string;
    label: string;
    extra?: boolean;
    custom?: (value: string, meta: any) => JSX.Element;
    options?: {
        filter: boolean;
        sort: boolean;
    };
}

export interface IWinner {
    name: string;
    email: string;
    position: string;
    image: string;
    category: string;
}
export interface IReducerAction<T> {
    type: T;
    payload?: string;
}

