export default function InfoDialog({ open, onClose, title, description }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Transparent Background */}
      <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-5 z-50 animate-fade-in">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            ✖
          </button>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </div>
  );
}
