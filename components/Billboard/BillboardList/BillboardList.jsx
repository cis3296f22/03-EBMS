import React from 'react'
import BillboardCard from '../BillboardListView/BillboardCard'
import styles from './BillboardList.module.css'

const BillboardList = ({ listingsArray, setCurrentSelection }) => {
  if (listingsArray.length == 0) return (<>No billboards</>)

  return (<div className={styles.billboardListContainer}>
    {React.Children.toArray(listingsArray.map((props) => {
      return <BillboardCard {...props} setCurrentSelection={setCurrentSelection}/>
    }))}
  </div>)
}

export default BillboardList;