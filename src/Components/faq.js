import React, { PureComponent } from 'react'
import '../css/faq.css'
export default class faq extends PureComponent {
  render() {
    return (
      <>
        <div className="faq">
            <h1>FAQs</h1>
            <h4>Q . Will we get to choose our mentors?</h4>
            <p>No, we will be assuming you a mentor based on your project idea.</p>
            <h4>Q. Do we need to pay a registration fee?</h4>
            <p>No, the registration is completely free.</p>
            <h4>Q. Is there any age limit to participate?</h4>
            <p>Anyone of any age is allowed to participate. We feel innovation does not depend on age.</p>
            <h4>Q. Are we allowed to submit more than one idea?</h4>
            <p>You can submit only a single idea per team.</p>
        </div>
      </>
    )
  }
}
