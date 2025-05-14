import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/checkout_form";

// ✅ Replace with your real publishable key from Stripe Dashboard
const stripePromise = loadStripe('pk_test_51Qei3AHJKJsM7Q69X50mkK95IBzCKyAPBYOEhrJfJUpQTk5rkNf6yXJSwXMdxKqt3i1gpSruGkV1B1xtak7SVtgA00UrUdk2BB');
const user = JSON.parse(sessionStorage.getItem("user"));

function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm user={user}/>
    </Elements>
  );
}

export default Payment;
