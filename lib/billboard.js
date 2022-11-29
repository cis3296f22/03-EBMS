import supabase from '../utils/supabaseClient'

export async function getAllBillboardIds() {
  
  const billboardIdObjectArray =  (await supabase.from('billboard_listings').select('id')).data

  return billboardIdObjectArray.map((billboardIdObject) => {
    return {
      params: {
        id: billboardIdObject.id.toString(),
      },
    };
  });
}

export async function getBillboardData(id) {
  return (await supabase.from('billboard_listings').select().eq('id', id).single()).data
}