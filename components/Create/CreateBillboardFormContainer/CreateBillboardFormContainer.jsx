import React from 'react'

import CreateBillboardForm from '../CreateBillboardForm/CreateBillboardForm'
import styles from './CreateBillboardFormContainer.module.css'

const CreateBillboardFormContainer = ({ session }) => {
  return (
    <div className={styles.createBillboardFormContainer}>
      <CreateBillboardForm session={session}/>
    </div>
  )
}

export default CreateBillboardFormContainer;