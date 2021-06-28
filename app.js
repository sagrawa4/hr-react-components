
var Butter = () => {
  return (
  <div>
    <li> SaltedButter </li>
    <li> UnSaltedButter </li>
  </div>
  );
}

var Bread = () => {
  return (
  <div>
    <li> SourBread </li>
    <li> PepperBread </li>
  </div>
  );
}

var GroceryList = (props) => {
  return (
  <div>
    <h2> My GroceryList</h2>
    <Bread />
    <Butter />
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </div>
  );
}

var GroceryListItem = () => {
return (
<GroceryList groceryItems = {['Cucumber', 'tomato']} />
);
}


var App = () => {

return (
<div className = 'App'>
<GroceryListItem />
</div>
);
}

ReactDOM.render(<App />, document.getElementById('app'));
