import Head from "next/head";
import Layout from "../components/layout";
import FaqsGettingStarted from "./faqs-getting-started";
import FaqsGeneral from "./faqs-general";
import FaqsFeatures from "./faqs-features";
import FaqsSupport from "./faqs-support";

export default function Faqs() {
  const pageTitle = "FAQs - Frequently Asked Questions";
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
      <section className="about-us">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-10 mb-5">
              <h6 className="text-success">Help Centre</h6>
              <h2 className="section-title ">Frequently Asked Questions</h2>
            </div>

            <div className="col-lg-10 my-5">
              <div className="row">
                <div className="col-lg-3">
                  <ul
                    className="nav  flex-lg-column"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        data-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Getting Started
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        data-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        General
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        data-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Features
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-support-tab"
                        data-toggle="pill"
                        data-target="#pills-support"
                        type="button"
                        role="tab"
                        aria-controls="pills-support"
                        aria-selected="false"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <FaqsGettingStarted />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <FaqsGeneral />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <FaqsFeatures />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-support"
                      role="tabpanel"
                      aria-labelledby="pills-support-tab"
                    >
                      <FaqsSupport />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
