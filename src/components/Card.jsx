export default function Card({ data, buy, sell }) {
  return (
    <div className="card mx-[15vh] my-[5vh] col-span-4 w-[40vh] h-[50vh] border-3">
      <img
        src={data.image}
        alt={data.name}
        className="h-[30vh] w-full object-contain bg-white"
      />

      <div className="card-body">
        <h2>{data.name}</h2>
        <h2>${data.price.toLocaleString()}</h2>
      </div>

      <div className="button flex justify-between items-center mx-5">
        <button
          className="bg-[#F53B79] text-white disabled:bg-[#F1F2F6] disabled:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={sell}
          disabled={data.count === 0}
        >
          Sell
        </button>
        <h2>{data.count}</h2>
        <button
          className="bg-[#23C388] text-white px-4 py-1 rounded hover:bg-green-500"
          onClick={buy}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
