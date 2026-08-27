import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'iphone_model',
  title: 'iPhone Model',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Model Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prices',
      title: 'Prices (€)',
      type: 'object',
      fields: [
        { name: 'screen_orig', title: 'Screen Original', type: 'number' },
        { name: 'screen_copy', title: 'Screen Copy', type: 'number' },
        { name: 'battery', title: 'Battery', type: 'number' },
        { name: 'camera', title: 'Camera', type: 'number' },
        { name: 'body', title: 'Body/Back Glass', type: 'number' },
        { name: 'home_button', title: 'Home Button/Touch ID', type: 'number' },
        { name: 'charging_port', title: 'Charging Port', type: 'number' },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'object',
      fields: [
        { name: 'lv', title: 'Latvian', type: 'string' },
        { name: 'ru', title: 'Russian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'object',
      fields: [
        { name: 'lv', title: 'Latvian', type: 'text', rows: 3 },
        { name: 'ru', title: 'Russian', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
      ],
    }),
  ],
});
