import * as React from "react"
import { useState } from "react"

export const Counter = () => {
  const [clicks, setClicks] = useState(0)

    return (
        <div>
            count: {clicks}
            <button onClick={() => setClicks(clicks + 1)}>Click</button>
        </div>
    )
}
