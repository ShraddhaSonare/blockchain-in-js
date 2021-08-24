const SHA256=require("crypto-js/sha256")

class Block{
    constructor(index,timestamp,data,previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
    }

calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock];
    }
 
createGenesisBlock(){
    return new Block(0, "567","Genesis block",0)

}

getLatestBlock(){
    return this.chain[this.chain.length-1]
}

addBlock(){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash=newBlock.calculateHash();
    this.chain.push(newBlock);
}
isChainValid(){
    for(let i =1;i<this.chain.length;i++){
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i-1];

        if(currentBlock.hash != currentBlock);
    }
}

let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1,16-01-2021, {amount : 4}));
savjeeCoin.addBlock(new Block(1,12-01-2021, {amount : 10}));

console.log(JSON.stringify(savjeeCoin, null, 4));