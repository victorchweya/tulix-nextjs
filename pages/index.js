import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import HeroImage from '../public/img/hero.png'
import DashboardMockup from '../public/img/dashboard-mockup.png'
import BeneficiaryMockup from '../public/img/beneficiary-mockup.png'
import PaybillMockup from '../public/img/paybill-mockup.png'
import TransactionMockup from '../public/img/transaction-mockup.png'
import ReceiptMockup from '../public/img/receipt-mockup.png'
import Subscribe from '../components/Subscribe'

export default function Home() {
	const pageTitle = "Tulix - Support your loved ones from wherever you are."
	const pageDescription = "Tulix helps you make direct business payments and fund allocations to beneficiaries from anywhere, simple and convenient."
	const pageImage ="https://res.cloudinary.com/avicdesign/image/upload/v1636459905/social-img_qpf63s.png"
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
				<meta name="twitter:title" content={pageTitle}/>
				<meta name="twitter:description" content={pageDescription} />
				<meta name="twitter:image" content={pageImage} />	
				<title>{pageTitle}</title>
			</Head>
			<div>
				<section className="hero">
					<div className="container">
						<div className="row">
							<div className="col-lg-6  d-flex flex-column justify-content-center mb-5 mb-md-0">
								<h1 className="hero-title mb-5">Pay any business in Kenya <span className="text-success">instantly</span> &amp; <span className="text-success">directly</span> from anywhere in the world</h1>
								{/* <p class="lead mb-5">A simple and convenient way to allocate funds or make payments for all their needs.</p> */}
								<div className="hero-cta ">
									<Subscribe id="email-input-1"/>
								</div>            
							</div>
							<div className="col-lg-5 offset-xl-1 hero-img">
								<Image 
								src={HeroImage} 
								alt="tulix" 
								className="img-fluid pl-lg-5" 
								priority 
								placeholder="blur"
								height={455} 
								width={463}
								/>
							</div> 
						</div>       
					</div>
				</section>
				<section className="hero-2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<h2 className=" h1 text-center mb-4">Get more from the money you???re sending back home</h2>
							</div>
						</div>
					</div>
				</section>
				<section className="features">
					<div className="container">
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={DashboardMockup} alt="tulix dashboard-mockup" className="img-fluid" placeholder="blur" height={567} width={283}  />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Make payments like you???re local, using your Tulix Wallet</h2>
								<p className="lead mb-4">Whether you???re home or abroad, load your Tulix KES wallet using your card or bank from wherever you are to make payments and allocations.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5 offset-xl-1 order-last">
								<Image src={BeneficiaryMockup} alt="tulix beneficiary-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">You and all your beneficiaries in one app</h2>
								<p className="lead mb-4">For the first time ever, add beneficiaries and collaborate on expenses when allocating funds. Allocate them funds in advance for any of their needs.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={PaybillMockup} alt="tulix paybill-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Easily pay over 100,000 businesses across Kenya</h2>
								<p className="lead mb-4">Make payments to over 100,000 businesses &amp; institutions instantly and directly using M-Pesa - the dominant payment method in Kenya.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5 offset-xl-1 order-last">
								<Image src={TransactionMockup} alt="tulix transaction-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Track your spending &amp; get updates on allocations</h2>
								<p className="lead mb-4">Using our different spending categories, easily sort your payments by category to know where you &amp; your beneficiaries spend, helping you plan ahead &amp; budget.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={ReceiptMockup} alt="tulix receipt-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">No more surprises, no hidden fees</h2>
								<p className="lead mb-4">Get a clear breakdown of all fees on every transaction and receive detailed confirmations in app and via email for all the transactions you make on the Tulix App.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="hero-3">
					<div className="container">
						<div className="row justify-content-center mb-5">
							<div className="col-lg-8">
								<h2 className=" hero-title text-center mb-4">Our Commitment To You</h2>
								<p className="lead mb-4 text-center">We have built in necessary features and partnered with global partners to ensure that your information and transactions are secure.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/identification.svg" alt="" className="img-fluid" width={50} height={45} />
										<h3 className="mb-3 mt-4 h5">We ensure transparency</h3>
										<p>When it comes to making payments, we make every step clear with no hidden charges.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/calculator.svg" alt="" className="img-fluid" width={32} height={44} />
										<h3 className="mb-3 mt-4 h5">We don???t retain your payment information</h3>
										<p>To protect you, we use trusted global partners to process payments and therefore don???t store any of your card or banking information on the app.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/cash.svg" alt="" className="img-fluid " width={50} height={40} />
										<h3 className="mb-3 mt-4 h5">We value your privacy</h3>
										<p>We???ve put in place controls to ensure that all your personal information is kept safe &amp; secure at all times.
										</p>
									</div>
								</div>						
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/check.svg" alt="" className="img-fluid" width={40} height={40}/>
										<h3 className="mb-3 mt-4 h5">World class technology</h3>
										<p>We use the latest technology to keep your money safe and to fulfill all your transactions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="cta">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-lg-6">
								<h2 className="section-title mb-5">Ready to dive in? <br />Become one of our first users</h2>
								{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
										<a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a>  */}
										<Subscribe id="email-input-2" />
							</div>
						</div>
					</div>
				</div>

			</div>

		</Layout>
  )
}
