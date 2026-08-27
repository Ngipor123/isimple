import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+371 22487593',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'info@isimple.lv',
    }),
    defineField({
      name: 'address',
      title: 'Address Text',
      type: 'string',
      initialValue: 'Biķeru iela 4, Dreiliņi, Stopiņu pagasts, Ropažu novads, LV-2130',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Link',
      type: 'url',
      initialValue: 'https://www.facebook.com/isimple.lv',
    }),
  ],
});
