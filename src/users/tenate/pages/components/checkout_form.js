import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import ApiCall from "../../../../utilities/api-call";

function CheckoutForm({ user }) {
    const stripe = useStripe();
    const elements = useElements();

    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const token = user?.token;

    useEffect(() => {
        if (user?.latest_agreement?.rent) {
            setAmount(user.latest_agreement.rent);
        }
    }, [user.latest_agreement?.rent]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setMessage("");

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
            });

            if (error) throw new Error(error.message);

            const response = await ApiCall({
                method: "POST",
                endpoint: "payment/confirm",
                token,
                payload: {
                    payment_method_id: paymentMethod.id,
                    amount,
                    user_id: user.id,
                },
            });

            if (response === true) {
                setMessage("Payment successful!");
                cardElement.clear();
                setAmount(0);
            }

            else {
                setMessage(response.message || "Payment failed");
            }
        }
        catch (err) {

            setMessage(`❌ ${err.message || "Payment failed. Please try again."}`);
        }
        finally {
            setLoading(false);
        }
    };

    return (
            <div className="card col-6 p-4 shadow border-0">
                <div className="card-header bg-dark text-white">
                    <h5>Checkout</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <p className="mb-3">
                            Amount: <strong>${(amount / 100).toFixed(2)}</strong>
                        </p>

                        <div className="mb-3 p-2 border rounded">
                            <CardElement />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={!stripe || loading}
                        >
                            {loading ? "Processing..." : "Pay Now"}
                        </button>

                        {message && (
                            <div className="mt-3 alert alert-success" role="alert">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
    );
}

export default CheckoutForm;
