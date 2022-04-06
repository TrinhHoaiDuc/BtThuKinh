import React, { Component } from "react";
import dataGlasses from  '../Data/dataGlasses.json'

export default class ThuKinh extends Component {

  renderGlassess = () =>{
    return dataGlasses.map((Kinh,index)=>{
      return <img src={Kinh.url} key={index} style={{width:'120px'}} className="p-2" onClick={()=>{
        this.changeState(Kinh);
      }}/>
    })
  }
  state = {
       Glassess:{ // tham so mac dinh
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./Img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
       }
  }
  changeState = (newItem) =>{
      this.setState({
        Glassess:newItem // tham so mac dinh dc gan bang tham so moi , newItem = kinh o ham rendeglasses
      })
  }
  render() {
    const  cssGlasses = {
        width:'130px',
        top:'64px',
        right:'186px',
        opacity:'0.8',
    }
    const cssDetails = {    
        width:'250px',
        top:'169px',
        left:'376px',
        backgroundColor:'orange',
        textAlign:'left',
    }
    return (
      <div>
        <div className="text-center bg-secondary text-white">
          <h3>Thử Kính Online</h3>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="position-relative">
                <img src="./Img/model.jpg" width={250} height={250}  className="position-absolute"></img>
                <img src={this.state.Glassess.url}  className="position-absolute" style={cssGlasses}></img>
                <div className="position-absolute" style={cssDetails}>
                    <p>{this.state.Glassess.name}</p>
                    <p>{this.state.Glassess.desc}</p>
                </div>
            </div>
          </div>
          <div className="col-6">
            <img src="./Img/model.jpg" width={250} height={250}></img>
          </div>
        </div>
        <div className="container bg-light d-flex mt-5 p-5 ">
          {this.renderGlassess()}
        </div>
      </div>
    );
  }
}
