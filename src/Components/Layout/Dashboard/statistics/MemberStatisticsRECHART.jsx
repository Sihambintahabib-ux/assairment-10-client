import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Context/useAuth";
import LoadingSpinner from "../../LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MemberStatisticsRECHART = () => {
  const { user } = useAuth();

  // Fetch member stats (EXISTING ENDPOINT - NO CHANGE NEEDED)
  const {
    isLoading: statsLoading,
    isError: statsError,
    data: memberStats = {},
  } = useQuery({
    queryKey: ["memberStats", user.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/member/stats/${user.email}`
      );
      return result.data;
    },
  });

  // Fetch ALL imported products and filter by user on frontend
  const {
    isLoading: importsLoading,
    isError: importsError,
    data: allImportedProducts = [],
  } = useQuery({
    queryKey: ["allImportedProducts"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/importproducts`
      );
      return result.data;
    },
  });

  // Fetch ALL products and filter exports by user on frontend
  const {
    isLoading: exportsLoading,
    isError: exportsError,
    data: allProducts = [],
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/products`);
      return result.data;
    },
  });

  console.log("members", { memberStats, allImportedProducts, allProducts });

  if (statsLoading || importsLoading || exportsLoading)
    return <LoadingSpinner />;
  if (statsError || importsError || exportsError) return <ErrorPage />;

  // Filter data for current user
  const importedProducts = allImportedProducts.filter(
    (item) => item.importedBy === user.email
  );

  const exportedProducts = allProducts.filter(
    (item) => item.createdBy === user.email
  );

  // Process data for charts

  // 1. Import/Export by Category - Bar Chart
  const getCategoryData = () => {
    const categoryMap = {};

    // Process imports
    importedProducts.forEach((item) => {
      const cat = item.category || "Other";
      if (!categoryMap[cat]) {
        categoryMap[cat] = { category: cat, imports: 0, exports: 0 };
      }
      categoryMap[cat].imports += item.importedQuantity || 0;
    });

    // Process exports
    exportedProducts.forEach((item) => {
      const cat = item.category || "Other";
      if (!categoryMap[cat]) {
        categoryMap[cat] = { category: cat, imports: 0, exports: 0 };
      }
      categoryMap[cat].exports += item.availableQuantity || 0;
    });

    return Object.values(categoryMap);
  };

  // 2. Category Distribution - Pie Chart
  const getImportCategoryDistribution = () => {
    const categoryCount = {};

    importedProducts.forEach((item) => {
      const cat = item.category || "Other";
      categoryCount[cat] =
        (categoryCount[cat] || 0) + (item.importedQuantity || 0);
    });

    return Object.entries(categoryCount).map(([name, value]) => ({
      name,
      value,
    }));
  };

  // 3. Import Trend Over Time - Line Chart
  const getImportTrend = () => {
    const monthMap = {};

    importedProducts.forEach((item) => {
      const date = new Date(item.importedAt);
      const monthYear = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

      if (!monthMap[monthYear]) {
        monthMap[monthYear] = { month: monthYear, quantity: 0, count: 0 };
      }
      monthMap[monthYear].quantity += item.importedQuantity || 0;
      monthMap[monthYear].count += 1;
    });

    // Sort by date
    return Object.values(monthMap).sort((a, b) => {
      return new Date(a.month) - new Date(b.month);
    });
  };

  // 4. Top Imported Products
  const getTopImports = () => {
    return importedProducts
      .sort((a, b) => (b.importedQuantity || 0) - (a.importedQuantity || 0))
      .slice(0, 5)
      .map((item) => ({
        name:
          item.productName.length > 15
            ? item.productName.substring(0, 15) + "..."
            : item.productName,
        quantity: item.importedQuantity || 0,
      }));
  };

  const categoryData = getCategoryData();
  const categoryDistribution = getImportCategoryDistribution();
  const importTrend = getImportTrend();
  const topImports = getTopImports();

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  // Calculate totals
  const totalImportQuantity = importedProducts.reduce(
    (sum, item) => sum + (item.importedQuantity || 0),
    0
  );
  const totalExportQuantity = exportedProducts.reduce(
    (sum, item) => sum + (item.availableQuantity || 0),
    0
  );
  const totalRevenue = exportedProducts.reduce(
    (sum, item) =>
      sum + (parseFloat(item.price) || 0) * (item.importquantity || 0),
    0
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Member Statistics Dashboard</h1>

      <div className="mt-12">
        {/* Summary Cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grow">
          {/* Total Imports */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40">
              <BsFillCartPlusFill className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Imports
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {importedProducts.length}
              </h4>
              <p className="text-sm text-gray-500">
                {totalImportQuantity} units
              </p>
            </div>
          </div>

          {/* Total Exports */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40">
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Exports
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {exportedProducts.length}
              </h4>
              <p className="text-sm text-gray-500">
                {totalExportQuantity} units
              </p>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40">
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Estimated Revenue
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                ${totalRevenue.toFixed(2)}
              </h4>
            </div>
          </div>

          {/* Categories */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40">
              <BsFillHouseDoorFill className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Product Categories
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {categoryData.length}
              </h4>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Import/Export by Category - Bar Chart */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Import vs Export by Category
              </h3>
              {categoryData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="imports" fill="#3B82F6" name="Imports" />
                    <Bar dataKey="exports" fill="#10B981" name="Exports" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500 text-center py-20">
                  No data available
                </p>
              )}
            </div>
          </div>

          {/* Category Distribution - Pie Chart */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Import Distribution by Category
              </h3>
              {categoryDistribution.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500 text-center py-20">
                  No data available
                </p>
              )}
            </div>
          </div>

          {/* Import Trend - Line Chart */}
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Import Trend Over Time
              </h3>
              {importTrend.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={importTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="quantity"
                      stroke="#8884d8"
                      strokeWidth={2}
                      name="Import Quantity"
                    />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      name="Number of Imports"
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500 text-center py-20">
                  No data available
                </p>
              )}
            </div>
          </div> */}

          {/* Top Imported Products - Bar Chart */}
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Top 5 Imported Products
              </h3>
              {topImports.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topImports} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500 text-center py-20">
                  No data available
                </p>
              )}
            </div>
          </div> */}
        </div>

        {/* Recent Activity Table */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Recent Import Activity
            </h3>
            {importedProducts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b">
                    <tr>
                      <th className="pb-3 font-semibold">Product</th>
                      <th className="pb-3 font-semibold">Category</th>
                      <th className="pb-3 font-semibold">Quantity</th>
                      <th className="pb-3 font-semibold">Price</th>
                      <th className="pb-3 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importedProducts.slice(0, 5).map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{item.productName}</td>
                        <td className="py-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3">{item.importedQuantity}</td>
                        <td className="py-3">${item.price}</td>
                        <td className="py-3">
                          {new Date(item.importedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-10">
                No import activity yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberStatisticsRECHART;
