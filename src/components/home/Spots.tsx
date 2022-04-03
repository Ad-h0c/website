import { Spot } from "../../hooks/useGrid";
import { SPACE_WIDTH } from "./Home";
import Tooltip from "./Tooltip";
import styles from './Home.module.scss';
import React from 'react';

interface Props {
    spots: Spot[];
    editIndex: number;
    editLinkUrl: string;
    editTitle: string;
    editImageUrl: string;
}

// memorized, so that it's only re-rendered when necessary
export default React.memo(function Spots({ spots, editIndex, editLinkUrl, editTitle, editImageUrl }: Props) {
    return <>
        {spots.map((e, i) => <a
            key={i}
            href={editIndex === e._index ? editLinkUrl : e.link}
            target='_blank'
        >
            <Tooltip
                content={editIndex === e._index ? editTitle : e.title}
                element='img'
                props={{
                    src: (editIndex === e._index ? editImageUrl : e.image),
                    className: `${styles.cell} ${editIndex === e._index ? styles.hl : ''}`,
                    style: {
                        left: `${e.x * SPACE_WIDTH}px`,
                        top: `${e.y * SPACE_WIDTH}px`,
                        width: `${e.width * SPACE_WIDTH}px`,
                        height: `${e.height * SPACE_WIDTH}px`,
                        backgroundColor: '#' + e.owner.slice(-6),
                    },
                }} 
            />
        </a>)}
    </>
});