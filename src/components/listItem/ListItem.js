import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <div className="list-item__name">{props.name}</div>
      <div className="list-item__value">{props.value}</div>
    </div>
  );
}

export default ListItem;
