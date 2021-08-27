import { useEffect, useState } from 'react'

export function useFlashMessage(){
    const [message, setMessage] = useState({});

    useEffect(() => {
        if(message.text)
            setTimeout(() => setMessage({}), 3000);
    }, [message])

    const messageJsx = ( 
        message &&
            <b className={'align-self-center mx-2 text-' + message.color}>
                { message.text }
            </b>
    )

    return { messageJsx, setMessage };
}