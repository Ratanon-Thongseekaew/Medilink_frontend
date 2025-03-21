
function ProgramItem({ name, price }) {
  return (
    <div className="flex items-center">
        <img src="https://placehold.co/40x40" alt="Doctor avatar" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-gray-600">{price}</p>
        </div>
      </div>
  )
}

export default ProgramItem