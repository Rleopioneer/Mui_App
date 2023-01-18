import { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import CustomersCard from "../../components/CustomersCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },

    card: {
        margin: theme.spacing(4),

    },
}))
 
const List = () => {
    const classes = useStyles()

    const history = useHistory()

    const [customers, setCustomers] = useState([])

    useEffect(()=> {
        axios.get('https://reqres.in/api/users')
            .then((response) => {
                const { data } = response.data 
            
                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id  => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {
                const newCustomersState = customers.filter(customers => customers.id !== id)

                setCustomers(newCustomersState)
            })
    }

    const handleEditCustomer = id => {
        history.push(`/customers/edit/${id}`)
    }

    return (
            <Grid container>
                {
                    customers.map(item =>(
                        <Grid item xs={12} md={4}>
                            <CustomersCard
                                id={item.id}
                                name={item.first_name}
                                lastName={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                                onRemoveCustomer={handleRemoveCustomer}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ) )
                }
            </Grid>
    )
}
  
  export default List