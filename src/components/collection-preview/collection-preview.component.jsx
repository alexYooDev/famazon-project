import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  Preview,
  PreviewTitle,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
