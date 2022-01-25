import "./ItemListContainer.css"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


function ItemListContainer() {
   
    return (
        <div>
            <ItemList />
            <ItemCount stock={25} initial={1}/> 
        </div>
    )
}

export default ItemListContainer
