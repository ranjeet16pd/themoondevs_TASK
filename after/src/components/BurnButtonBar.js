import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import AppIcon from './AppIcon';

const BurnButtonBar = ({
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  txButton,
  txProgress,
  burnTxHash,
  walletChain,
}) => {
  return (
    <div className="burn-bar">
      <div className="input-value-box">
        <p className="input-muted">Enter amount to Burn</p>
        <input
          className="input-value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon
              url="/icons/fire.svg"
              fill={IconFilter.primary}
              size={1.5}
              margin={0}
            />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
      {burnTxHash && (
        <div className="tx-links">
          <a
            href={`${walletChain.blockExplorers.default.url}/tx/${burnTxHash}`}
            className="header-link"
          >
            Burn Tx: {burnTxHash}
          </a>
        </div>
      )}
    </div>
  );
};

export default BurnButtonBar;
