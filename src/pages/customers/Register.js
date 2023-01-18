import { useState } from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'

import {
    TextField,
    Button
} from '@material-ui/core'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const Register = () => {

    const classes = useStyles()

    const [form, setForm] = useState({
        name: {
            value:'',
            error: false
        },

        job:{
            value:'',
            error: false
        },
    })

    const [openToasty, setOpenToasty] = useState({
        open: false,
        text: 'Cadastro Realizado com Sucesso!!'
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError = false
        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome corretamente',
            }
        }

        if (!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo cargo corretamente',
            }
        }

        if (hasError) {
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty({
                ...openToasty,
                open: true
            })
            setIsLoading(false)
        })

    }

    return(

        <>
            <div className={classes.wrapper}>
                <TextField
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    id="outlined-basic" 
                    label="Digite o seu Nome" 
                    name="name" 
                    value={form.name.value} 
                    variant="outlined" 
                    onChange={handleInputChange} 
                />
                <TextField
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    id="outlined-basic" 
                    label="Digite o seu cargo" 
                    name="job" 
                    value={form.job.value} 
                    variant="outlined" 
                    onChange={handleInputChange} 
                />
            </div>

            <div className={classes.wrapper}>
                <Button 
                    variant="contained" 
                    color="primary"
                    disabled={isLoading}
                    onClick = {() => handleRegisterButton()}
                > 
                    { isLoading ? 'Aguarde...' : 'Cadastro '}
                
                </Button>
            </div>
            <Toasty 
                text={openToasty.text} 
                severity="success" 
                open={openToasty.open}
                onClose={() => setOpenToasty(false)}
            />
        </>

    )
    
}
export default Register