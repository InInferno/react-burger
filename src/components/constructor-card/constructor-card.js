import React, { useRef } from 'react';
import styles from './constructor-card.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import {  deteleIngredient, UPDATE_INGREDIENTS } from '../../services/actions';
import { useDrag, useDrop } from "react-dnd";

export default function ConstructorCard({ id, index, moveCard, constructorCard }) {

    const dispatch = useDispatch();

    const removeIngredient = (card) => {
        dispatch(deteleIngredient(card))
    }

    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: UPDATE_INGREDIENTS,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: UPDATE_INGREDIENTS,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

  return (
    <li
        className={`${styles.card}`}
        ref={ref} 
        style={{opacity: `${opacity}`}} 
        data-handler-id={handlerId}
    >
        <DragIcon type="primary" />
        <ConstructorElement
        text={constructorCard.name}
        price={constructorCard.price}
        thumbnail={constructorCard.image}
        handleClose={() => removeIngredient(constructorCard)}
    />
    </li>
  )
}
