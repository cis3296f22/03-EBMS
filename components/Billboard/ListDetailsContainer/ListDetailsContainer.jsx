import React from 'react'
import BillboardDetails from '../BillboardDetails/BillboardDetails'
import BillboardList from '../BillboardList/BillboardList'

import billboardListings from '../../../public/listings'

import styles from './ListDetailsContainer.module.css'

const ListDetailsContainer = () => {
  return <div className={styles.listDetailContainer}>
    <BillboardList listingsArray={billboardListings}/>
    <BillboardDetails/>
  </div>
}

export default ListDetailsContainer;