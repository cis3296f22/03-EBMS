import React from 'react'
import billboardListings from '../../../public/listings'
import Billboard from '../BillboardListView/BillboardListView'
import styles from './BillboardList.module.css'

const BillboardList = () => {
  return (<div className={styles.billboardListContainer}>
    {React.Children.toArray(billboardListings.map((props) => {
      return <Billboard {...props}/>
    }))}
  </div>)
}

export default BillboardList;