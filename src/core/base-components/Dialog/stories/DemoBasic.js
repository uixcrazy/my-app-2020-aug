import React, { useState } from 'react';
import Dialog from '../Dialog';

const styleDialog = {
  WebkitBoxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  color: '#587d8b',
  padding: 20,
  width: 300,
};

const DemoBasic = () => {
  const [dialogContent, setDialogContent] = useState(null);
  return (
    <div className='stories-description'>
      <button
        className='stories-link'
        onClick={() => setDialogContent(<div style={styleDialog}>content 01</div>)}
      >
        open dialog no.1
      </button>
      <Dialog onClose={() => setDialogContent(null)}>
        {dialogContent}
      </Dialog>
      <div>
        <button
          className='stories-link'
          onClick={() => setDialogContent(<div style={styleDialog}>content 02</div>)}
        >open dialog no.2
        </button>
        <button
          className='stories-link'
          onClick={() => setDialogContent(<div style={styleDialog}>content 03</div>)}
        >open dialog no.3
        </button>
      </div>
    </div>
  )
};

export default DemoBasic;