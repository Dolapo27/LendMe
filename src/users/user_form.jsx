import React from 'react';
import { useForm } from 'react-hook-form'; // You might need to install and import a form handling library

const UserForm = ({ user }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div>
      <h1>{user.username}</h1>
      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="csrfmiddlewaretoken" value="your-csrf-token" /> {/* Replace with actual CSRF token */}
        <div className="control-group">
          <div className="controls">
            <input
              type="text"
              name="username"
              ref={register}
              defaultValue={user.username}
              readOnly
            />
          </div>
        </div>
        {/* Render other form fields using the same pattern */}
        <div className="control-group">
          <div className="controls">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
