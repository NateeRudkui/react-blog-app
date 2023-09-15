import home from "../images/home.svg";
export function Home() {
  return (
    <div className="container">
      <h1 className="title">My home</h1>;
      <img src={home} alt="home-img" />
    </div>
  );
}
