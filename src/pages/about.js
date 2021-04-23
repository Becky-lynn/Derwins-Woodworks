import React from "react"
import Default from "../layout/default.js"
import Seo from "../components/seo.js"

export default function About() {
    return (
        <Default>

        <Seo title="About Derwin's Woodworks"></Seo>

         <div className="row about">
          <div className="col-sm-5">
            {/* <h1>About Us</h1> */}

            {/* <p>Welcome to Derwin's Woodworks</p> */}
            <p><img className="img-fluid" src="/images/fredderwin.png" alt="Fred Derwin" /></p>
          </div>
          <div className="col-sm-7">
          <p>When Fred was 30 years of age he decided to go to college and become an architect.  He graduated from Fay Jones School of Architecture at the University of Arkansas in 1978.  He graduated #1 in his class and was asked by Fay Jones to work for him while he was doing his apprenticeship. While working for Fay Jones he was one of the original draftsman on the Thorncrown Chapel in Eureka Springs, Arkansas. When he took the Arkansas board exam for architects he ranked #3 in the state.  During his career he owned Fred Derwin Design and Construction and Architectural Resources.  He designed and built homes in the Fayetteville, Arkansas, area as well a few commercial projects.  He is known for his cabinet work in the homes he built and designed.</p>
          <p>When you ask him what he is most proud of he would say his children. But, taking a horse back trip from his home in Arkansas to the Sierra Nevada mountains in California was an amazing experiance.  He left his home with two horses and various supplies he would need.  The trip took a great deal of planning prior to leaving and took 6 months to complete. He met a lot of interesting people on the way</p>
          <p>Fred now spends his days in Winslow Arkansas as a master woodworker.  You can find him in his workshop building toys and furniture. He is well known in the community he lives and donates a lot of his items to charity auctions.</p>
          </div>
         </div>

        </Default>
    )
}