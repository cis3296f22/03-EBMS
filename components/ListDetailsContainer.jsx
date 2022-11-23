import React from 'react'
import Billboard from './Billboard'
import BillboardDetails from './BillboardDetails'
import billboardListings from '../public/listings'

import styles from './ListDetailsContainer.module.css'

const ListDetailsContainer = () => {
  return <div className={styles.listDetailContainer}>
    <div className={styles.billboardListContainer}>
      {React.Children.toArray(billboardListings.map((props) => {
        return <Billboard {...props}/>
      }))}
    </div>
    <BillboardDetails/>
  </div>
}

export default ListDetailsContainer;