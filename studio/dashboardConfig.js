export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d821ece16d014d8cda6265b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-z5vswodb',
                  apiId: '9d232078-cdab-44a4-9794-153a146a786a'
                },
                {
                  buildHookId: '5d821ece153261cc1ba0ddb2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-thv6czje',
                  apiId: '8175612a-dda3-477a-8370-001ff454096c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Paperasse/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-thv6czje.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
