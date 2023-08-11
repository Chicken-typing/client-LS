import { Badge, Button, Image, Link } from '@components/primitive';
import { Rating } from '@mui/material';
import { FC, useState } from 'react';
import { IProduct } from '@interfaces/product';
import { routes } from '@utils/routes';
import { Tooltip } from '@components/compound/Tooltip';

export interface IProductCardProps {
  data: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const { id, images, name, price, rating, discount } = data;

  const [activeThumb] = useState<string>(images[1] || images[0]);

  return (
    <div className="ks-product-card">
      <div className="thumbnail">
        <Link
          title={name}
          href={{
            pathname: routes.PRODUCT,
            query: {
              slug: id,
            },
          }}
          className="images"
        >
          <Image
            src={images[0]}
            alt={images[0]}
            objectFit="cover"
            className="image -main"
            ratio="square"
          />
          <Image
            src={activeThumb}
            alt={activeThumb}
            objectFit="cover"
            className="image -secondary"
          />
        </Link>
        {discount && <Badge discount={discount} className="badge" />}
        <div className="actions">
          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Add to wishlist" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-heart icon"></i>
              </span>
            </Tooltip>
          </Button>

          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Compare" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-arrow-down-arrow-up fa-rotate-270"></i>
              </span>
            </Tooltip>
          </Button>
          <Button className="button" iconOnly variant="contained" color="light">
            <Tooltip title="Quick view" placement="left" arrow>
              <span className="icon">
                <i className="fa-light fa-magnifying-glass-plus"></i>
              </span>
            </Tooltip>
          </Button>
        </div>
      </div>

      <div className="content">
        <div className="rating">
          <Rating precision={0.5} value={Number(rating)} readOnly size="small" />
        </div>
        <div className="name">
          <Link
            title={name}
            className="link"
            href={{
              pathname: routes.PRODUCT,
              query: {
                slug: id,
              },
            }}
          >
            {name}
          </Link>
        </div>
        <p className="price">
          <span className="">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            })}
          </span>
        </p>

        <div className="buy">
          <Button className="button" iconOnly variant="outlined" noBorder>
            <Tooltip title="Select options" placement="top" arrow>
              <span className="icon">
                <i className="fa-light fa-bag-shopping"></i>
              </span>
            </Tooltip>
          </Button>
        </div>
      </div>
    </div>
  );
};
