import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  // async componentWillMount() {
  //   await this.loadWeb3()
  //   await this.loadBlockchainData()
  // }

  // async loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  // async loadBlockchainData() {
  //   const web3 = window.web3
  //   // Load account
  //   const accounts = await web3.eth.getAccounts()
  //   this.setState({ account: accounts[0] })
  //   const networkId = await web3.eth.net.getId()
  //   const networkData = Meme.networks[networkId]
  //   if(networkData) {
  //     const contract = web3.eth.Contract(Meme.abi, networkData.address)
  //     this.setState({ contract })
  //     const memeHash = await contract.methods.get().call()
  //     this.setState({ memeHash })
  //   } else {
  //     window.alert('Smart contract not deployed to detected network.')
  //   }
  // }

  constructor(props) {
    super(props)

    this.state = {
      fileHash: 'QmbLApP52CT3tqdQYfVR6jBbR1wSR9A1TN6iQ21VQV4m9r',
      // contract: null,
      // web3: null,
      buffer: null,
      // account: null
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
      this.setState({fileHash})
      console.log("done")
      if(error) {
        console.error(error)
        return
      }
      //  this.state.contract.methods.set(result[0].hash).send({ from: this.state.account }).then((r) => {
      //    return this.setState({ memeHash: result[0].hash })
      //  })
    })
  }

  render() {
    return (
       <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h3 className="navbar-brand col-sm-3 col-md-2 mr-0" >
           SecAI - Secure AI
          </h3>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                   {/* <img src = {`https://ipfs.infura.io/ipfs/`} ></img> */}  
                <h1>SecAI</h1> 
                <video width="320" height="240" controls>
                <source src="https://ipfs.infura.io/ipfs/QmYaUoZcZdD4HD9oaWtegnbyMNVR82AN4gYyiwSA7VR5ge" type="video/mp4"></source>
                  </video>

                <br />  <br />  <br /> 
                <h3>Upload File</h3>
               <form onSubmit={this.onSubmit}>
                 <input type="file" onChange={this.captureFile}/>
                 <input type="submit"   value="Submit"/>

               </form>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
