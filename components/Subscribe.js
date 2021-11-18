import React, { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
	const [state, setState] = useState('idle')

  const subscribe = async (e) => {
    e.preventDefault();
		setState('Loading')
		

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
			setState('Error');

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You have been added to the early access list.');
		setState('Success');
  };

  return (
		<>
    <form onSubmit={subscribe} className="form-inline" id="form-1">
      
      <input
        id="email-input"
        name="email"
        placeholder="Enter Email Address"
        ref={inputEl}
        required
        type="email"
				className="form-control form-control-lg mr-sm-2 mb-2 col-sm-7"
      />
      <button type="submit" disabled={state === 'Loading'} className="btn btn-primary btn-lg mb-2 col">Get Early Access</button>
    </form>
		{state === 'Error' && (
			<div className="alert alert-danger inline-block" role="alert">
				<strong>{message}:</strong> Something Went Wrong
				<button type="button" className="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)}
        {state === 'Success' && (
          <div className="alert alert-success inline-block" role="alert">
						<strong>{message}:</strong> Something Went Wrong
						<button type="button" className="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
        )}
		
      {/* <div >
        {message ? message : ''}
	
      </div> */}
			</>
  );
}