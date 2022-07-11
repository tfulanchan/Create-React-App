import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <dl>
<dt>CON/SAP Intern</dt>
<dd>Deloitte Consulting</dd>
<dt>Nov 2021 - Dec 2021 (2 months)</dt>
<dd>Learned to developer smart forms using SAP ABAP</dd>
<dd>Provided useful insights to the Learning and Development Manager responsible for Interns recruitment</dd>
</dl>
	<h2><code>Chan</code></h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Do you know me</code>? 
        </p>
        <a
          className="App-link"
	  href="App.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn about me
        </a>

<h4>Summary</h4>
	<p>Form I-551 since 2016. Linux Foundation Certified System Administrator. AWS Certified Cloud Practitioner. Preparing for the CKAD exam. Completed several courses at MongoDB University. Breaking stereotypes is my priority.</p>
	<h4>Employment history</h4>
	<p>CON/SAP Intern：</p>
	<ul style={{paddingLeft: '15px'}}>
		<li>Developed Smart Forms with SAP ABAP</li>
		<li>Provided useful insights to the Learning and Development Manager responsible for Interns recruitment</li>
	</ul>
<p>Loss Prevention Officer：</p>
<ul style={{paddingLeft: '15px'}}>
 <li>Responsible for Front-Desk operations in a Amazon Fulfillment Center</li>
	<li>Managed employee badges for +500 employees and visitors</li>
	<li>Managed team members in night shifts occasionally</li>
</ul>
	<h4>Education</h4>

	<p>King AbdulAziz University 
Management Information Systems, General 
		2019 - 2023 </p>
	<p>UMass Boston 
Bachelor of Science - BS, Management Information Systems, General 
2013 - 2014 Incomplete due to family issue </p>

	<h4>Licenses & Certifications</h4>
	<p> Linux Foundation Certified System Administrator (LFCS) - The Linux Foundation 
Issued Jul 2022 - Expires Jul 2025 </p>
	<p>Amazon Web Services Cloud Practitioner - Amazon Web Services (AWS) 
Issued Jul 2021 - Expires Jul 2024 </p>
      </header>
    </div>    
  );
}
export default App;
