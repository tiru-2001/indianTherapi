import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import "./successpayment.scss";
import tqpayment from "../../assets/images/tqpayment.jpg";

const SuccessPayment = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const errorMessage = queryParams.get("error");
    const successMessage = queryParams.get("success");
    setSuccess(successMessage);
    setError(errorMessage);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error || success ? (
            <>
              {error && <div>{error}</div>}
              {success && (
                <div className="successpage">
                  <h1>{success}</h1>
                  <div className="success_section">
                    <img src={tqpayment} alt="thank you for your payment" />
                    <p>
                      Dear Thank you for your payment. Your appointment with
                      India Therapist is confirmed for {success}. We look
                      forward to assisting you. If you have any questions or
                      need to reschedule, please contact us on WhatsApp at
                      +919384838353 Warm regards, India Therapist Team
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div>
                <h1>Cannot access this page</h1>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SuccessPayment;
