import { Item } from "@/types"
import { Props as ItemProps } from "./Item"
export type GridProps = {
    items?:Item[]
    Item?:React.FC<ItemProps>
}
