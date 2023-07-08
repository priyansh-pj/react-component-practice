const Header = (data) => {
  return (
    <header>
      <img src={data.image} alt="Medal badge with a star" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </header>
  );
};

export default Header
