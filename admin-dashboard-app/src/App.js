import {BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";

import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Topbar/>
                <div className="container">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users" element={<UserList/>}/>
                        <Route path="/user/:userId" element={<User/>}/>
                        <Route path="/newUser" element={<NewUser/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                        <Route path="/product/:productsId" element={<Product/>}/>
                        <Route path="/product/newproduct" element={<NewProduct/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
