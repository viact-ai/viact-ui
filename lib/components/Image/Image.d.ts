import React from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    isSmall?: boolean;
}
declare const Image: {
    (props: ImageProps): React.JSX.Element;
    defaultProps: {
        isSmall: boolean;
    };
};
export default Image;
