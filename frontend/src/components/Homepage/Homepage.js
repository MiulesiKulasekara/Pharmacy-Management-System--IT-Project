import "../Homepage/hstyle.css"
import bannerimage from "../images/bannerimg.png"


export default function Homepage() {
  return (
    <div class="d-flex herosection">
      <div class="d-flex h-100 ps-5" style={{flex:4}}>
        <div class="text-dark herotext">
          <h1 class="mb-3" style={{fontSize: "70px", lineHeight: "70px"}}>
            Commitment to <br />
            Excellence Care
          </h1>
          <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor{" "}
            <br />
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt <br />
            ut labore et dolore magna aliqua.
          </p>
          <div class="d-flex flex-row ">
            <a class="btn btn-primary btn-lg me-4" href="#!" role="button">
              Order by Prescription
            </a>
            <a class="btn btn-outline-primary btn-lg" href="#!" role="button">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <img src={bannerimage} class="pe-5 text-center bg-image bannerimage" />
    </div>
  );
}
