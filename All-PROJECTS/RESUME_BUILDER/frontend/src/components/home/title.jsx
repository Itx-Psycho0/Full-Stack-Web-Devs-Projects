import React from 'react'

const Title = ({title, description}) => {
  return (
    <div>
        <h1 className="text-2 md:text-1xl lg:text-3xl font-bold text-slate-700 text-center mt-10">
            {title}
        </h1>
        <p className="text-center text-slate-600 mt-4">
            {description}
        </p>
    </div>
  )
}

export default Title