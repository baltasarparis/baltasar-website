import React from "react";

export default function Card({ icon: Icon, title, description, linkText }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 ">
      <div className="flex items-center">
        <div className="bg-baltacolor p-3 rounded-full">
          <Icon size={24} className="text-black" />
        </div>
        <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}