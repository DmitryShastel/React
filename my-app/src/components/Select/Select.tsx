import React from 'react';
import style from './Select.module.css'

export type ItemsPropsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsPropsType[]
}


export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <>
        <select>
            <option>Minsk</option>
            <option>Moscow</option>
            <option>Kiev</option>
        </select>

        <div className={style.select + " " + style.active}>
            <h3>{selectedItem && selectedItem.title}</h3>

            <div className={style.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>

        </div>
            </>
    )

}



