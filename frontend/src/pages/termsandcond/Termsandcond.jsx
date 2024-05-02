import "./termsandcond.scss";
import { termsAndCondition } from "../../utils/termsandconditions";
import React from "react";

const Termsandcond = () => {
	return (
		<>
			<div className="termcontainer">
				<div className="subcontainer">
				<h2>Terms and Conditions</h2>	
				<h1>Please read the below-mentioned Website Terms & Conditions carefully before availing the Services at the Website
</h1>
					{termsAndCondition.map((item) => (
						<div className="contentbox">
							<h1>{item.title}</h1>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
				<h1>CONTACT INFORMATION:</h1>
				<p>Registered Address: Krishnagiri, Tamil Nadu - 635204</p>
 
 <p>Phone Number: +91-9384838353 </p>
 <p>E-mail:<a href="mailto:customerservice@indiatherapist.com">customerservice@indiatherapist.com</a></p>

			</div>
		</>
	);
};

export default Termsandcond;
