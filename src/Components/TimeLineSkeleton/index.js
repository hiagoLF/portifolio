import React from 'react';

import {
    Container,
    Circle,
    VerticalLine,
    SkeletonItem,
    TopPiece,
    HorizontalLine,
} from './styles';

function TimeLineSkeleton({ nodes }) {

    // Organizando o essqueleto
    const skeleton = []
    for (var i = 1; i <= nodes; i++) {
        i % 2 !== 0 ? skeleton.push(-1) : skeleton.push(1)
    }

    return (
        <Container>
            <Circle />
            <VerticalLine />

            {skeleton.map((item, key) => (
                <SkeletonItem key={key}>
                    <TopPiece>
                        <Circle appear={item === -1}/>
                        <HorizontalLine appear={item === -1}/>
                        <Circle />
                        <HorizontalLine appear={item === 1}/>
                        <Circle appear={item === 1}/>
                    </TopPiece>
                    <VerticalLine />
                </SkeletonItem>
            ))}

            <Circle />

        </Container>
    );
}

export default TimeLineSkeleton;