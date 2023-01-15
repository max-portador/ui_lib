import React from 'react';
import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex direction="column" {...props} align={align} />
    );
};

export { VStack };
