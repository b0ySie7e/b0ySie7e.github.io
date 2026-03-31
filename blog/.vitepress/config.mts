import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "b0ysie7e",
  description: "Write ups y Notas de pentesting",
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/78715318',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notas', link: '/notas/pentesting' },
      { text: 'Dev Malware', link: '/malware/keylogger' },
    ],
    sidebar: {
      '/notas/': [
        {
          text: 'WRITE-UP',
          collapsed: true,
          items: [
            { 
              text: 'DockerLabs', 
              collapsed: true,
              items: [
                { text: 'QueueMedic', link: '/notas/1.QueueMedic/2024-10-8-Queuemedic' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Tryhackme', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Hackthebox', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'PortSwigger', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
          ]
        },
        {
          text: 'NOTAS',
          collapsed: true,
          items: [
            { 
              text: 'Pentesting', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Pentesting Web', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Escalada de privilegios', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Red Team', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
          ]
        },
        {
          text: 'GUIAS Y HERRAMIENTAS',
          collapsed: true,
          items: [
            { 
              text: 'MetaSploit', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Nmap', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Git', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Fortinet', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
          ]
        }
      ],
      // Seccion de notas de dev malware
      '/malware/': [
        {
          text: 'Dev Malware',
          items: [
            { text: 'Keylogger', link: '/malware/keylogger' },
          ]
        },
        {
          text: 'Dev Malware',
          items: [
            { text: 'Keylogger', link: '/malware/keylogger' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/b0ysie7e' }
    ]
  }
})