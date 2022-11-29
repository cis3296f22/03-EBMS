import React from 'react'
import BillboardCard from '../BillboardListView/BillboardCard'
import styles from './BillboardList.module.css'

const BillboardList = ({ listingsArray }) => {
  return (<div className={styles.billboardListContainer}>
    {React.Children.toArray(listingsArray.map((props) => {
      return <BillboardCard {...props}/>
    }))}
  </div>)
}

export default BillboardList;