import notfound_img from "../images/notfound.svg";

export function Notfound() {
  return (
    <div className="container">
      <h1 className="title">ไม่พบหน้านี้ 404</h1>
      <img src={notfound_img} alt="notfound_img" />
    </div>
  );
}
