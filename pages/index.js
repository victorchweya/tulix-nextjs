import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import DownloadCTA from "../components/downloadCTA";
import HeroImage from "../public/img/main-image.png";
import CtaImage from "../public/img/cta.png";
import Control from "../public/img/business-2.png";
import Budgeting from "../public/img/budgeting-2.png";
import SharePool from "../public/img/healthy-money2.png";
import HeatlhtyMoney from "../public/img/share-pool-2.png";
// import DashboardMockup from '../public/img/dashboard-mockup.png'
// import BeneficiaryMockup from '../public/img/beneficiary-mockup.png'
// import PaybillMockup from '../public/img/paybill-mockup.png'
// import TransactionMockup from '../public/img/transaction-mockup.png'
// import ReceiptMockup from '../public/img/receipt-mockup.png'
// import Subscribe from '../components/Subscribe'

export default function Home() {
  const pageTitle = "Tulix - The Smart Way To Manage Money";
  const pageDescription =
    "Split, spend, save & share money with anyone in Kenya, from anywhere in the world.";
  const pageImage =
    "https://res.cloudinary.com/tulix/image/upload/v1678217415/blog/Media-Link-Preview-Image_March2023_b3soic.png";
  return (
    <Layout>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://tulix.app" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <title>{pageTitle}</title>
      </Head>
      <div>
        <section className="hero mb-5">
          <div className="container hero-bg bg-primary">
            <div className="row justify-content-between">
              <div className="col-lg-5  d-flex flex-column justify-content-center mb-5 mb-md-0">
                <h1 className="hero-title mt-4 mb-3 text-light">
                  The smart way to manage money
                </h1>
                <p className="lead mb-5 text-white">
                  Split, spend, save & share money on Tulix from anywhere in the
                  world.
                </p>
                <div className="hero-cta ">
                  {/* <Subscribe id="email-input-1"/> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="small text-light">Download Tulix</p>
                      <DownloadCTA />
                    </div>

                    {/* <div className="col-lg-5 mb-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                        className="btn btn-success btn-lg btn-block text-light"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="mr-2  bi-google-play"></i>
                        Google Play
                      </a>
                    </div>
                    <div className="col-lg-5 mb-2">
                      <a
                        href="https://apps.apple.com/ke/app/tulix/id1587163986"
                        className="btn btn-success text-light btn-lg btn-block"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="mr-2 bi-apple"></i>
                        App Store
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex justify-content-center hero-img">
                {/* <Image 
								src={HeroImage} 
								alt="tulix" 
								className="img-fluid pl-lg-5" 
								priority 
								placeholder="blur"
								height={455} 
								width={463}
								/> */}
                <Image
                  src={CtaImage}
                  alt="tulix dashboard-mockup"
                  className="img-fluid"
                  placeholder="blur"
                  // layout="responsive"
                  width={321.28}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className=" h1 mb-4 ">Why you'll love using Tulix </h2>
                <p>
                  Because we've built it with you, your people and your money in
                  mind.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <Image
                  src={Budgeting}
                  alt="tulix dashboard-mockup"
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h3 className="mb-4">Budgeting has never been easier</h3>

                <p className="lead mb-0">
                  Simplify everyday payments using Tulix Jars. Need to split
                  your money for groceries, medical bills, school fees or just
                  an outing or celebration? We’ve got you covered.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
              <div className="col-lg-5 order-2 order-md-1">
                <h3 className="mb-4">Share and pool money with your people</h3>

                <p className="lead  mb-0">
                  For the first time ever, add friends and family to your shared
                  jars where you can contribute and manage money together for
                  shared payments.
                </p>
              </div>
              <div className="col-lg-4 offset-lg-1  order-1 order-md-2  mb-5 mb-lg-0">
                <Image
                  src={SharePool}
                  alt="tulix dashboard-mockup"
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <Image
                  src={Control}
                  alt="tulix dashboard-mockup"
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h3 className="mb-4">Take control of your money</h3>

                <p className="lead mb-0">
                  Struggling to keep up with all your expenses? Easily sort your
                  payments by category and receive an insightful summary of your
                  transactions so you can spend better.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
              <div className="col-lg-5 order-2 order-md-1">
                <h3 className="mb-4">Build healthier money relationships</h3>

                <p className="lead mb-0">
                  Whether it's a one-off or recurring expense, Tulix makes
                  managing financial relationships a breeze…because money
                  doesn’t always have to be awkward.
                </p>
              </div>
              <div className="col-lg-4 offset-lg-1  order-1 order-md-2 mb-5 mb-lg-0">
                <Image
                  src={HeatlhtyMoney}
                  alt="tulix dashboard-mockup"
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="hero-3 mb-5">
          <div className="container">
            <div className="row justify-content-center py-0 py-lg-5">
              <div className="col-lg-8 text-center">
                <h2 className="h1 mb-4">
                  All of this in one app… and we’re just getting started{" "}
                </h2>
              </div>
              <div className="row justify-content-center px-3">
                <div className="col-lg-12 text-center">
                  <p className="small text-light">Download Tulix On</p>
                </div>
                <DownloadCTA />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h2 className=" h1 mb-4">Frequently asked questions</h2>
                    <p>
                      If you have anything else you want to ask,{" "}
                      <a href="mailto:support@tulix.app">reach out to us.</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-lg-4 mb-5">
                    <h6 className="mb-4">
                      What is Tulix? (Is Tulix a money transfer app?)
                    </h6>
                    <p className="small">
                      Tulix is a smart, new way for Kenyans anywhere to share
                      money, budget and manage finances better.
                    </p>
                    <p className="small">
                      The app enables users globally to instantly pay a business
                      in Kenya from anywhere in the world using mobile money.
                    </p>
                    <p className="small">
                      Users are able to share money on the app with their
                      friends and family for specific needs such as school fees,
                      rent and groceries, etc. without losing visibility over
                      how and where money is used.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="mb-4">What can I use the Tulix app for?</h6>
                    <p className="small">
                      Tulix enables you to pay for day-to-day things like
                      airtime, groceries and bigger expenses like school fees
                      and medical bills from anywhere in the world.
                    </p>
                    <p className="small">
                      Create multiple jars as an easy way to help you budget and
                      make sure there’s always money for the important stuff.
                      Once those are out of the way it’s time to have fun.
                    </p>
                    <p className="small">
                      Use Tulix to pay for dinner and drinks on a night out and
                      even create a jar to plan for a vacation with your
                      friends.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="mb-4">What is a jar?</h6>
                    <p className="small">
                      Think of a jar as a separate place where you set aside
                      money for specific uses, whether for yourself or others.
                      With jars, you can manage your money better and get so
                      much more.
                    </p>
                    <p className="small">
                      Ready to try jars? Download the app and check them out
                      yourself.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="mb-4">
                      Do I need a Kenyan mobile phone line to use Tulix?
                    </h6>
                    <p className="small">
                      No. You can register on Tulix using any number that you're
                      able to receive SMS messages on.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-4">
                      Can I use Tulix to send money to an individual?
                    </h6>
                    <p className="small">
                      Tulix facilitates Person-to-Business payments. You can
                      create and share jars with other users to make payments to
                      businesses.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-4">
                      Can I use Tulix if I’m in Kenya? (Is Tulix only for people
                      in the diaspora)
                    </h6>
                    <p className="small">
                      Yes. Tulix is a Kenyan product for all Kenyans globally
                      whether at home or abroad.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-5">
                    <h6 className="mb-4">
                      How do i know my funds are safe on my Tulix wallet?
                    </h6>
                    <p className="small">
                      We work with licensed institutions to credit and debit
                      funds on your Tulix account. Together with these regulated
                      3rd parties, we've built in the necessary safeguards in
                      place to guarantee the safety of your funds at all times
                    </p>
                  </div> */}
                  <div className="col-lg-12 mb-5">
                    <div className="accordion" id="accordionFAQs">
                      <div className="card">
                        <div className="card-header " id="headingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 btn-lg text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What is Tulix?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse "
                          aria-labelledby="headingOne"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              Tulix is a smart, new way for Kenyans anywhere to
                              share money, budget and manage finances better.
                            </p>
                            <p>
                              The app enables users globally to instantly pay a
                              business in Kenya from anywhere in the world using
                              mobile money.
                            </p>
                            <p>
                              Users are able to share money on the app with
                              their friends and family for specific needs such
                              as school fees, rent and groceries, etc. without
                              losing visibility over how and where money is
                              used.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card ">
                        <div className="card-header " id="headingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What can I use the Tulix app for?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              Tulix enables you to pay for day-to-day things
                              like airtime, groceries and bigger expenses like
                              school fees and medical bills from anywhere in the
                              world.
                            </p>
                            <p>
                              Create multiple jars as an easy way to help you
                              budget and make sure there’s always money for the
                              important stuff. Once those are out of the way
                              it’s time to have fun.
                            </p>
                            <p>
                              Use Tulix to pay for dinner and drinks on a night
                              out and even create a jar to plan for a vacation
                              with your friends.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              What is a jar?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              Think of a jar as a separate place where you set
                              aside money for specific uses, whether for
                              yourself or others. With jars, you can manage your
                              money better and get so much more.
                            </p>
                            <p>
                              Ready to try jars? Download the app and check them
                              out yourself.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header " id="headingFour">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Do I need a Kenyan mobile phone line to use Tulix?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              No. You can register on Tulix using any number
                              that you're able to receive SMS messages on.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Can I use Tulix to send money to an individual?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse bg-light"
                          aria-labelledby="headingFive"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              Tulix facilitates Person-to-Business payments. You
                              can create and share jars with other users to make
                              payments to businesses.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card">
                        <div className="card-header bg-primary" id="headingSix">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-primary btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              Can I use Tulix if I’m in Kenya? (Is Tulix only
                              for people in the diaspora)
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse bg-light"
                          aria-labelledby="headingSix"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              Yes. Tulix is a Kenyan product for all Kenyans
                              globally whether at home or abroad.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="card">
                        <div className="card-header" id="headingSeven">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              How do I know my funds are safe on my Tulix
                              wallet?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse bg-light"
                          aria-labelledby="headingSeven"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              We work with licensed institutions to credit and
                              debit funds on your Tulix account. Together with
                              these regulated 3rd parties, we've built in the
                              necessary safeguards in place to guarantee the
                              safety of your funds at all times
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cta">
          <div className="container ">
            <div className="row justify-content-center ">
              <div className="col-lg-5 d-flex justify-content-center mb-5 mb-md-0">
                <Image
                  src={HeroImage}
                  alt="tulix dashboard-mockup"
                  className="img-fluid"
                  placeholder="blur"
                  width={600}
                  height={600}
                />
              </div>
              <div className="col-lg-5 offset-md-1 d-flex flex-column justify-content-center ">
                <h2 className="mb-5">Get started in 3 easy steps</h2>
                <div className="steps mt-3">
                  <div>
                    <h5>Download Tulix</h5>
                    <p>Get it from Google Play Store or Apple App Store.</p>
                  </div>
                  <div>
                    <h5>Submit and verify your personal information</h5>
                    <p>Enter your KYC details on the app to get verified.</p>
                  </div>
                  <div>
                    <h5>Start transacting </h5>
                    <p>
                      Load your wallet to make payments, share money and manage
                      finances.
                    </p>
                  </div>
                </div>
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
										<a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a>  */}
                {/* <Subscribe id="email-input-2" /> */}
                <div className="row">
                  <div className="col-lg-12">
                    <p className="small text-light">Download Tulix On</p>

                    <DownloadCTA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
