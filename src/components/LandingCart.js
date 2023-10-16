import BottomHeader from "./BottomHeader";
import Header from "./Header";

const LandingCart = () => {
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
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Age
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Country
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td class="px-6 py-4 whitespace-nowrap">30</td>
                  <td class="px-6 py-4 whitespace-nowrap">USA</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    johndoe@example.com
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                  <td class="px-6 py-4 whitespace-nowrap">28</td>
                  <td class="px-6 py-4 whitespace-nowrap">Canada</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    janesmith@example.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCart;
