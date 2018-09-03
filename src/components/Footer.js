import React from 'react';

const Footer = () => (
	<div className="footer">
		<div className="details">
			<div className="row">
				<div className="col-md-6">
					<h5>ABOUT US</h5>
					<p> Lev Aminov works with you to ensure that you always have access to the treatment and care you require to make the fullest recovery possible. A work related accident in New York can be a devastating experience. Let us help you start to feel better if you’ve been in a recent accident or injury. Schedule your appointment with our team today.
					</p>
					<h5 className="m-b">CONTACT INFORMATION</h5>
					<div className="d-flex flex-row justify-content-between">
						<div>
							<div><b>First Office</b></div>
							<div>Lev Aminov Worker's Compensation Doctor</div>
							<p>
							9851 64th Ave Ste 1G Rego Park, NY 11374 <br />
							(718) 275-6968</p>
						</div>
						<div>
							<div><b>Second Office</b></div>
							<div>Lev Aminov Worker's Compensation Doctor</div>
							<p>
							2270 Grand Ave Baldwin, NY 11510<br />
							(516) 379-0000</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<h5>RECENT POSTS</h5>
					<p>
						What Are My Workers’ Compensation Benefits?
						Questions to Expect with a Workers’ Compensation Injury
						How to Avoid Repetitive Use Injuries While on the Job
					</p>
					<h5>GET SOCIAL</h5>
					<p>
						Follow us on all of our social media accounts to stay up to date with the latest news & tips.
					</p>
				</div>
				<div className="col-md-3">
					<h5>CERTIFICATION</h5>
					<img src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/wc-badge-150x150-1.png" />
					<br />
					<img src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/HIPAA-Logo.png" />
				</div>
			</div>
		</div>
		<div className="links">
			<ul>
				<li>Home</li>
				<li>The clinic</li>
				<li>Blog</li>
				<li>Privacy Policy</li>
				<li>Terms of use</li>
				<li>Contact Us</li>
			</ul>
			<small>© Copyright 2018. All Rights Reserved.</small>
		</div>
	</div>
);

export default Footer;