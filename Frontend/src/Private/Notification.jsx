import React from "react";

export default function Notification({ message, type = "info", onClose }) {
  if (!message) return null;

  const bgColor = {
    success: "bg-success",
    error: "bg-danger",
    warning: "bg-warning",
    info: "bg-info"
  }[type];

  return (
    <div
      className={`toast show position-fixed bottom-0 end-0 m-4 text-white ${bgColor}`}
      style={{ zIndex: 9999 }}
    >
      <div className="toast-header text-white d-flex justify-content-between">
        <strong className="me-auto text-capitalize">{type}</strong>
        <button
          type="button"
          className="btn-close btn-close-white"
          onClick={onClose}
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
}
