"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string}[] = [
  {
    title: "Caminhões",
    href: "/docs/primitives/alert-dialog",    
  },
  {
    title: "Retroescavadeiras",
    href: "/docs/primitives/hover-card",    
  },
  {
    title: "Pás Carregadeiras",
    href: "/docs/primitives/progress",    
  },
  {
    title: "Tratores",
    href: "/docs/primitives/scroll-area",    
  },
  {
    title: "Empilhadeiras",
    href: "/docs/primitives/tabs",    
  },
  {
    title: "Motoniveladoras",
    href: "/docs/primitives/tooltip",    
  },
]

export function NavLink() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre nós
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>  
        <NavigationMenuItem>
          <NavigationMenuTrigger>Equipamentos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[400px] transition-all duration-200 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >                 
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavLink;
