
function ProgramItem({ name, price, image }) {
  return (
    <div className="flex items-center">
        <img src={image} alt="Doctor avatar" className="w-32 h-auto" />
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-gray-600">{price}</p>
        </div>
      </div>
  )
}

export default ProgramItem