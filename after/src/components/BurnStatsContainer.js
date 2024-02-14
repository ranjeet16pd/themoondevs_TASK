import React from 'react';

const BurnStatsContainer = ({
  statsSupplies,
  walletChain,
  tokenAddress,
  suppliesChain,
  burnTransactions,
}) => {
  return (
    <div className="top-bar">
      <img
        src="/images/token/App_new.svg"
        alt=""
        size={2}
        margin={0}
        fill={IconFilter.unset}
      />
      <p className="label">App SUPPLY</p>
      <button onClick={openChainModal} className="expand-button">
        {walletChain.name || '---'}
      </button>
      <a
        href={`${suppliesChain.blockExplorers.default.url}/address/${tokenAddress}`}
        className="supply-label"
      >
        View Contract
      </a>
    </div>
  );
};

export default BurnStatsContainer;
