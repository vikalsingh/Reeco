import { useState } from "react";
import BottomHeader from "./BottomHeader";
import Header from "./Header";
import products from "./products.json";
import Modal from "./Modal";

const LandingCart = () => {
  const [data, setData] = useState(products.data);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleRight = (index) => {
    let newArr = [...data];
    newArr[index].status = "approved";

    setData(newArr);
  };

  const handleYesWrong = () => {
    closeModal();
    let newArr = [...data];
    newArr[selectedItemIndex].status = "urgent";
    setSelectedItemIndex("");
    setData(newArr);
  };
  const handleNoWrong = () => {
    closeModal();
    let newArr = [...data];
    newArr[selectedItemIndex].status = "missing";
    setSelectedItemIndex("");
    setData(newArr);
  };

  const openModal = (index) => {
    setSelectedItemIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header />
      <BottomHeader />
      <div className="pl-40 pr-40 mt-16">
        <div className="flex border border-gray-300 pt-4 pb-4 rounded-md drop-shadow-md">
          <div className="w-1/6">
            <label className="pl-8 text-gray-500">Supplier</label>
            <div className="pl-8 text-lg font-bold text-gray-600">
              East Coast Fruits & Vegetables
            </div>
          </div>
          <div className="border-l w-1/6">
            <label className="pl-8 text-gray-500">Shipping date</label>
            <div className="pl-8 text-lg font-bold text-gray-600">
              Fri, Feb 10
            </div>
          </div>
          <div className="border-l w-1/6">
            <label className="pl-8 text-gray-500">Total</label>
            <div className="pl-8 text-lg font-bold text-gray-600">$ 1503.8</div>
          </div>
          <div className="border-l w-1/6">
            <label className="pl-8 text-gray-500">Category</label>
            <div className="pl-8 text-lg font-bold text-gray-600">$ 1503.8</div>
          </div>
          <div className="border-l w-1/6">
            <label className="pl-8 text-gray-500">Department</label>
            <div className="pl-8 text-lg font-bold text-gray-600">
              33-4554-5566
            </div>
          </div>
          <div className="border-l w-1/6">
            <label className="pl-8 text-gray-500">Status</label>
            <div className="pl-8 text-lg font-bold text-gray-600">
              Awaiting your approvel
            </div>
          </div>
        </div>
      </div>

      <div className="pl-40 pr-40 mt-16">
        <div className="border border-gray-300 pt-4 pb-4 rounded-md drop-shadow-md">
          <div className="flex flex-row justify-between pl-10 pr-10">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="w-80 px-4 py-1.5 pl-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button className="hover:text-green-500 text-green-700 border border-green-700 hover:border-green-500 mr-4 font-bold py-1 px-4 rounded-full">
              Add Item
            </button>
          </div>

          <div>
            <table className="min-w-full mt-10">
              <thead className="border rounded-sm">
                <tr>
                  <th></th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Brand
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="border-y-2">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={require("./../assets/AvocadoHass.jpg")}
                        alt="product"
                        width="100"
                        height="50"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.brand}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.qty}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.total}
                    </td>
                    <td>
                      {item.status === "approved" ? (
                        <span className="bg-green-700 text-white py-1 px-4 rounded-full">
                          Approved
                        </span>
                      ) : item.status === "missing" ? (
                        <span className="bg-red-700 text-white py-1 px-4 rounded-full">
                          Missing
                        </span>
                      ) : item.status === "urgent" ? (
                        <span className="bg-red-400 text-white py-1 px-4 rounded-full">
                          Missing - Urgent
                        </span>
                      ) : null}
                    </td>
                    <td className="flex flex-row align-middle mt-10">
                      <button onClick={() => handleRight(index)}>✅</button>
                      <button onClick={() => openModal(index)} className="pl-4">
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpen ? (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <h2>Missing Product</h2>
          <p>is this product URGENT ?</p>
          <div className="flex flex-row-reverse mt-8">
            <span
              className="bg-black text-white py-1 px-3 rounded-full ml-4 cursor-pointer"
              onClick={handleNoWrong}
            >
              NO
            </span>
            <span
              onClick={handleYesWrong}
              className="bg-black text-white py-1 px-3 rounded-full ml-4 cursor-pointer"
            >
              YES
            </span>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default LandingCart;
