import React from 'react';

type FooListProps = {
  foos?: {
    id: number;
    name: string;
    description: string;
  }[];
  products?: {
    id: number;
    name: string;
    shortDescription: string;
    thumbnail: string;
  }[];
};

export default function FooList({ foos, products }: FooListProps) {
  return (
    <div className="foo-list container mx-auto px-4 py-8">
      <h2 className="font-bold text-center mb-8">Foo List</h2>
      <p className="text-gray-700 text-center mb-6">
        You can modify this component at{' '}
        <code>themes/sample/src/pages/all/EveryWhere.tsx</code>
      </p>

      {/* Render Foos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {foos?.map((foo) => (
          <div
            key={foo.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-semibold mb-3 text-gray-800">{foo.name}</h3>
            <p className="text-gray-600 leading-relaxed">{foo.description}</p>
          </div>
        ))}
      </div>

      {/* Render Products */}
      <h2 className="font-bold text-center mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="font-semibold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 30
};

export const query = `
  query Query {
    foos {
      id
      name
      description
    }
    products {
      id
      name
      shortDescription
      thumbnail
    }
  }
`;
