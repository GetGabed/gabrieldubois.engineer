import { RadioGroup } from '@headlessui/react';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

type Props = {
    onColorChange: Function
}

const colors = ['red', 'blue', 'green', 'yellow']

function useStickyState(defaultValue: string | undefined, key: string): [string | undefined, (v: string) => void] {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        const stickyValue = localStorage.getItem(key)
        if (stickyValue !== null) {
            setValue(stickyValue)
        }
        // else {
        //     setValue('red')
        // }

    }, [key, setValue])

    return [value, (v) => {
        localStorage.setItem(key, v)
        setValue(v)
    }]
}

function ColorPicker({ onColorChange }: Props) {
    const [color, setColor] = useStickyState("red", 'theme-color');

    const handleColorSelection = (e: string) => {
        const newColor = e;
        localStorage.setItem('theme-color', newColor);
        setColor(newColor);
        onColorChange(newColor); // Call the parent component's function
    };

    return (
        <motion.div className={
            `pl-1 z-50`
        }>

            <RadioGroup value={color} onChange={handleColorSelection} className="group">
                <div className="flex flex-row items-center justify-left hover:scale-100 transition-transform origin-left duration-300">
                    <RadioGroup.Option value="red" className="rounded-full border-currentColor ml-2 hidden border-2  ui-checked:inline-block group-hover:inline-block  w-6 h-6 bg-red-500"></RadioGroup.Option>
                    <RadioGroup.Option value="blue" className="rounded-full border-currentColor ml-2 hidden border-2 ui-checked:inline-block group-hover:inline-block w-6 h-6 bg-blue-500"></RadioGroup.Option>
                    <RadioGroup.Option value="green" className="rounded-full border-currentColor ml-2 hidden border-2 ui-checked:inline-block group-hover:inline-block w-6 h-6 bg-green-500"></RadioGroup.Option>
                    <RadioGroup.Option value="yellow" className="rounded-full border-currentColor ml-2 hidden border-2 ui-checked:inline-block group-hover:inline-block w-6 h-6 bg-yellow-500"></RadioGroup.Option>
                </div>
            </RadioGroup >
        </motion.div>
    )
}

export default ColorPicker