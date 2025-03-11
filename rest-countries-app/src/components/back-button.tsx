import { useNavigate } from "react-router"

export function BackButton() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <button onClick={handleNavigate} className="border border-border px-4 py-2 rounded-2xl hover:backdrop-brightness-200 cursor-pointer">
      👈🏽 Go Back
    </button>
  )
}