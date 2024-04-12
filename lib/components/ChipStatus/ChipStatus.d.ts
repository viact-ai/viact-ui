import * as React from 'react';
interface Props {
    label: string;
    colorDot?: string;
    type?: 'error' | 'success';
}
declare function ChipStatus({ label, colorDot, type }: Props): React.JSX.Element;
export default ChipStatus;
