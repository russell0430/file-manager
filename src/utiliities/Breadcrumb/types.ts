type CrumbLink = {
  name: string
  label?: string
  link?: string
}
export type BreadCrumbContext = {
  links: CrumbLink[]
  setLinks: (links: CrumbLink[]) => void
}
