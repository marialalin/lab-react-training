import './Random.css';

function Random({ min, max }) {
  const result = Math.floor(Math.random(min) * max + 1)

  return (
    <div className="random-box mb-3">
      <p>Random value between {min} and {max}=&gt;{result} </p>
    </div>
  );
}

export default Random;
