import * as React from 'react';
type Props = {
    id?: string;
    type?: 'vi-tag' | 'vi-mov' | 'vi-mac';
};
declare function DeviceId({ id, type }: Props): React.JSX.Element;
export default DeviceId;
