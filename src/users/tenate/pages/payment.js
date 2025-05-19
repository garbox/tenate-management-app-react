import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/checkout_form";
import PaymentInfoCard from "./components/payment_info_card";


const stripePromise = loadStripe('pk_test_51Qei3AHJKJsM7Q69X50mkK95IBzCKyAPBYOEhrJfJUpQTk5rkNf6yXJSwXMdxKqt3i1gpSruGkV1B1xtak7SVtgA00UrUdk2BB');
const user = JSON.parse(sessionStorage.getItem("user"));

function Payment() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="container mt-5">
          <div className="row">
            <PaymentInfoCard user={user} />
            <CheckoutForm user={user} />
          </div>
        </div>
      </Elements >
    </>
  );
}

export default Payment;
