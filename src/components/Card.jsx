function Card({ logo }) {
    return (
      <div className="w-40 h-40 border rounded-md shadow-md ">
        <img src={logo} alt="Saved Logo" className="w-full h-full" />
      </div>
    );
  }
  
  export default Card;