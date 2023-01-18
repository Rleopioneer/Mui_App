import MuiAlert from '@material-ui/lab/Alert'

import {
    Snackbar,
} from '@material-ui/core'

const Toasty = ({open, severity, text, onClose}) => {
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  return (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
    >
        <MuiAlert
            elevation={6}
            variant="filled"
            severity={severity}
        >
            {text}
        </MuiAlert>
    </Snackbar>
  )
}

export default Toasty