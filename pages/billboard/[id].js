import { getAllBillboardIds, getBillboardData } from '../../lib/billboard'

import BillboardDetails from '../../components/Billboard/BillboardDetails/BillboardDetails'

export default function Billboard({ billboardData }) {
  return <BillboardDetails billboard={billboardData}></BillboardDetails>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllBillboardIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const billboardData = await getBillboardData(params.id)

  return {
    props: {
      billboardData,
    }
  }
}