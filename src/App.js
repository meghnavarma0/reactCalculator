import React from 'react';
import Button from "./components/button";
import "./css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "0",
      previous: "",
      nextIsReset: false,
      
    }
  
    
  }
  
  reset = () => {
    this.setState({current: '0', previous: "", nextIsReset: false});
  }

  addToCurrent = (symbol) => {
    let {current, previous} = this.state

   
    if(["/", "*", "+", "-"].indexOf(symbol) > -1){

      current = eval(String(previous + current))

      previous=(this.state.previous + this.state.current + symbol)

      this.setState({current: "0", previous, nextIsReset: true})

    }
    else{

      if((this.state.current === "0" && symbol !== ".")||this.state.nextIsReset)
      {
        this.setState({current: symbol, nextIsReset: false})
      }
      else{
    


      this.setState({current:this.state.current + symbol,previous,nextIsReset: false })

      }

    }
    
    }
  calculate = (symbol) => {
    let {current, previous, nextIsReset} = this.state;
    if(previous.length > 0){
      current = eval(String(previous + current))
      this.setState({current, previous: "", nextIsReset: true})
    }
  } 
  
  render(){
    const buttons = [
      {
        symbol:'C', cols: 3, action: this.reset,
      },
      {
        symbol:'/', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'7', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'8', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'9', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'*', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'4', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'5', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'6', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'-', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'1', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'2', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'3', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'+', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'0', cols: 2, action: this.addToCurrent,
      },
      {
        symbol:'.', cols: 1, action: this.addToCurrent,
      },
      {
        symbol:'=', cols: 1, action: this.calculate,
      }
    ]
    return(
      <div className="App">
        {this.state.previous.length > 0?
        <div className="floaty-last">{this.state.previous}</div>
        : null}
        
        <input type="text" className="result" value={this.state.current}/>
        <br/>

        {buttons.map((btn, i) => {
          return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)}/>
        })}


      </div>


    )
  }
}

export default App;
