import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import MenuBottom from './MenuBottom';
import Header from './Header';
import Footer from './footer';
import { PageHeader } from '@components/compound';

interface IKsLayoutProps {
  children: ReactNode;
  title: string;
  hasPageHeader?: boolean;
  pageHeaderTitle?: string;
  pageHeaderBackground?: string;
  breadcrumbs?: ReactNode[];
}

const KsLayout: FC<IKsLayoutProps> = ({
  children,
  title,
  hasPageHeader = false,
  pageHeaderTitle,
  pageHeaderBackground,
  breadcrumbs,
}) => {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />

      {hasPageHeader && (
        <PageHeader
          background={pageHeaderBackground}
          title={pageHeaderTitle}
          breadcrumbs={breadcrumbs}
        />
      )}

      <main className="ks-content">{children}</main>
      <MenuBottom />
      <Footer />
    </>
  );
};

export default KsLayout;
