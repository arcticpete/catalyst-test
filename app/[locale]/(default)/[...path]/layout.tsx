import { PropsWithChildren } from 'react';

import { getInitialData } from '~/client/queries/get-initial-data';

import { Providers } from './providers';

export default async function MakeswiftLayout({ children }: PropsWithChildren) {
  const bcData = await getInitialData();

  return <Providers bcData={bcData}>{children}</Providers>;
}
