import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import "./cancelpayment.scss";

const CancelPayment = () => {
  const [cancel, setCancel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get error message from query parameters in URL
    setLoading(false);

    const queryParams = new URLSearchParams(window.location.search);
    const cancel = queryParams.get("cancel");
    setCancel(cancel);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          {cancel ? (
            <>
              <div className="cancelPayment">
                <div className="cancel_payment_innercontainer">
                  <h1>Something went wrong</h1>
                  <p>Please contact our customer care +919384838353</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>You cannot access this page</h1>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default CancelPayment;
