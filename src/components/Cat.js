import './Cat.css';

export default function Cat({ url }) {
  return (
    <div>
      <img src={url} className="cat-pic" />
    </div>
  );
}
