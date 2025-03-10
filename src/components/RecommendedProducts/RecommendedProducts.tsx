import React from 'react';
import { useTranslation } from 'react-i18next';
import Product from '../Product/Product';
import './RecommendedProducts.css';

interface Product {
  id: number;
  name: string;
  description: string; // Ensure description is included
  price: number;
  inStock: boolean;
  image: string;
}

interface RecommendedProductsProps {
  products: Product[]; // Use the Product interface
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div className="recommended-products">
      <h2>{t('recommendedProducts')}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;