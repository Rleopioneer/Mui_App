import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { 
  Card, 
  CardHeader, 
  CardActions, 
  Avatar, 
  IconButton 
} from '@material-ui/core'


import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  
}))

const CustomersCard = ({
  id,
  name,
  lastName,
  email,
  avatar,
  className,
  onRemoveCustomer,
  onEditCustomer,
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)  

  const handleToggleOpenModal = () => setOpenModal(!openModal)

  const handleRemoveCustomer = () => handleToggleOpenModal()
  
  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }
  
  return (
    
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="Customer's Photo" src={avatar}>
              R
            </Avatar>
          }
          title={`${name} ${lastName}`}
          subheader={email}
        />
        
        <CardActions disableSpacing>
          <IconButton aria-label="Editar Cadastro" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Remover Cadastro" onClick={() => handleRemoveCustomer()}>
            <DeleteIcon />
          </IconButton>
        </CardActions>

      </Card>
      <ModalConfirm 
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja excluir?"
        message="Ao confirmar, não será possivel reverter esta operação"
      />
    </>
  )
}

export default CustomersCard