import React from "react";

export const Alert = ({
    setShowAlert
}) => {
  return (
    <div
      class="alert alert-danger alert-dismissible fade show mt-3"
      role="alert"
    >
      Input field should not be empty.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setShowAlert(false)}
      ></button>
    </div>
  );
};
