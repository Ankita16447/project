// // import React from 'react';
// // // import {useSelector} from 'react-redux';
// // import CartItem from '../components/CartItem';
// // import cart from '../assets/cart.jpg';

// // const Cart = () => {
 
// //   return (
// //     <div>
// //       <img className = "w-full h-80 object cover" src = {cart} alt ="" />

// //       <div className = "max-w-screen-xl mx-auto py-20 flex">
// //         <CartItem />
// //         <div className = "w-1/3 bg-[#fafafa] py-6 px-4">
// //         <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
// //           <h2 className = "text-2xl font-medium">cart totals</h2>
// //           <p className = 'flex item-center gap-4 text-base'>
// //             SubTotal{" "}
// //             <span className="font-titleFont font-bold text-lg">$ 200</span>
// //           </p>

// //           <p className="flex items-start gap-4 text-base">
// //             Shipping{" "}
// //             <span>Lorem ipsum dollar sit amet consectetur adipisicing elit,Quos veritatis.
// //             </span>
// //           </p>
// //         </div>
// //         <p className = "font-titleFont font-semibold flex justify-between mt-6">
// //         Total <span className="text-xl font-bold">$200</span>
// //         </p>

// //         <button className = "text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100">proceed to checkout</button>
// //       </div>
// //       </div>

     
      
// //     </div>
// //   )
// // }

// // export default Cart

// import styled from "styled-components";

// const Cart = () => {
//   return <Wrapper></Wrapper>;
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;

//   .grid-four-column {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   .grid-five-column {
//     grid-template-columns: repeat(4, 1fr) 0.3fr;
//     text-align: center;
//     align-items: center;
//   }
//   .cart-heading {
//     text-align: center;
//     text-transform: uppercase;
//   }
//   hr {
//     margin-top: 1rem;
//   }
//   .cart-item {
//     padding: 3.2rem 0;
//     display: flex;
//     flex-direction: column;
//     gap: 3.2rem;
//   }

//   .cart-user--profile {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 1.2rem;
//     margin-bottom: 5.4rem;

//     img {
//       width: 8rem;
//       height: 8rem;
//       border-radius: 50%;
//     }
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .cart-user--name {
//     text-transform: capitalize;
//   }
//   .cart-image--name {
//     /* background-color: red; */
//     align-items: center;
//     display: grid;
//     gap: 1rem;
//     grid-template-columns: 0.4fr 1fr;
//     text-transform: capitalize;
//     text-align: left;
//     img {
//       max-width: 5rem;
//       height: 5rem;
//       object-fit: contain;
//       color: transparent;
//     }

//     .color-div {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       gap: 1rem;

//       .color-style {
//         width: 1.4rem;
//         height: 1.4rem;

//         border-radius: 50%;
//       }
//     }
//   }

//   .cart-two-button {
//     margin-top: 2rem;
//     display: flex;
//     justify-content: space-between;

//     .btn-clear {
//       background-color: #e74c3c;
//     }
//   }

//   .amount-toggle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2.4rem;
//     font-size: 1.4rem;

//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }

//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }

//   .remove_icon {
//     font-size: 1.6rem;
//     color: #e74c3c;
//     cursor: pointer;
//   }

//   .order-total--amount {
//     width: 100%;
//     margin: 4.8rem 0;
//     text-transform: capitalize;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: flex-end;

//     .order-total--subdata {
//       border: 0.1rem solid #f0f0f0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.8rem;
//       padding: 3.2rem;
//     }
//     div {
//       display: flex;
//       gap: 3.2rem;
//       justify-content: space-between;
//     }

//     div:last-child {
//       background-color: #fafafa;
//     }

//     div p:last-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.heading};
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-five-column {
//       grid-template-columns: 1.5fr 1fr 0.5fr;
//     }
//     .cart-hide {
//       display: none;
//     }

//     .cart-two-button {
//       margin-top: 2rem;
//       display: flex;
//       justify-content: space-between;
//       gap: 2.2rem;
//     }

//     .order-total--amount {
//       width: 100%;
//       text-transform: capitalize;
//       justify-content: flex-start;
//       align-items: flex-start;

//       .order-total--subdata {
//         width: 100%;
//         border: 0.1rem solid #f0f0f0;
//         display: flex;
//         flex-direction: column;
//         gap: 1.8rem;
//         padding: 3.2rem;
//       }
//     }
//   }
// `;

// export default Cart;
