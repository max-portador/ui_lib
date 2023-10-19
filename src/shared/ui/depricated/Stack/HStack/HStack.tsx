import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новый
 * @deprecated
 */
const HStack = (props: HStackProps) => {
    return (
        // @ts-ignore
        <Flex direction="row" {...props} />
    );
};

export { HStack };
