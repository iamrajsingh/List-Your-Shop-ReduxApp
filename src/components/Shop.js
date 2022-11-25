import React, { useState } from 'react'
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import { FaTrash } from "react-icons/fa";
import "../App.css"

//redux
import { connect } from 'react-redux';
import { removeShop } from '../action/shop';


import shopListOption from "./shopArea";



const Shop = ({ shops, markComplete }) => {

    const [shopArea, setShopArea] = useState(shopListOption[0]);

    const filtered = shops.filter(shop => {
        return shop.shopArea === shopArea;
    });




    return (
        <div> Filter by Area:
            <Input
                id="exampleSelect"
                name="select"
                type="select"
                value={shopArea}

                onChange={(e) => {
                    setShopArea(e.target.value)

                }}
            >


                {shopListOption.map((shopListOption, id) => (
                    <option key={id}>
                        {shopListOption}
                    </option>
                ))}

            </Input>



            <ListGroup className='mt-5 mb-2'>


                {
                    filtered.map((shop) => (
                        <ListGroupItem key={shop.id}>
                                <h2> Shop name: <span style={{color: "#51755b"}}>{shop.title} </span></h2>
                                <span className='float-right'>
                                    <br />
                                    <h5>Shop Location: {shop.shopArea}</h5>
                                    <br />
                                    <h6>Shop Category: {shop.shopCategory}</h6>
                                    <br />
                                    <strong>From:</strong> {shop.fromdate}  <strong>To:</strong> {shop.todate}
                                    <br />

                                    <hr />

                                    <div><FaTrash onClick={() => markComplete(shop.id)} style={{ 
                                        color: "red",
                                        float: "right"  }} /></div>

                                </span>
                            

                        </ListGroupItem>
                    ))}
                {


                }
            </ListGroup>

        </div>



    )
}

const mapStateToProps = state => ({
    shops: state.shops
})

const mapDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeShop(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop); //connect
