const { Wallet, XrpClient, XrplNetwork } = require('xpring-js')
const bip39 = require('bip39');

var wallet;

async function createWallet() {
  const mnemonic = bip39.generateMnemonic();

  randomWallet = Wallet.generateWalletFromMnemonic(mnemonic);

  console.log(randomWallet);

  const remoteURL = 'test.xrp.xpring.io:50051';

  const xrpClient = new XrpClient(remoteURL, XrplNetwork.Test);

  const address = randomWallet.getAddress();
  console.log(address);

  wallet = randomWallet;

  // const balance = await xrpClient.getBalance(address);
  //
  // console.log(balance);
  // xrpClient.getBalance(destinationAddres).then(console.log);
  //
  // const amount = BigInt("10");
  //
  // xrpClient.sendXrp(newAmount, destinationAddress, wallet).then(console.log);
};

createWallet();

console.log(wallet);
