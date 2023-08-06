import { FC, ReactNode } from 'react';
import { Breadcrumbs } from '@mui/material';
import { map } from 'lodash';
import useCheckErrorImage from '@/hooks/useCheckErrorImage';

interface IPageHeaderProps {
  title?: string;
  breadcrumbs?: ReactNode[];
  background?: string;
}

export const PageHeader: FC<IPageHeaderProps> = ({ title, breadcrumbs, background }) => {
  const { isError, imageUrl } = useCheckErrorImage(background || '');

  const newImage = '/images/default.jpg';

  return (
    <div
      className="ks-page-header"
      style={{
        backgroundImage: `url(${!isError ? imageUrl : newImage})`,
      }}
    >
      <div className="ks-container wrapper">
        <h1 className="title">{title}</h1>
        <div className="breadcrumbs">
          <Breadcrumbs>{map(breadcrumbs, (component) => component)}</Breadcrumbs>
        </div>
      </div>
    </div>
  );
};
