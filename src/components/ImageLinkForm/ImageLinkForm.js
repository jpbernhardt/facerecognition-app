import React from 'react';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This site will detect faces from provided image URLs.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-blue'
            onClick={onPictureSubmit}>Detect
            </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;