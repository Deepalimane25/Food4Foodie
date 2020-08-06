// import React from "react";
// // import { withStyles } from 'material-ui';
// // import isEmpty from 'lodash/isEmpty';
// import "./Cart.css";



// function Cart() {
//    static defaultProps = { type: "Normal" }
//     // const { CartRestaurant, CartItems } = this.props.localState;
//     // let SubTotalCost = 0;
//   return (
//     <div className="containClass">
//     {/* {isEmpty() ? */}
//         <div>
//             <h1 style={{ color: " #7e808c" }}>Cart Empty</h1>
            
//             <div style={{ color: "#93959f" }}>
//                 Good food is always cooking!
//                 Go ahead, order some yummy items from the menu.
//             </div>
//         </div>
//         :
//         <div>
//             {
//                 type === "CheckOut" ?

//                     <div className="head">
//                         <div className="headImage">
//                             {/* <img src={CartRestaurant.imageCover} alt={CartRestaurant.name} /> */}
//                         </div>
//                         <div>
//                             <div className="headTextHead">CartRestaurant.name</div>
//                             <div className="headTextSubHead">Kilpauk</div>
//                         </div>
//                     </div>
//                     :
//                     <div className="CartHead">
//                         <h1>Cart</h1>
//                         <div className="CartSubHead">form <span>CartRestaurant</span></div>
//                         <div className="CartItemHead">ITEM CartItems.length</div>
//                     </div>
//             }


//             <div className="ItemsList">

//                 {/* {CartItems.map((SingleItem) => {
//                     const SingleItemPrice = SingleItem.cost * SingleItem.ItemCount;
//                     SubTotalCost += SingleItemPrice;
//                     return (
//                         <div className="Item">
//                             <div>
//                                 <span class="icon-foodSymbol icon-veg"></span>
//                             </div>
//                             <div className="ItemName">{SingleItem.name}</div>
//                             <div>
//                                 <ItemCountButton onChange={this.handleItemChange(SingleItem)} count={SingleItem.ItemCount} />
//                             </div>
//                             <div>{SingleItemPrice}</div>
//                         </div>
//                     );
//                 }
//                 )} */}

//                 <div className="Suggestion">
//                     <textarea placeholder="Any suggestions? We will pass it on..." rows="1"></textarea>
//                 </div>
//                 {
//                     type === "CheckOut" ?
//                         <div className="Total">
//                             <div>
//                                 <div>Item Total</div>
//                                 <div>SubTotalCost.00</div>
//                             </div>
//                             <div>
//                                 <div>Restaurant Packaging Charges</div>
//                                 <div>10.00</div>
//                             </div>
//                             <div>
//                                 <div>GST</div>
//                                 <div>9.00</div>
//                             </div>
//                             <div>
//                                 <div>Delivery Charges</div>
//                                 <div>0.00</div>
//                             </div>
//                         </div>
//                         :
//                         ""
//                 }
//             </div>
//             {
//                 type === "CheckOut" ?
//                     <div className="TotalPrice">
//                         <div>TO PAY</div>
//                         <div>SubTotalCost + 19</div>
//                     </div>
//                     :
//                     <div className="CartFooter">
//                         <div className="SubTotalPrice">
//                             <div className="HeadPrice">
//                                 <div>Subtotal</div>
//                                 <div>SubTotalCost</div>
//                             </div>

//                             <div className="SubHeadPrice">Extra charges may apply</div>
//                         </div>
//                         {/* <Link to="/checkout"> */}
//                             <button>CHECKOUT</button>
//                         {/* </Link> */}
//                     </div>
//             }
//         </div>
//     {/* } */}
// </div>
//   );
// }


// export default Cart;
