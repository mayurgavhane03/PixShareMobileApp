import { defineField, defineType } from 'sanity'
/* there is not need of space in name of the schemas */
export default defineType({
  name: 'items', // Remove the space from the name
  title: 'Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }], // Corrected reference type
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // Add other fields as needed
  ],
})
