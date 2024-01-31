import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from 'sanity:client'

const Gallery = ({ data }) => {
  console.log(data)
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="columns-1 gap-2 mx-2 p-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:pt-2">
      {data.gallery ? (
        data.gallery.map((imageData, index) => {
          const source = urlFor(imageData)
          return (
            <img
              key={index}
              className="w-[100%] h-[50%] object-cover cursor-pointer pt-2"
              src={`${source}`}
              alt={`Gallery Image ${index}`}
            />
          )
        })
      ) : (
        <img
          className="w-[100%] h-[50%] object-cover cursor-pointer"
          src="/images/backgroundIMGExample.jpg"
        />
      )}
    </div>
  )
}

export default Gallery
