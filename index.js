const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="card">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons_div">
      <Button name="Like" className="like" />
      <Button name="Comment" className="comment" />
      <Button name="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
