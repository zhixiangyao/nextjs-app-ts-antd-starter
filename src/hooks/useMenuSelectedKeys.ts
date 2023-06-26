import { usePathname } from 'next/navigation'

const openedItem = (pathname: string): string[] => {
  const paths = pathname.split('/')

  if (paths.length === 1) {
    return []
  }

  const path = paths[1]
  return [`${path}`]
}

const selectedItems = (pathname: string): string[] => {
  const paths = pathname.split('/').filter((path) => path)

  return paths
}

const useMenuSelectedKeys = () => {
  const pathname = usePathname()

  const selectedKeys = selectedItems(pathname)
  const defaultOpenKeys = openedItem(pathname)

  return { selectedKeys, defaultOpenKeys }
}

export { useMenuSelectedKeys }
