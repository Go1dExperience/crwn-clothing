import React from 'react';
import './collection-preview.styles.scss';
//--Import Components--------------------
import CollectionItem from '../collection-item/collection-item.component';

function CollectionPreview({title, items}) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4)
                        .map(({id, ...rest}) =>  (
                        <CollectionItem key={id} {...rest}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
