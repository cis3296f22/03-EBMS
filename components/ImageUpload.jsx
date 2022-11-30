import React, { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'


export default function ImageUpload({onUpload, imageType}) {
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

        const url = URL.createObjectURL(event.target.files[0])
  
        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        const urlName = url.split('/').pop()
        const fileName = `${urlName}.${fileExt}`
        const filePath = `${fileName}`

        setImageUrl(url)
  
        let { data, error: uploadError } = await supabase.storage
          .from('billboard-images')
          .upload(filePath, file, { upsert: true })
        
        console.log(data.path)

        if (uploadError) {
          console.log("UPLOAD ERROR")
          throw uploadError
        }

        const string = "https://uomcmbqkndtmleifmays.supabase.co/storage/v1/object/public/billboard-images/" + data.path
  
        onUpload(string)
      } catch (error) {
        alert('Error uploading image!')
        console.log(error)
      } finally {
        setUploading(false)
      }
    }
  
    return (
      <div>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Image"
            className="billboard image"
            width={192}
            height={108}
          />
        ) : (
          <Image
            src={imageType == 0 ? "/images/default.png" : "/images/default2.png"}
            alt="Default Billboard Image"
            width={192}
            height={108}
          />
        )}
        <div>
        <input
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadImage}
            disabled={uploading}
          />
          </div>
      </div>
    )
  }