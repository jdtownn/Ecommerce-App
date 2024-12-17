/* eslint-disable react/prop-types */
const ListProduct = ({ allProducts }) => {
  return (
    <div>
      <h4>Product List</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Ensure allProducts is an array */}
            {Array.isArray(allProducts) && allProducts.length > 0 ? (
              allProducts.map((product, i) => (
                <tr key={i}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.oldPrice}</td>
                  <td>{product.newPrice}</td>
                  <td>{product.category}</td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
