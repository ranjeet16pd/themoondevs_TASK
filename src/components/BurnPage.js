import React, { ChangeEvent } from 'react';
import useBurnPageLogic from './useBurnPageLogic';
import BurnButtonBar from './BurnButtonBar';
import BurnStatsContainer from './BurnStatsContainer';
import TransactionTable from './TransactionTable';
import ChainSelector from './ChainSelector';

const BurnPage = () => {
    const {
        burnAmount,
        onChangeBurnAmount,
        executeBurn,
        txButton,
        txProgress,
        burnTxHash,
        walletChain,
        statsSupplies,
        tokenAddress,
        suppliesChain,
        burnTransactions,
        coinData,
        openChainSelector,
        setOpenChainSelector,
        receiveChains,
        setSuppliesChain
      } = useBurnPageLogic();
    
      return (
        <div>
          {/* Integrate the selective components */}
          <BurnButtonBar 
            burnAmount={burnAmount} 
            onChangeBurnAmount={onChangeBurnAmount} 
            executeBurn={executeBurn} 
            txButton={txButton} 
            txProgress={txProgress} 
            burnTxHash={burnTxHash} 
            walletChain={walletChain}
          />
          <BurnStatsContainer 
            statsSupplies={statsSupplies} 
            walletChain={walletChain} 
            tokenAddress={tokenAddress} 
            suppliesChain={suppliesChain} 
            burnTransactions={burnTransactions}
          />
          <TransactionTable burnTransactions={burnTransactions} coinData={coinData} />
          <ChainSelector 
            openChainSelector={openChainSelector} 
            setOpenChainSelector={setOpenChainSelector} 
            chains={receiveChains} 
            selectedChain={suppliesChain} 
            setSelectedChain={setSuppliesChain} 
          />
        </div>
  )
}

export default BurnPage
