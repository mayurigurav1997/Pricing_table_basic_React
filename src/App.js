import './App.css';
import Card from './Card'

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {/* <!-- Free Tier --> */}

          <Card title="FREE" price="$0" user="Single User" storage="5GB" private_projects="Free" phone_support="Free" subdomain="Free Subdomain" status_report="Free" />

          {/* <!-- Plus Tier --> */}

          <Card title="PLUS" price="$9" user="5 User" storage="50GB" private_projects="Plus" phone_support="Plus" subdomain="Free Subdomain" status_report="Plus"/>

          {/* <!-- Pro Tier --> */}

          <Card title="PRO" price="$49" user="Unlimited User" storage="150GB" private_projects="Pro" phone_support="Pro" subdomain="Free" status_report="Pro" />

        </div>
      </div>
    </section>
  );
}

export default App;
