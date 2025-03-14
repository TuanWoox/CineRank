function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
