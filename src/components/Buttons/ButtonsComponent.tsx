interface buttonProps {
  title: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ButtonsComponent = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto py-16">
        <h1 className="text-3xl text-center font-bold mb-6">
          Button Component (Default)
        </h1>

        <div
          className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center"
        >
          <div className="w-full text-center mx-auto">
            <button
              type="button"
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Primary
            </button>
            <button
              type="button"
              className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              Success
            </button>
            <button
              type="button"
              className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Error
            </button>
            <button
              type="button"
              className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Warning
            </button>
            <button
              type="button"
              className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
              Info
            </button>
            <button
              type="button"
              className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            >
              Dark
            </button>
            <button
              type="button"
              className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export const ButtonPrimaryComponent = ({ title, className }: buttonProps) => {
  return (<button
    type="button"
    className={`border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline ${className}`}
  >
    {title}
  </button>)
}
