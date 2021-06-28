
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

var GroceryList = () => {
  return (
  <div>
    <h2> My GroceryList</h2>
    <Bread />
    <Butter />
  </div>
  );
}

var App = () => {

return (
<div className = 'App'>
<GroceryList />
</div>
);
}

ReactDOM.render(<App />, document.getElementById('app'));
