import React, { useState } from 'react';

export default function App() {
  const [prizes, setPrizes] = useState({
    firstPrize: null,
    adjacentFirstPrize: [],
    secondPrize: [],
    lastTwoDigitsPrize: null,
  });
  const [searchedNumber, setSearchedNumber] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleRandomize = () => {
    // สุ่มเลขรางวัล
    const newFirstPrize = Math.floor(Math.random() * 1000) + 100; // ตัวเลข 3 หลัก
    const newAdjacentFirstPrizes = [
      newFirstPrize + 1,
      newFirstPrize - 1,
    ];
    const newSecondPrizes = [
      newFirstPrize + 10,
      newFirstPrize + 11,
      newFirstPrize + 12,
    ];
    const newLastTwoDigitsPrize = newFirstPrize % 100; // เลขท้าย 2 ตัวของรางวัลที่ 1

    setPrizes({
      firstPrize: newFirstPrize,
      adjacentFirstPrize: newAdjacentFirstPrizes,
      secondPrize: newSecondPrizes,
      lastTwoDigitsPrize: newLastTwoDigitsPrize,
    });
  };

  const handleCheckNumber = () => {
    if (searchedNumber === '') {
      setSearchResult('กรุณากรอกหมายเลขล็อตเตอรี่');
      return;
    }

    const num = parseInt(searchedNumber, 10);

    if (prizes.firstPrize === num) {
      setSearchResult(`${num} ถูกรางวัลที่ 1`);
    } else if (prizes.adjacentFirstPrize.includes(num)) {
      setSearchResult(`${num} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1`);
    } else if (prizes.secondPrize.includes(num)) {
      setSearchResult(`${num} ถูกรางวัลที่ 2`);
    } else if (num % 100 === prizes.lastTwoDigitsPrize) {
      setSearchResult(`${num} ถูกรางวัลเลขท้าย 2 ตัว`);
    } else {
      setSearchResult(`${num} ไม่ถูกรางวัล`);
    }
  };

  return (
    <div className="container mx-auto py-20 h-auto ">

      {/* แทบ text  */}
      <div className="text-center ">
        <h1 className='text-5xl text-yellow-300 font-medium '>รางวัลล็อตเตอรี่ Diversition</h1>
        <div className="badge badge-ghost text-xl p-4 font-light mt-3">ผลการออกรางวัล Diversition</div>
        <h2 className="text-4xl text-white font-light mt-3">เลขที่ออก : <span className='text-green-200 font-semibold'>{prizes.firstPrize !== null ? prizes.firstPrize : ''}</span> </h2>
      </div>

      <div className="flex justify-center gap-8 px-10 mt-20 ">
        <div className="w-[1400px] ">

          {/* แทบ text และ button */}
          <div className=" flex justify-between items-end mb-4">

            <div className="flex gap-2">

            </div>
            <div className="card-actions justify-end">

              <button
                className="btn bg-white/80 border-none text-black shadow px-10 text-xl font-light"
                onClick={() => document.getElementById('my_modal_1').showModal()}
              >
                ตรวจเลข
              </button>
              <button
                className="btn bg-green-400 border-none text-white shadow px-10 text-xl font-light"
                onClick={handleRandomize}
              >
                กดสุ่ม
              </button>

              {/* dialog ของตรวจเลข */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="p-8">
                    <h3 className="font-bold text-lg text-center">ตรวจรางวัลล็อตเตอรี่ Diversition!</h3>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                      <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={searchedNumber}
                        onChange={(e) => setSearchedNumber(e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 ">
                        <path
                          fillRule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clipRule="evenodd" />
                      </svg>
                    </label>
                    <div className="mt-3  h-12 flex items-center  justify-center">
                      <p className="px-3 text-green-500 text-2xl">{searchResult}</p>
                    </div>
                  </div>
                  <div className="modal-action px-8">
                    <form method="dialog">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="btn bg-green-500 text-white font-light"
                          onClick={handleCheckNumber}
                        >
                          ตรวจเลข
                        </button>
                        <button className="btn bg-red-400 text-white font-light">ปิด</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          {/* รางวัล */}
          <div className="card bg-base-100 w-full shadow-xl mt-4">
            <div className="card-body items-center">
              <div className="grid grid-cols-4 gap-4 w-full h-96 ">

                {/* รางวัลที่1 */}
                <div className="col-span-2 bg-red-500 text-center flex items-center justify-center">
                  <p className="text-3xl text-white font-semibold">รางวัลที่ 1</p>
                </div>
                <div className="col-span-2 bg-red-500/80 text-center flex items-center justify-center h-full">
                  <p className="text-4xl font-extrabold text-white">
                    {prizes.firstPrize !== null ? prizes.firstPrize : '000'}
                  </p>
                </div>
                <div className="col-span-2 bg-red-500 text-center flex items-center justify-center">
                  <p className="text-3xl text-white font-semibold">รางวัลเลขข้างเคียงรางวัลที่ 1</p>
                </div>
                <div className="bg-red-500/70 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.adjacentFirstPrize[1] || '000'}
                  </p>
                </div>
                <div className="bg-red-500/70 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.adjacentFirstPrize[0] || '000'}
                  </p>
                </div>

                {/* รางวัลที่2 */}
                <div className="bg-red-500 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">รางวัลที่ 2</p>
                </div>
                <div className="bg-red-500/70 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.secondPrize[0] || '000'}
                  </p>
                </div>
                <div className="bg-red-500/70 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.secondPrize[1] || '000'}
                  </p>
                </div>
                <div className="bg-red-500/70 text-center flex items-center justify-center h-full">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.secondPrize[2] || '000'}
                  </p>
                </div>

                {/* รางวัลเลขท้าย 2 ตัว */}
                <div className="col-span-2 bg-red-500 text-center flex items-center justify-center">
                  <p className="text-3xl text-white font-semibold">รางวัลเลขท้าย 2 ตัว</p>
                </div>
                <div className="col-span-2 bg-red-500/70 text-center flex items-center justify-center">
                  <p className="text-3xl text-white font-semibold">
                    {prizes.lastTwoDigitsPrize !== null ? prizes.lastTwoDigitsPrize.toString().padStart(2, '0') : '00'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
