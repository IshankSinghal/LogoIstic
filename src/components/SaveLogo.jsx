import Card from "./Card";

const SaveLogo = ({ savedLogos }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex justify-center border-b-2 p-2 font-bold text-lg shadow-xl">
        <h3>Saved Logos</h3>
      </div>
      <div className="saved-logos-container mt-4 flex flex-wrap gap-4 justify-center">
        {savedLogos.length > 0 ? (
          savedLogos.map((logo, index) => (
            <div key={index}>
              <Card logo={logo} />
            </div>
          ))
        ) : (
          <p>No logos saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default SaveLogo;
