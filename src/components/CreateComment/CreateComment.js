import React from 'react'
import { useForm } from '../../hooks/useForm'
import { AddComment } from '../../services/Feed'
import * as S from './styled'
import { TextField, Button } from '@material-ui/core'


function CreateComment(props) {

    const { form, onChange, restState } = useForm({text: ""})


    const handleSubmit = (event) => {
        event.preventDefault()
        AddComment(form, props.id)
        restState()
    }

    const handleInputChange = (event) => {
        
        const {value, name} = event.target
    
        onChange(value, name)
    }

   
    return (
        <S.CreateContainer>
            <S.FormContainer onSubmit={handleSubmit}>
                    <TextField
                        value={form.text}
                        onChange={handleInputChange}
                        variant= 'outlined'
                        label='comentar post'
                        name='text'
                        type='text'
                        size='small'
                        required
                    />
                    <S.AreaButton>
                    <Button 
                        variant='contained'
                        color="secondary"
                        type="submit"
                    >
                    ENVIAR
                    </Button>
                    </S.AreaButton>
            </S.FormContainer>
        </S.CreateContainer>
    )
}
export default CreateComment; 