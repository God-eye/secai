const { assert } = require('chai');

const File = artifacts.require("File");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('File',(accounts)=>{
    let file

    describe('deployment',async()=>{

        it('deploys sucessfully', async()=>{
        file =await File.deployed();
        const address = file.address
        assert.notEqual(address,'')
        assert.notEqual(address,null)
        assert.notEqual(address,0x0)
        assert.notEqual(address,undefined)

        })

    })
        describe('storage', async()=>{
            it('updates the fileHash',async()=>{
                const  fileHash = 'abc123'
                await file.set(fileHash)
                const result = await file.get()
                assert.equal(result,fileHash)
            })

        })

})