import React from 'react'

const TitlePage = ({title, subtitle}) => {
  return (
      <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">{subtitle}</p>
      </div>
  );
}

export default TitlePage;
