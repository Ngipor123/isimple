import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'lv', title: 'Latvian', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'ru', title: 'Russian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'lv', title: 'Latvian', type: 'text', rows: 3 },
        { name: 'ru', title: 'Russian', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type (phone, tablet, laptop, wind, etc.)',
      type: 'string',
    }),
  ],
});
