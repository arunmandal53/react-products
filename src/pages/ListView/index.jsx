import { useEffect, useState } from "react";
import { getAllProducts, setAllProducts } from "../../localstorage";

import Table from "../../components/table";
import Button from "../../components/button";
import Modal from "../../components/modal";
import AddProduct from "../../components/add_product";


function ListView() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAllProducts().then(d=>{
            setData(d)
        })
    },[])

    useEffect(()=>{
        setAllProducts(data)
    },[data])


    function handleAddButtonClick(){
        setShowModal(true)
    }

    function handleProductData(values, setSubmitting){
        console.log(values)
        
        setData([
            ...data,
            values
        ])
        setSubmitting(false)
        setShowModal(false)
    }

    function handleDelete(index){
        console.log(index)
        data.splice(index, 1)
        setData([...data])
    }

    return (
        <div className="flex flex-col p-6 flex-grow">
            <div className="flex flex-col gap-4">
                <h2 className="text-xl">Products List</h2>
                <Button onClick={handleAddButtonClick}>Add Product</Button>
                <Table data={data} handleDelete={handleDelete}/>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} title={"Add Product"}>
                <AddProduct handleProductData={handleProductData}/>
            </Modal>
        </div>
    )
}

export default ListView;