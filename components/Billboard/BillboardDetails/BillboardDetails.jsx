import React from 'react'

import styles from './BillboardDetails.module.css'

const BillboardDetails = ({billboard}) => {
  console.log(billboard)

  return (
    <div className={styles.billboardFullViewContainer}>
      <div className={styles.billboardFullView}>
        {!billboard ? "" : (
          <div>
            {billboard.name}, {billboard.location}, {billboard.rate}
          </div>
        )}
      </div>
    </div>
  )
}

export default BillboardDetails;
