import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'What We Do Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cardimage',
      title: 'Card Image',
      type: 'image',
      description:
        'This will display an image of your choice in the cards on the "what we do page".',
    }),
    defineField({
      name: 'description',
      title: 'Description of the Work',
      type: 'text',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      description: 'A gallery showcasing the work relative to the page.',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
