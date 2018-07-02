import React from 'react'
import './App.css'


class Wnuczek extends React.Component {
  render() {
    const { name, title } = this.props; 
    return (
      <div>{name}</div>
    )
  }

}

class Dziecko extends React.Component {


  render() {
    const {name, title} = this.props; 

    return (
      <div>
        <h4 className="header">{name}</h4>
        <Wnuczek name={name}/>
      
      </div>
      
    )
  }
}

class App extends React.Component {

  

  render() {
    const name = " to jest name" // czyli najważniejszy jest komponent app wnuczek w dziecku automatycznie pobierze name z kompnentu app

    return (
     <div>
     <Dziecko name={name} />
     </div>
    )
  }
}
export default App