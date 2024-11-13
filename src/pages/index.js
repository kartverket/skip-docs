import React from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import GetStarted from '../components/GetStarted';
import ShipAnimation from '../components/ShipAnimation';
import logo from '../../static/img/skip.png';
import { initializeFaro } from '@grafana/faro-react';
import Link from '@docusaurus/Link';

if (ExecutionEnvironment.canUseDOM && location.host !== 'localhost') {
  initializeFaro({
    url: 'https://faro.atgcp1-prod.kartverket.cloud/collect',
    app: {
      name: 'skip.kartverket.no',
      environment: location.host === 'skip.kartverket.no' ? 'prod' : 'dev',
    },
  });
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={logo}
          alt="Logo for SKIP, viser en båt i Kartverkets farger"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs">
            Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="blog">
            Tech blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="SKIP – Statens Kartverks Infrastrukturplatform"
      description="Statens Kartverks Infrastrukturplatform">
      <Head>
        <html lang="no" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <GetStarted />
      </main>
      <ShipAnimation />
    </Layout>
  );
}
