import React, { useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { login } from '../../../services/User'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { TextField, Button } from '@material-ui/core'
import LogoPage from '../../../assets/astronauta.svg'
import { goToSignup } from '../../../routes/coordinator'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import {
    InputLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormControl
} from "@material-ui/core"



function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    const { form, onChange } = useForm({
        email: "",
        password: ""
    })

    useProtectPage()
    const history = useHistory()


    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        login(form, history)
    }

    const handleShowPassword = () => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }


    return (
        <S.LoginPageContainer>
            <S.Logo src={LogoPage} />
            <S.Title>LabEddit</S.Title>
            <S.FormContainer onSubmit={handleSubmit}>
                <TextField
                    value={form.email}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='E-mail'
                    placeholder='email@email.com'
                    name='email'
                    type='email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
                    required
                />
                <br />
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
                                        /> :
                                        <VisibilityOff
                                            fontSize={'small'}
                                        />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <S.AreaButton>
                    <Button
                        variant='contained'
                        color="secondary"
                        type="submit"
                    >
                        LOGIN
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => goToSignup(history)}
                    >
                        Não tem Login? Clique aqui
                    </Button>
                </S.AreaButton>
            </S.FormContainer>
        </S.LoginPageContainer>
    )
}
export default LoginPage