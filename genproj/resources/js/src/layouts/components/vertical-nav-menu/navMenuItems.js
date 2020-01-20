/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: "Dashboard",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: '/dashboard/analytics',
        name: "Demographs",
        slug: "dashboard-analytics",
        i18n: "Demographs",
      },
      {
        url: '/dashboard/test',
        name: "Test 1",
        slug: "dashboard-ecommerce",
        i18n: "Test",
      },
    ]
  },
  {
    header: "Complaints and Histories",
    icon: "PackageIcon",
    i18n: "Camplaints",
    items: [
      {
        url: "/dashboard/test",
        name: "Client Complaint",
        slug: "email",
        icon: "MailIcon",
        i18n: "Client Complaint",
      },
      {
        url: "/dashboard/test",
        name: "Past History",
        slug: "chat",
        icon: "MessageSquareIcon",
        i18n: "Past History",
      },
      {
        url: "/dashboard/test",
        name: "Family History",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Test",
      },
  
      {
        url: null,
        name: "Support",
        icon: "SmileIcon",
        i18n: "Support",
        submenu: [
          {
            url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
            name: "Documentation",
            icon: "BookOpenIcon",
            slug: "external",
            i18n: "Documentation",
            target: "_blank"
          },
          {
            url: 'https://pixinvent.ticksy.com/',
            name: "Raise Support",
            icon: "LifeBuoyIcon",
            slug: "external",
            i18n: "RaiseSupport",
            target: "_blank"
          },
        ]
      },
    ]
  },
]

