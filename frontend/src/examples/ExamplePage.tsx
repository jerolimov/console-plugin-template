import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { useTranslation } from '../i18n';

export default function ExamplePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title data-test="example-page-title">{t('Hello, Plugin!')}</title>
      </Helmet>
      <Page>
        <PageSection>
          <Title headingLevel="h1">{t('Hello, Plugin!')}</Title>
        </PageSection>
        <PageSection>
          <TextContent>
            <Text>{t('Nice!')}</Text>
            <Text>{t('Your plugin is working!')}</Text>
          </TextContent>
        </PageSection>
      </Page>
    </>
  );
}