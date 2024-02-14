import React from 'react';

const ChainSelector = ({
  openChainSelector,
  setOpenChainSelector,
  chains,
  selectedChain,
  setSelectedChain,
}) => {
  const handleChainChange = (chain) => {
    setSelectedChain(chain);
    setOpenChainSelector(false);
  };

  return (
    <div>
      <button onClick={openChainSelector}>Select Chain</button>
      {chains && chains.length > 0 && (
        <div>
          {chains.map((chain) => (
            <div key={chain.id}>
              <input
                type="radio"
                id={chain.id}
                name="selectedChain"
                value={chain.id}
                checked={selectedChain.id === chain.id}
                onChange={() => handleChainChange(chain)}
              />
              <label htmlFor={chain.id}>{chain.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChainSelector;
