import React, { PropsWithChildren } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новый
 * @deprecated
 */
const VStack = (props: PropsWithChildren<VStackProps>) => {
    const { align = 'start', children } = props;

    return (
        // @ts-ignore
        <Flex direction="column" {...props} align={align}>
            {children}
        </Flex>
    );
};

export { VStack };
