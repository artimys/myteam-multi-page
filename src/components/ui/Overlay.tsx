function Overlay({ closeMenuHandler }) {
  return (
    <div
      className="fixed top-0 left-0 z-40 w-full min-h-screen bg-black opacity-60 md:hidden"
      onClick={closeMenuHandler}
    ></div>
  );
}

export default Overlay;
