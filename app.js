
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



class GroceryListItem extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     hover: false
   };
 }

 onListItemHover1() {
  this.setState({
    hover: true
  })
  console.log(!this.state.isChecked)
}

onListItemHover2() {
  this.setState({
    hover: false
  })
  console.log(!this.state.isChecked)
}

 render() {

  var style = {
    fontWeight: this.state.hover ? 'bold': 'normal'
  };

   return(
    <li style={style} onMouseEnter={this.onListItemHover1.bind(this)} onMouseLeave={this.onListItemHover2.bind(this)}>{this.props.list}</li>
   );
 }
}

var GroceryList = (props) => {
  return (
  <div>
    <h2> My GroceryList</h2>
    <Bread />
    <Butter />
    {props.groceryItems.map(list =>
      <GroceryListItem list={list} />
      )}
  </div>
  );
}

var App = () => {

return (
<div className = 'App'>
<GroceryList groceryItems = {['Cucumber', 'tomato']} />
</div>
);
}

ReactDOM.render(<App />, document.getElementById('app'));
