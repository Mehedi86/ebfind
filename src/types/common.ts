export type Inputs = {
    email: string
    password: string
}

export interface LoginFormProps {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> | void;
}


export type FormProps = {
  onSubmit: () => void
}