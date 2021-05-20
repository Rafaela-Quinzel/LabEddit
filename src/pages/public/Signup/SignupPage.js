import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm'
import { signup } from '../../../services/User'
import LogoPage from '../../../assets/astronauta.svg'
import { goBack } from '../../../routes/coordinator'

import { Visibility, VisibilityOff } from "@material-ui/icons"
import {
    InputLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormControl,
    TextField,
} from '@material-ui/core'


function SignUpPage() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const { form, onChange } = useForm({
        email: "",
        password: "",
        username: "",
        confirmPassword: ""
    })


    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const validate = (event) => {
        const passwordOne = form.password
        const passwordTwo = form.confirmPassword
        event.preventDefault()
        if (passwordOne === passwordTwo) {
            signup(form, history)
        } else {
            alert("Por favor, confira sua senha")
        }
    }


    return (
        <S.SignupPageContainer>
            <S.Logo src={LogoPage} />
            <S.FormContainer onSubmit={validate}>
                <S.Title>Cadastrar Login:</S.Title>
                <TextField
                    value={form.username}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='Nome'
                    placeholder='Nome e sobrenome'
                    name='username'
                    required
                />
                <TextField
                    value={form.email}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='E-mail'
                    placeholder='email@email.com'
                    name='email'
                    type='email'
                    pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
                    required
                />
                <FormControl variant="outlined" required="true">
                    <InputLabel
                        htmlFor="outlined-adornment-password"
                        margin="dense"
                    >
                        Senha
                    </InputLabel>
                    <OutlinedInput
                        label="Senha"
                        value={form.password}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        onChange={handleInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ?
                                        <Visibility
                                            fontSize={'small'}
                                        />
                                        :
                                        <VisibilityOff
                                            fontSize={'small'}
                                        />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="outlined" required="true" style={{ margin: '2px 0' }}>
                    <InputLabel
                        htmlFor="outlined-adornment-password"
                        margin="dense"
                    >
                        Confirmar
                    </InputLabel>
                    <OutlinedInput
                        label="Confirmar"
                        value={form.confirmPassword}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirme a senha"
                        onChange={handleInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleShowConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ?
                                        <Visibility
                                            fontSize={'small'}
                                        />
                                        :
                                        <VisibilityOff
                                            fontSize={'small'}
                                        />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <S.AreaButton>
                    <S.ButtonStyled
                        variant='contained'
                        color="secondary"
                        type="submit"
                    >
                        SALVAR
                </S.ButtonStyled>

                    <S.ButtonStyled
                        variant="outlined"
                        color="secondary"
                        onClick={() => goBack(history)}
                    >
                        VOLTAR
                    </S.ButtonStyled>
                </S.AreaButton>
            </S.FormContainer>
        </S.SignupPageContainer>
    )
}
export default SignUpPage