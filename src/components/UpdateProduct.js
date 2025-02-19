import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProductDetails = async () => {
            console.warn(params);
            let result = await fetch(`http://localhost:5000/product/${params.id}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('user'))}`
                }
            });
            result = await result.json();
            setName(result.name)
            setPrice(result.price)
            setCategory(result.category)
            setCompany(result.company)
        };

        getProductDetails();
    }, [params]);

    const UpdateProduct = async () => {
        console.warn(name, price, category, company)
        let result = fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': "application/json",
                 authorization: `bearer ${JSON.parse(localStorage.getItem('user'))}`
            }
        });
        result = (await result).json()
        console.warn(result)
        navigate('/')

    }

    return (
        <div className="product">
            <h2>Update Product</h2>
            <input type="text" placeholder="Enter product name" className="myinputBox"
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder="Enter product price" className="myinputBox"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />

            <input type="text" placeholder="Enter product category" className="myinputBox"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />

            <input type="text" placeholder="Enter product company" className="myinputBox"
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />

            <button onClick={UpdateProduct} className="appButton">Update Product</button>
        </div>
    )
}


export default UpdateProduct;