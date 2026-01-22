export default function Header({ money }) {
  return (
    <div className="navbar-container bg-[#29C87B] h-15">
      <div className="flex justify-center items-center gap-[40vh] text-2xl">
        <h3 className="text-white font-bold text-2xl">
          Spent Bill Gates` Money
        </h3>
        <h3 className=" text-[#29C87B] bg-white rounded-md px-15">
          $ {money.toLocaleString()}
        </h3>
      </div>
    </div>
  );
}
