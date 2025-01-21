// Menu configuration for default layout
const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'collapse',
          icon: 'material-icons-two-tone',
          iconname: 'home',
          children: [
            {
              id: 'sales',
              title: 'Sales',
              type: 'item',
              url: '/dashboard/sales'
            }
          ]
        }
      ]
    },
    {
      id: 'ui-element',
      title: 'ELEMENTS',
      subtitle: 'UI Components',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'typography',
          title: 'Typography',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'text_fields',
          url: '/typography'
        },
        {
          id: 'color',
          title: 'Color',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'color_lens',
          url: '/color'
        },
        {
          id: 'icons',
          title: 'Icons',
          type: 'collapse',
          icon: 'material-icons-two-tone',
          iconname: 'history_edu',
          children: [
            {
              id: 'feather',
              title: 'Feather',
              type: 'item',
              url: '/icons/Feather'
            },
            {
              id: 'font-awesome-5',
              title: 'Font Awesome',
              type: 'item',
              url: '/icons/font-awesome-5'
            },
            {
              id: 'material',
              title: 'Material',
              type: 'item',
              url: '/icons/material'
            }
          ]
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      subtitle: '15+ Redymade Pages',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'verified_user',
          url: '/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          icon: 'material-icons-two-tone',
          iconname: 'person_add_alt_1',
          url: '/register',
          target: true
        }
      ]
    },
    {
      id: 'support',
      title: 'OTHER',
      subtitle: 'Extra More Things',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'material-icons-two-tone',
          iconname: 'storefront'
        },
        {
          id: 'menu-level',
          title: 'Menu Levels',
          type: 'collapse',
          icon: 'material-icons-two-tone',
          iconname: 'list_alt',
          children: [
            {
              id: 'menu-level-1.1',
              title: 'Level 1.1',
              type: 'item',
              url: '#'
            },
            {
              id: 'menu-level-1.2',
              title: 'Level 2.2',
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-2.1',
                  title: 'Level 2.1',
                  type: 'item',
                  url: '#'
                },
                {
                  id: 'menu-level-2.2',
                  title: 'Level 2.2',
                  type: 'collapse',
                  children: [
                    {
                      id: 'menu-level-3.1',
                      title: 'Level 3.1',
                      type: 'item',
                      url: '#'
                    },
                    {
                      id: 'menu-level-3.2',
                      title: 'Level 3.2',
                      type: 'item',
                      url: '#'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'disabled-menu',
          title: 'Disabled Menu',
          type: 'item',
          url: '#',
          classes: 'nav-item disabled',
          icon: 'material-icons-two-tone',
          iconname: 'power_off'
        }
      ]
    }
  ]
};

export default menuItems;
