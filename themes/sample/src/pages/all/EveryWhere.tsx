import React from 'react';
import { useQuery } from 'urql';

const ProductsQuery = `
  query {
    products(filters: []) {
      items {
        productId
        name
        price {
          regular {
            value
            text
          }
        }
        image {
          url
        }
        url
      }
    }
  }
`;

export default function EveryWhere() {
  const [result] = useQuery({ query: ProductsQuery });
  const { data, fetching, error } = result;

  if (fetching) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-red-600">Error loading products</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.items.map(product => (
          <div 
            key={product.productId} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {product.image?.url && (
              <a href={product.url}>
                <img 
                  src={product.image.url} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </a>
            )}
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                <a href={product.url} className="hover:text-blue-600">
                  {product.name}
                </a>
              </h3>
              
              <p className="text-xl font-bold text-green-600">
                {product.price?.regular?.text}
              </p>
              
              <a 
                href={product.url}
                className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 20
};
