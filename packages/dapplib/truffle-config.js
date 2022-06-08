require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember equip grid problem orange gauge'; 
let testAccounts = [
"0x347833503021b7c97812ae5417ecde0106bf26ac4efecef3209b935b8c60b260",
"0x34800eb957da093bfdb12411caaf4c65ab585650fc650eed03c7c3b632333aae",
"0xc2af6d05684a0b368e26f03817281c7372131619661fcfe2e41472c700b1b044",
"0xf169b6feccd43de11da367b348cdc5110517874b1f1ed989d68602ff84211fe9",
"0xc2808f5de041b2b40188156e3ce63bef15d1b7dbe7448f10c9e52b85db4996f4",
"0x1c604ceef413f07344508c6175aa7f86008a4ee987555dc45619cbf13be092d9",
"0x3b1e063a469426e3335bf7b483ea80e8d01a210dbb5a7343970c16d4d18e685c",
"0xbf13f711da63861e8716df29672d0497012d7b2ee2639578e2760f1095e87700",
"0x9ee95ce562ab7b165be5c160fb82ca2bd17fc16433426bf88ced1f23cb9f6db4",
"0xaf7caea5d4628b727a597324252c1a973a8d25c9fff02ebec9b3afbaf54eca2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

