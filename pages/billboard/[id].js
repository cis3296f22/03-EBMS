import Head from 'next/head'
import Header from '../../components/Header/Header'

import { getAllBillboardIds, getBillboardData } from '../../lib/billboard'

import BillboardDetails from '../../components/Billboard/BillboardDetails/BillboardDetails'

export default function Billboard({ billboardData }) {
  return (<>
  <Head>
    <title>{billboardData.name}</title>
    <meta name="description" content={`${billboardData.name} in ${billboardData.location}`} />
    <link rel="icon" href="/adorado.ico" />
  </Head>

  <Header/>

  <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
    <div style={{width: "1000px"}}>
      <BillboardDetails billboard={billboardData}></BillboardDetails>
    </div>
  </div>
  </>)
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