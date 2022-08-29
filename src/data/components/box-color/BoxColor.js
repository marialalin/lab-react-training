import './BoxColor.css';

function BoxColor({ r, g, b, className }) {
  return (
    <div
      className="boxcolor-box mb-3 justify-content-center"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    ><p>rgb &#40; {r}, {g}, {b} &#41;</p></div>
  );
}

export default BoxColor;
