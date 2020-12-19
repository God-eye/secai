import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import File from '../abis/File.json'
// import {Basic} from './DragAndDrop'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    // console.log(networkId)
    const networkData = File.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(File.abi, networkData.address)
      this.setState({ contract })
      const fileHash = await contract.methods.get().call()
      this.setState({ fileHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      fileHash: '', 
      contract: null,
      web3: null,
      buffer: null,
      account: ''
    };  
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

    //Hash : "QmbLApP52CT3tqdQYfVR6jBbR1wSR9A1TN6iQ21VQV4m9r"
    //Url: https://ipfs.infura.io/ipfs/QmbLApP52CT3tqdQYfVR6jBbR1wSR9A1TN6iQ21VQV4m9r

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      const fileHash=result[0].hash  
      // this.setState({fileHash})
      console.log("done")
      if(error) {
        console.error(error)
        return
      }
       this.state.contract.methods.set(fileHash).send({ from: this.state.account }).then((r) => {
         return this.setState({ fileHash })
       })
    })
  }

  render() {
    return (
       <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h3 className="navbar-brand col-sm-3 col-md-2 mr-0" >
           SecAI - Secure AI
          </h3>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">{this.state.account}</small>
            </li>


          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                   {/* <img src = {`https://ipfs.infura.io/ipfs/QmeKVgMydknRb8Jr1a2dXzBR7iB2KF8YHAeMMUhDFcQXDX`} ></img> */}  
                <h1>SecAI</h1> 
              
                <img src={`https://ipfs.infura.io/ipfs/${this.state.fileHash}`} alt="" />
                  {/* <p>https://ipfs.infura.io/ipfs/${this.state.fileHash}</p> */}
                  <a href="https://ipfs.infura.io/ipfs/${this.state.fileHash}"> Ipfs link</a>
                <br />  <br />  <br /> 
                <h3>Upload File</h3>

               <form onSubmit={this.onSubmit}>
                 <input type="file" onChange={this.captureFile}/>
                 <input type="submit"   value="Submit"/>

               </form>
                
          
             
              </div>      
                  {/* <DragAndDrop /> */}

            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
