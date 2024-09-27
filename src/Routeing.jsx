// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   redirect,
// } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Auth from "./Pages/Auth/Auth";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51Q2MYmRtY77iQVSR1tOHwnPrUawC6ggIRdvJiaLULKzBQKC3jc3mGg7RWhz1kYQoir1bVGX2F5s0GTSuf2IRDZ6K00pHT6xoLi"
// );

// function Routeing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />

//         {/* Wrap Payment Route with Stripe's Elements */}
//         <Route
//           path="/payment"
//           element={
//             <ProtectedRoute
//               msg={"you must log in to pay"}
//               redirect={"/payments"}
//             >
//               <Elements stripe={stripePromise}>
//                 <Payment />
//               </Elements>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute
//               msg={"you must log in to your access orders"}
//               redirect={"/Orders"}
//             >
//               <Orders />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/Category/:CategoryName" element={<Results />} />
//         <Route path="/Products/:ProductId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routeing;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Q2MYmRtY77iQVSR1tOHwnPrUawC6ggIRdvJiaLULKzBQKC3jc3mGg7RWhz1kYQoir1bVGX2F5s0GTSuf2IRDZ6K00pHT6xoLi"
);

function Routeing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        {/* Wrap Payment Route with Stripe's Elements */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"You must log in to make a payment."}
              redirect={"/auth"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/Orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your order."}
              redirect={"/Orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:CategoryName" element={<Results />} />
        <Route path="/products/:ProductId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routeing;
