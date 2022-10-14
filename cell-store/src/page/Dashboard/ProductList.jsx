import s from "./ProductList.module.css"
import Sidebar from "./Sidebar"
/* import SearchProduct from '../../components/SearchProduct/SearchProduct'; */
import ProductAdmin from './ProductAdmin';

/* import { Link } from "react-router-dom"; */

const ProductList = () => {
  return (
    <div className={`list ${s.listProd}`}>
      <Sidebar/>
      <div className={`listContainer ${s.listContainerProd}`}>
        {/* <SearchProduct /> */}
        <ProductAdmin />
      </div>
    </div>
  )
}

export default ProductList