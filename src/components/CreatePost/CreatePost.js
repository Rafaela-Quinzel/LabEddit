import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { AddPost } from '../../services/Feed'
import { TextField, Button } from '@material-ui/core'
import LogoPage from '../../assets/astronauta.svg'



function CreatePost(props) {
    const { form, onChange } = useForm({ text: "", title: "" })


    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()

        AddPost(form, history)
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    return (
        <S.CreateContainer >
            <S.Wrapper>
            <S.Logo src={LogoPage} />
                <S.TitlePage>Crie seu post</S.TitlePage>
                <S.FormContainer onSubmit={handleSubmit}>
                    <TextField
                        value={form.title}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Título'
                        placeholder='Título do seu post'
                        name='title'
                        type='title'
                        size='small'
                        required
                    />
                    <TextField
                        value={form.text}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Texto'
                        placeholder='Texto do post'
                        name='text'
                        type='text'
                        required
                    />
                    <S.AreaButton>
                        <Button
                            variant='contained'
                            color="secondary"
                            type="submit"
                        >
                            SALVAR
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={props.close}
                        >
                            VOLTAR
                        </Button>
                    </S.AreaButton>
                </S.FormContainer>
            </S.Wrapper>
        </S.CreateContainer>
    )
}
export default CreatePost