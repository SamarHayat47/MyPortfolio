import React from "react";
import Heading from "./Heading";

function CtaSection() {
  return (
    <div className="cta-section mt-5">
      <Heading heading="Ready to Get Started?" />
      <div className="flex justify-between">
        <p>Join our community and take your business to the next level.</p>
        <button className="cta-button">Sign Up Now</button>
      </div>
    </div>
  );
}

export default CtaSection;
