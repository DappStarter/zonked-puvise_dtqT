require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift return still snake inflict civil army giant'; 
let testAccounts = [
"0x76d3089f09fe3c59962964839b7e7bb9f31ce115b1a0cc9860285085af4154fa",
"0x09cd170accd1af70601046714ad8e80cb189082d377a37935a9ed75bb2f94e4e",
"0x83a5def2490777b64f2ee58f8099715ac68b297f7027b45ee8863c0a397e9882",
"0xd6fe2b1598a530f53ee0b681b86af3074e129106c45d4a1c7e50233b9849134f",
"0x5b50d7795b287a7e8206326bcfe94a425bfd9288dfdaaea5265029a546541e21",
"0x6fba1ebd2c520530eb53785122d2aaf23080a02f1a73eaa5aa411ca90723402f",
"0x4c7c1b174a0251ec020440d8ba14e463770cd1b283d0c64589a1a0d6a92042c6",
"0x4a2568c9f01b36c0a2a37cbe0e8e4b88a9b657ceeca6cc843dc1a8765e18d9d1",
"0xf2a60fec99370be11aeed3bc32a7df6c759b90a713fb5867ff084e562402a7e1",
"0x31906f331e11c6ba6267b2a4ba6e836413dad1125e04ab660513e18e3cc10e25"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


