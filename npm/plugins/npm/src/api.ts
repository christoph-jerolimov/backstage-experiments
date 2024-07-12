// From https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
export interface NpmRegistryVersion {
  name: string;
  version: string;
  homepage: string;
  description: string;
}

// From https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
export interface NpmRegistryPackage {
  _id: string;
  _rev: string;
  name: string;
  description?: string;
  keywords?: string[];
  license?: string;
  'dist-tags': {
    [tag: string]: string;
  };
  versions: {
    [version: string]: NpmRegistryVersion;
  };
  time: {
    created: string;
    modified: string;
    [version: string]: string;
  };
  author?: 
    {
      name: string;
      email: string;
      url: string;
    } | string;
  homepage?: string;
  repository?: {
    type?: string;
    url?: string;
    directory?: string;
  };
  bugs?: {
    url?: string;
  }
  _attachments?: {
    [filename: string]: {
      content_type: string;
      data: string;
    }
  };
  readme?: string;
}

const fetchNpmPackage = async (packageName: string | undefined) => {
  if (!packageName) {
    throw new Error('No package name provided');
  }
  const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch info for package ${packageName}: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  return json as NpmRegistryPackage;
}

export const API = {
  fetchNpmPackage,
};
