import 'bootstrap/dist/css/bootstrap.min.css';

const TopSpot = ({ name, description, location }) => (
  <div data-testid="topspot" className="card h-100 w-100 p-3">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{description}</p>
    <a
      className="btn btn-primary mt-auto"
      href={`https://maps.google.com/?q=${location[0]},${location[1]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      View On Map
    </a>
  </div>
);

export default TopSpot;