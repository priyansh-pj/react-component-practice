import "./Concept.css";
const Concept = (elements) => {
  return (
    <ul className="concept">
      <img src={elements.image} alt={elements.title} />
      <h2>{elements.title}</h2>
      <p>{elements.description}</p>
    </ul>
  );
};
export default Concept;
