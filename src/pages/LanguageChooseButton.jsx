import React, { useState } from 'react';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='my-5'>
      <p className='text-lg font-semibold mb-2'>English Proficiency</p>

      <input
        type="radio"
        id="native"
        name="proficiency"
        value="Native/Fluent"
        checked={selectedOption === 'Native/Fluent'}
        onChange={handleOptionChange}
        className="form-radio h-4 w-4 text-blue-600"
      />
      <label htmlFor="native" className="ml-2 ">Native/Fluent</label>

      <br />

      <input
        type="radio"
        id="advanced"
        name="proficiency"
        value="Advanced"
        checked={selectedOption === 'Advanced'}
        onChange={handleOptionChange}
        className="form-radio h-4 w-4 text-blue-600"
      />
      <label htmlFor="advanced" className="ml-2">Advanced</label>

      <br />

      <input
        type="radio"
        id="intermediate"
        name="proficiency"
        value="Intermediate"
        checked={selectedOption === 'Intermediate'}
        onChange={handleOptionChange}
        className="form-radio h-4 w-4 text-blue-600"
      />
      <label htmlFor="intermediate" className="ml-2">Intermediate</label>

      <br />

      <input
        type="radio"
        id="basic"
        name="proficiency"
        value="Basic"
        checked={selectedOption === 'Basic'}
        onChange={handleOptionChange}
        className="form-radio h-4 w-4 text-blue-600"
      />
      <label htmlFor="basic" className="ml-2">Basic</label>

      <br />

      <div className="mt-4">
        <p className="text-gray-800 font-semibold ">Selected Option: {selectedOption || 'None'}</p>
      </div>
    </div>
  );
};

export default RadioButtons;
