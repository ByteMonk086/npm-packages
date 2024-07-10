import * as React from 'react'
import { ReactNode } from "react"


type PropsType = {
    children: ReactNode
}
const Button = ({ children }: PropsType) => {
    return <button
     style={{
        backgroundColor: 'blue',
        color: 'white',
        padding:"10px 20px",
        fontSize:"1.2rem",
        borderRadius:"5px",
        cursor: "pointer",
        border: "none",
    }}
     >
        {children}
    </button>
}
<Button>ukp</Button>

export { Button }
