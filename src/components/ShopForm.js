import React, { useState } from 'react'

import {
    FormGroup,
    Input,
    Button,
    InputGroup,

} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

import categoryList from "./category";
import shopListOption from "./shopArea";

import { v4 } from 'uuid';

//redux
import { connect } from 'react-redux';
import { addShop } from "../action/shop";




const ShopForm = ({ addShop }) => {



    const [shopArea, setShopArea] = useState(shopListOption[0]);
    const [shopCategory, setShopCategory] = useState(categoryList[0]);

    const [title, setTitle] = useState("");

    //date
    const [disable, setDisable] = useState(true);
    const [todate, setTodate] = useState([]);
    const [fromdate, setFromdate] = useState("");

    const [todateformat, setTodateformat] = useState('Enter to Date');
    const [fromdateformat, setFromdateformat] = useState('Enter From Date');



    const handletodate = (e) => {
        const gettodatevalue = e.target.value;
        const setdateformat = gettodatevalue.split('-');
        const settoyear = setdateformat[0];
        const settomonth = setdateformat[1];
        const settodate = setdateformat[2];
        const settodateformat = settoyear + "-" + settomonth + "-" + settodate;
        setTodate(gettodatevalue);
        setTodateformat(settodateformat);
        setDisable(false);
        console.log(settodateformat);
    }

    const handlefromdate = (e) => {
        const getfromdatevalue = e.target.value;
        const setfromformat = getfromdatevalue.split("-");
        const setfromyear = setfromformat[0];
        const setfrommonth = setfromformat[1];
        const setfromdate = setfromformat[2];
        const setfromformatdate = setfromyear + "-" + setfrommonth + "-" + setfromdate;
        setFromdate(getfromdatevalue);
        setFromdateformat(setfromformatdate);
        console.log(setfromformatdate);

    }

    function allLetter(inputtxt) {
        console.log(inputtxt.value);
        const letters = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
        if (inputtxt.value.match(letters)) {
            return inputtxt.value;
            
        }
        else {
            return '';
        }
    }



    const handleSubmit = e => {

        e.preventDefault();

        if (title === '') {
            return alert("Please enter a shop name");

        } else if (todateformat > fromdateformat) {
            return alert("Please select valid date");
        }else if( fromdate === ""){
            return alert("enter from date")
        }

        const shop = {
            title,
            shopCategory,
            shopArea,
            todate,
            fromdate,
            id: v4()
        }

        addShop(shop)

        console.log(shop)




        setTitle('');

    }

    //validation



    return (
        <div onSubmit={handleSubmit} required>

            <h1>List Your Shop Here</h1>
            
            <FormGroup>

                <InputGroup>
                    <Input
                        type='text'
                        name='shop'
                        id='shop'                        
                        placeholder=' Enter Shop name'
                        value={title}

                        onChange={e => {
                            const value = allLetter(e.target)

                            setTitle(value)
                        }}
                    >


                    </Input>

                    <div className="input-group-append">
                        <Button color="success" onClick={handleSubmit}>
                            Add
                        </Button>

                    </div>
                </InputGroup>
            </FormGroup>

            Area: <Input
                id="exampleSelect"
                name="select"
                type="select"
                value={shopArea}
                onChange={e => setShopArea(e.target.value)}>

                {shopListOption.map((shopListOption, id) => (
                    <option key={id}>
                        {shopListOption}
                    </option>
                ))}

            </Input>

            Category: <Input
                id="shopCategory"
                name="select"
                type="select"
                value={shopCategory}
                onChange={e => setShopCategory(e.target.value)}>

                {categoryList.map((shopCategory, id) => (
                    <option key={id}>
                        {shopCategory}
                    </option>
                ))}
            </Input>

            <div required>
                To date: <Input type='date'
                    name="todate"
                    placeholder="dd-mm-yyyy"
                    onChange={(e) => handletodate(e)} />

                From date: <Input type='date'
                    name="fromdate"
                    placeholder="dd-mm-yyyy"
                    disabled={disable}
                    onChange={(e) => handlefromdate(e)} />
            </div>


            <br /><hr />
            <div style={{
                display: "flex",
                background: "#eeeee4",
                borderRadius: "15px",
                padding: "20px",
                height: "30px",
                fontSize: "20px",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",

            }}>Shop List</div>

        </div>
    )
};


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addShop: shop => {
        dispatch(addShop(shop))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopForm);
