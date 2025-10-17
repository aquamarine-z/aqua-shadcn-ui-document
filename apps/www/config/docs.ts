import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/time-picker",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Time Picker",
          href: "/docs/components/time-picker",
          items: [],
        },
        {
          title:"Aqua Dialog Content",
          href: "/docs/components/aqua-dialog-content",
          items:[],
        }
      ],
    },
    {
      title: "Registry",
      label: "New",
      items: [
        {
          title: "Introduction",
          href: "/docs/registry",
          items: [],
        },
        {
          title: "Getting Started",
          href: "/docs/registry/getting-started",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/docs/registry/open-in-v0",
          items: [],
        },
        {
          title: "FAQ",
          href: "/docs/registry/faq",
          items: [],
        },
        {
          title: "registry.json",
          href: "/docs/registry/registry-json",
          items: [],
        },
        {
          title: "registry-item.json",
          href: "/docs/registry/registry-item-json",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [],
}
