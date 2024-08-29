import './termsandcondition.scss';
import {
  termsAndCondition,
  privacyPolicy,
} from '../../utils/termsandconditions';

const TermsandCondition = () => {
  return (
    <section>
      <>
        <div className="termcontainer">
          <div className="subcontainer">
            <div>
              <h2>Terms and Conditions</h2>
              <h1>
                Please read the below-mentioned Website Terms & Conditions
                carefully before availing the Services at the Website
              </h1>

              <ol>
                {termsAndCondition.map((item, ind) => {
                  if (item.subpoint) {
                    return (
                      <li key={ind}>
                        {item.point}
                        <ul>
                          {item.subpoint.map((subpoint, inde) => (
                            <li key={inde}>{subpoint}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return <li key={ind}>{item.point}</li>;
                  }
                })}
              </ol>
            </div>
            <div>
              <h2>Privacy Policy</h2>
              {privacyPolicy.map((item, ind) => (
                <div key={ind} className="contentbox">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      );
    </section>
  );
};

export default TermsandCondition;
