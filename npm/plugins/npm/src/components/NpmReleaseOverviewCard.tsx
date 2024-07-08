import React from 'react';
import { MissingAnnotationEmptyState, useEntity } from '@backstage/plugin-catalog-react';
import { Table, type TableColumn } from '@backstage/core-components';
import { DateTime } from 'luxon';
import { NPM_PACKAGE_ANNOTATION } from '../annotations';
import useAsync from 'react-use/esm/useAsync';
import { API } from '../api';

interface TagRow {
  tag: string;
  version: string;
  published: string;
}

export function NpmReleaseOverviewCard() {
  const { entity } = useEntity();

  const packageName = entity.metadata.annotations?.[NPM_PACKAGE_ANNOTATION];

  const packageInfo = useAsync(() => API.fetchNpmPackage(packageName), [packageName]);

  if (!packageName) {
    return (
      <MissingAnnotationEmptyState
        annotation={NPM_PACKAGE_ANNOTATION}
        readMoreUrl='https://backstage.io/docs/features/software-catalog/descriptor-format'
      />
    );
  }

  const tagColumns: TableColumn<TagRow>[] = [
    {
      title: 'Tag',
      field: 'tag',
      type: 'string',
    },
    {
      title: 'Version',
      field: 'version',
      type: 'string',
    },
    {
      title: 'Published',
      field: 'published',
      type: 'datetime',
      render: (row) => (
        <time dateTime={row.published} title={row.published}>
          {DateTime.fromISO(row.published).toRelative()}
        </time>
      ),
    },
  ];

  const tagData: TagRow[] = [];
  if (packageInfo.value?.['dist-tags']) {
    for (const [tag, version] of Object.entries(packageInfo.value['dist-tags'])) {
      const published = packageInfo.value.time[version];
      tagData.push({ tag, version, published });
    }
  }

  return (
    <Table
      title="Current Tags"
      options={{ paging: false, padding: 'dense' }}
      isLoading={packageInfo.loading}
      data={tagData}
      columns={tagColumns}
    />
  );
}
