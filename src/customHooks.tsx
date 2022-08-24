import React from 'react';

export function useScrollBlocking(isModalVisible: boolean) {

    React.useEffect(() => {
        if (isModalVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isModalVisible])

}