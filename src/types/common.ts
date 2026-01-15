export type Inputs = {
    email: string
    password: string
}

export type RegisterInputs = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface LoginFormProps {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> | void;
}

export interface RegisterFormProps {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> | void;
}

export type FormProps = {
  onSubmit: () => void
}