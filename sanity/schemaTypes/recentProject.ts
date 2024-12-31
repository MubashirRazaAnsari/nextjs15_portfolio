export default {
  name: 'recentProject',
  title: 'Recent Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'deployedUrl',
      title: 'Deployed URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
