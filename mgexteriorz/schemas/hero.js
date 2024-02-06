import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landing',
  title: 'Landing Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'This will be the background image, or you can use a video.',
    }),
    defineField({
      name: 'video',
      title: 'Video Upload',
      type: 'file',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'A brief description of M&G',
    }),
  ],
})
