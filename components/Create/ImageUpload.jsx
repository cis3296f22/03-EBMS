import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'


export default function ImageUpload({ uid, url, onUpload}) {
    const supabase = useSupabaseClient()
    const [imageUrl, setImageUrl] = useState(null)
    const [uploading, setUploading] = useState(false)
    const width = 192
    const height = 108
  
    const uploadImage = async (event) => {
      try {
        setUploading(true)
  
        if (!event.target.files || event.target.files.length === 0) {
          throw new Error('You must select an image to upload.')
        }
  
        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        const fileName = `${uid}.${fileExt}`
        const filePath = `${fileName}`

        const url = URL.createObjectURL(event.target.files[0])

        setImageUrl(url)
  
        let { error: uploadError } = await supabase.storage
          .from('billboard-images')
          .upload(filePath, file, { upsert: true })
  
        if (uploadError) {
          console.log("UPLOAD ERROR")
          throw uploadError
        }
  
        onUpload(filePath)
      } catch (error) {
        alert('Error uploading image!')
        console.log(error)
      } finally {
        setUploading(false)
      }
    }
  
    return (
      <div>
        {imageUrl ?
          ( <Image src={imageUrl} alt="Image" className="billboard image" width={192} height={108}/> ) /* true */
          :
          ( <Image src="/images/default.png" alt="Default Billboard Image" width={192} height={108}/> /* false */
        )}
        <div style={{ width: 108 }}>
          <label htmlFor="single">
            {uploading ? 'Uploading ...' : 'Upload Image'}
          </label>
          <input style={{ visibility: 'hidden', position: 'absolute'}} type="file" id="single" accept="image/*" onChange={uploadImage} disabled={uploading}/>
        </div>
      </div>
    )
  }