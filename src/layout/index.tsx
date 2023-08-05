import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
interface IKsLayoutProps {
  children: ReactNode;
  title: string;
}

const KsLayout: FC<IKsLayoutProps> = ({ children, title }) => {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="ks-content">{children}</main>
    </>
  );
};

export default KsLayout;
