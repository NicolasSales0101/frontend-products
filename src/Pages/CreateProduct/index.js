import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import api from "../../Api";

export default function CreateProduct() {
    
    const [prodName, setProdName] = useState("");
    const [prodPreco, setProdPreco] = useState(0);
    const [prodPrecoDesc, setProdPrecoDesc] = useState(null);
    const [prodQtEstoque, setProdQtEstoque] = useState(null);
    const [cateId, setCateId] = useState(0);

    async function sendForm(event){
        event.preventDefault();
        console.log(prodName, prodPreco, prodPrecoDesc, prodQtEstoque, cateId)

        if(cateId === 0){
            console.log("Categoria inválida")
            console.log(cateId)
        } else if (prodPreco <= 0) {
            console.log("Preço inválido")
        } else {

            let response = await api.createProduct(prodName, 
                                                   parseFloat(prodPreco), 
                                                   parseFloat(prodPrecoDesc), 
                                                   parseFloat(prodQtEstoque), 
                                                   parseFloat(cateId));

            if(response){
                console.log("Produto cadastrado");
            } else {
                console.log("Produto não cadastrado");
            }
        }
    }

    function handleProdName(event){
        setProdName(event.target.value);
    }

    function handleProdPreco(event){
        setProdPreco(event.target.value);
    }

    function handleProdPrecoDesc(event){
        setProdPrecoDesc(event.target.value);
    }
    
    function handleProdQtEstoque(event){
        setProdQtEstoque(event.target.value);
    }

    function handleCateId(event){
        setCateId(event.target.value);
    }

    return (
        <Box 
            component="form" 
            onSubmit={sendForm} 
            sx={{
                '& .MuiTextField-root': { m: 0.8, width: '30ch' }, 
                '& button': { m: 1 },
                display: "flex", 
                flexDirection:"column", 
                width:"100%", 
                justifyContent:"center", 
                alignItems:"center",
            }}
        >

            <h1>Cadastrar Produto</h1>
        
            <TextField 
                id="outlined-basic" 
                label="Product Name" 
                variant="outlined" 
                onChange={handleProdName} 
            />

            <TextField 
                id="outlined-basic" 
                label="Product Price" 
                variant="outlined" 
                onChange={handleProdPreco} 
            /> 

            <TextField 
                id="outlined-basic" 
                label="Product Price Discount" 
                variant="outlined" 
                onChange={handleProdPrecoDesc} 
            /> 

            <TextField 
                id="outlined-basic" 
                label="Quantity of products in stock" 
                variant="outlined" 
                onChange={handleProdQtEstoque} 
            /> 

            <TextField 
                id="outlined-basic" 
                label="Categorie" 
                variant="outlined" 
                onChange={handleCateId} 
            /> 

            <small>Observação: para números com casas decimais</small>
            <small> deve-se substituir a <b>","</b> (vírgula) por <b>"."</b> (ponto)</small>

            <Button variant="contained" type="submit" size="large">Register</Button>
            
        </Box>
    );
}