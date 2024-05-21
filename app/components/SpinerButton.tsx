import React from 'react'

export default function SpinnerButton({ Button }: { Button: string }) {
  const [spiner, setSpiner] = React.useState(false)
  setTimeout(() => {
    setSpiner(false)
  }, 2000)

  return (
    <button
      type="submit"
      onClick={() => setSpiner(true)}
      className="rounded-xl items-center flex gap-1 justify-center bg-gradient-to-tr from-[#FFB777] to-[#F16C6A]  p-3 text-white drop-shadow-lg"
    >
      <Spiner Button={Button} spiner={spiner} />
    </button>
  )
}

function Spiner({ spiner, Button }: { spiner: boolean; Button: string }) {
  return (
    <div className="flex items-center">
      {spiner ? (
        <svg
          className="animate-spin mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <span className="text-md font-medium">{Button}</span>
      )}
    </div>
  )
}
