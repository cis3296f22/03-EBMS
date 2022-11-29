import React from 'react'
import BillboardCard from '../BillboardListView/BillboardCard'
import styles from './BillboardList.module.css'

const BillboardList = ({ listingsArray }) => {
  if (listingsArray.length == 0) return (<>No billboards</>)

  return (<div className={styles.billboardListContainer}>
    {React.Children.toArray(listingsArray.map((props) => {
      return <BillboardCard {...props}/>
    }))}
  </div>)
}

export default BillboardList;