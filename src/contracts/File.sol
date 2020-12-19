pragma solidity 0.5.0;

contract File {
    string fileHash;

    //write function

    function set(string memory _fileHash) public {
        fileHash = _fileHash;
    }

    function get() public view returns (string memory) {
        return fileHash;
    }
}
