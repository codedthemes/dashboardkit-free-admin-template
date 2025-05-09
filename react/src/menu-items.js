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
          icon: 'ph-gauge',
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
          icon: 'ph-compass-tool',
          url: '/typography'
        },
        {
          id: 'color',
          title: 'Color',
          type: 'item',
          icon: 'ph-palette',
          url: '/color'
        },
        {
          id: 'icons',
          title: 'Icons',
          type: 'collapse',
          icon: 'ph-flower-lotus',
          children: [
            {
              id: 'font-awesome-5',
              title: 'Font Awesome',
              type: 'item',
              url: '/icons/font-awesome-5'
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
          icon: 'ph-lock-key',
          url: '/login',
          target: true
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          icon: 'ph-user-circle-plus',
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
          icon: 'ph-desktop'
        },
        {
          id: 'menu-level',
          title: 'Menu Levels',
          type: 'collapse',
          icon: 'ph-tree-structure',
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
          icon: 'ph-cloud-slash'
        }
      ]
    }
  ]
};

export default menuItems;
