import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import axios from 'axios'

import CustomersCard from "../components/CustomersCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },

    card: {
        margin: theme.spacing(4),

    },
}))

const Customers = () => {
    const classes = useStyles()

    const [customers, setCustomers] = useState([])

   

    useEffect(()=> {
        axios.get('http://reqres.in/api/users')
            .then((response) => {
                const { data } = response.data 
            
                setCustomers(data)
            })
    }, [])

    return (
        <>
            <h1>Customers</h1>
            <Grid container>
                {
                    customers.map(item =>(
                        <Grid item xs={12} md={4}>
                            <CustomersCard
                                name={item.first_name}
                                lastName={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                            />
                        </Grid>
                    ) )
                }
            </Grid>
                        

        </>
    )
}
  
  export default Customers