import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const SuccessPayment = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get error message from query parameters in URL
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
                <div style={{ margin: "100px 0px" }}>
                  {" "}
                  <h1>{success}</h1>
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
