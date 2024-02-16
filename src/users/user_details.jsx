import React from 'react';

const UserDetails = ({ object, requestUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>{object.username}</h2>
          {object.name && <p>{object.name}</p>}
        </div>
      </div>

      {object === requestUser && (
        <div className="row">
          <div className="col-sm-12">
            <a className="btn btn-primary" href="/users/update" role="button">
              My Info
            </a>
            <a className="btn btn-primary" href="/account/email" role="button">
              E-Mail
            </a>
            {/* Your Stuff: Custom user template urls */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
