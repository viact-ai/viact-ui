import * as React from 'react';
export interface MarkedStateProps {
    backgroundColor?: string;
    flexDirection?: 'row' | 'column';
    state: 'approve' | 'reject' | 'unmark' | 'unview' | 'pending' | 'acknowledged' | 'dismiss' | 'invalid';
    hideLabel?: boolean;
}
declare const MarkedState: ({ backgroundColor, flexDirection, state, hideLabel, }: MarkedStateProps) => React.JSX.Element;
export default MarkedState;
