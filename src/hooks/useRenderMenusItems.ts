import { type MenuProps } from 'antd'
import React, { useMemo } from 'react'

export type Route = {
  name: string
  path: string
  icon?: React.ReactElement
  children?: Route[]
}

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const useRenderMenusItems = (menus: Route[]): MenuItem[] => {
  return useMemo(
    () =>
      menus.map(({ name, path, icon, children = [] }) => {
        if (children.some((subRoute) => !!subRoute.name)) {
          return getItem(
            name,
            path,
            icon,
            children.map((e) => getItem(e.name, e.path, e.icon)),
          )
        } else {
          return getItem(name, path, icon)
        }
      }),
    [menus],
  )
}

export { useRenderMenusItems }
