import React, { Component } from 'react'
import MemeBody from './MemeBody.js'
import SideBar from './SideBar.js'
import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import InputBox from './InputBox'
import Head from './Head'
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import { wrap } from 'module';
export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            memeArray:[],
            length:0,
            loaded:false,
            num:-1,
            heightRatio:0.00,
            widthRatio:0.0,
           // length:0
           one:"",
           two:"",
           three:"",
           four:"",
           textSize:20,
           five:"",
           showSideBar:false,

        }
    }
    showSide(){
        this.setState({showSideBar:!this.state.showSideBar});
    }
    setFont(i){
        this.setState({textSize:i});
    }
    randomClick(){
        var x=Math.floor(Math.random() * (this.state.length + 1) ) + 0;
        this.setState({num:x});
        var h= this.state.memeArray[x].height;
        var w= this.state.memeArray[x].width;
        var rH= (h/(h+w));
        var rW=(w/(h+w));
        this.setState({heightRatio:rH , widthRatio:rW,num:x,one:"",two:"",three:"",four:"",five:""})
    }
    handleInput(event,i){
        var x= event.target.value;
        if(i===1){
            this.setState({one:x});
        }if(i===2){
            this.setState({two:x});
        }if(i===3){
            this.setState({three:x});
        }if(i===4){
            this.setState({four:x});
        }if(i===5){
            this.setState({five:x});
        }
    }
    
    handleClick(){
        var x= this.state.num;
        x=x+1;
        if(x===this.state.length){
            x=0;
        }
        this.setState({num:x});
        var h= this.state.memeArray[x].height;
        var w= this.state.memeArray[x].width;
        var rH= (h/(h+w));
        var rW=(w/(h+w));
        this.setState({heightRatio:rH , widthRatio:rW,one:"",two:"",three:"",four:"",five:""});
        console.log(rH , " "  , rW);
    }
    async componentDidMount(){
        const res= await fetch("https://api.imgflip.com/get_memes");
        const datas= await res.json();
        
        this.setState({memeArray:datas.data.memes ,  loaded:true,  length:datas.data.memes.length});
    }
    handleSideClick(x){
        this.setState({num:x});
        var h= this.state.memeArray[x].height;
        var w= this.state.memeArray[x].width;
        var rH= (h/(h+w));
        var rW=(w/(h+w));
        this.setState({heightRatio:rH , widthRatio:rW,num:x,one:"",two:"",three:"",four:"",five:""})
    }
    downloadIMG(){
        domtoimage.toBlob(document.getElementById('memes'))
        .then(function (blob) {
        window.saveAs(blob, 'meme.png');
        console.log(this.state.memeArray);
    });
    }
    render() {
        if(this.state.loaded===false){
            return <div>Loading...</div>
        }else{
        return (
            
            
            ( this.state.num >=0?
            <div>
                
            <Head />
            
            <button onClick={()=>{this.showSide()}} style={{padding:5,}} className="menu next-btn" >{this.state.showSideBar ? "hide" : "more"}</button>
            {this.state.showSideBar? <div className="side-bar" style={{display:this.state.showSideBar}}>
                {
                    this.state.memeArray.map((meme , id) => {
                        return  <SideBar meme={meme.name} handleSideClick={()=>this.handleSideClick(id) } img={meme.url} height={meme.height} width={meme.width}/>
                    })
                }
                </div>
                : null
           }
            <div className="container">
           
            <div className="meme-body" id="memes">
            
                <MemeBody  name={this.state.memeArray[this.state.num].name} url={this.state.memeArray[this.state.num].url}
                        height={800* this.state.heightRatio} width={800 * this.state.widthRatio} /> 
                <Draggable bounds="parent">
                <div className="meme-input" style={{top:10,left:10 ,fontSize:this.state.textSize,whiteSpace:'pre-wrap'}} >{this.state.one}</div>
                </Draggable>
                <Draggable bounds="parent">
                <div className="meme-input" style={{top:30,left:10,fontSize:this.state.textSize,whiteSpace:'pre-wrap'}}>{this.state.two}</div>
                </Draggable>
                <Draggable bounds="parent">
                <div className="meme-input" style={{top:60,left:10,fontSize:this.state.textSize,whiteSpace:'pre-wrap'}}>{this.state.three}</div>
                </Draggable>
                <Draggable bounds="parent">
                <div className="meme-input" style={{top:90,left:10,fontSize:this.state.textSize,whiteSpace:'pre-wrap'}}>{this.state.four}</div>
                </Draggable>
                <Draggable bounds="parent">
                <div className="meme-input" style={{top:130,left:10,fontSize:this.state.textSize,whiteSpace:'pre-wrap'}}>{this.state.five}</div>
                </Draggable>
            </div>
            <div className="btn-input-grid">
            <div className="input-body">
            {
                    this.state.memeArray[this.state.num].box_count >=1?<InputBox num={this.state.memeArray[this.state.num].box_count} handleInput={(event)=>this.handleInput(event ,1) } value={this.state.one} />:null
                }
                {
                    this.state.memeArray[this.state.num].box_count >=2?<InputBox num={this.state.memeArray[this.state.num].box_count} handleInput={(event)=>this.handleInput(event,2)} value={this.state.two}/>:null
                }
                {
                    this.state.memeArray[this.state.num].box_count >=3?<InputBox num={this.state.memeArray[this.state.num].box_count} handleInput={(event)=>this.handleInput(event,3)} value={this.state.three}/>:null
                }
                {
                    this.state.memeArray[this.state.num].box_count >=4?<InputBox num={this.state.memeArray[this.state.num].box_count} handleInput={(event)=>this.handleInput(event,4)} value={this.state.four}/>:null
                }
                {
                    this.state.memeArray[this.state.num].box_count >=5?<InputBox num={this.state.memeArray[this.state.num].box_count} handleInput={(event)=>this.handleInput(event,5)} value={this.state.five}/>:null
                }
            </div>
            <div>
            <button className="next-btn-s" onClick={()=>this.setFont(20)}>S</button>
            <button className="next-btn-s" onClick={()=>this.setFont(30)}>M</button>
            <button className="next-btn-s" onClick={()=>this.setFont(50)}><span>L</span></button>
            </div>
            <div>
            <button onClick={()=>this.handleClick()} className="next-btn"><span>N</span>ext </button>
            <button onClick={()=>this.randomClick()} className="next-btn" > <span>R</span>andom </button>
            <button onClick={()=>this.downloadIMG()} className="next-btn" > <span>D</span>ownload </button>
            </div>
            </div>
            </div>
            </div>
            :
            <div>
            
            <Head />

            <button onClick={()=>this.randomClick()} className="next-btn-1">  Find a <span>m</span>eme! </button>
            </div>
                
            )
        
        )

    }
    }
}

export default Main
