// https://eth-ropsten.alchemyapi.io/v2/wyWuo5heSHyCM-_PvlPOXNOT06Em0zjT

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wyWuo5heSHyCM-_PvlPOXNOT06Em0zjT',
      accounts: [ 'a258292a3bf4445b6b2216f969b7c51ff44568a9084c56860616ecb71d900dda' ]
    }
  }

}