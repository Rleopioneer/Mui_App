import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        padding: 15
    }
}))

const Clean = ({ Component }) => {
    const classes = useStyles()
    return (
        <>
            <Container className={classes.container}>
                <Component />
            </Container>
        </>
    )
}
export default Clean