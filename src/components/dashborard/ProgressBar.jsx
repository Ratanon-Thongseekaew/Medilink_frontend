
function ProgressBar({ title, percentage }) {
    return (
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
          <div className="bg-teal-400 h-2.5 rounded-full" style={{ width: percentage }}></div>
        </div>
        <p>{percentage}</p>
      </div>
    );
  }

export default ProgressBar