import TopSpot from "./TopSpot";
import 'bootstrap/dist/css/bootstrap.min.css';

const TopSpots = ({ spots }) => {
  return (
    <div data-testid="topspots" className="row">
      {spots.map((topspot, index) => (
        <div key={index} className="col-md-6">
            
          <TopSpot
            name={topspot.name}
            description={topspot.description}
            location={topspot.location}
          />
        </div>
      ))}
    </div>
  );
};

export default TopSpots;
