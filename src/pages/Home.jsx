import React from 'react';
import { AppProvider, Layout, Page, FooterHelp, Link } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

import ColorPickerComponent from '../components/ColorPicker.component';
import TextFieldComponent from '../components/TextField.component';
import QuoteImageComponent from '../components/QuoteImage.component';

import { useDataFetch } from '../hooks/useDataFetch';

export default function Home() {
  const { setQuoteInput, setColorInput } = useDataFetch();

  return (
    <AppProvider>
      <Page>
        <Layout>
          <Layout.Section>
            <TextFieldComponent setQuoteInput={setQuoteInput} />
          </Layout.Section>
          <Layout.Section>
            <ColorPickerComponent setColorInput={setColorInput} />
          </Layout.Section>
          <Layout.Section>
            <QuoteImageComponent />
          </Layout.Section>
          <Layout.Section>
            <FooterHelp>
              <Link url='https://github.com/HuzefaC/color-quote' external>
                GitHub Repo
              </Link>
            </FooterHelp>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}
