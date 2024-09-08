import type { Schema, Attribute } from '@strapi/strapi';

export interface UrlName extends Schema.Component {
  collectionName: 'components_url_names';
  info: {
    displayName: 'name';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'url.name': UrlName;
    }
  }
}
