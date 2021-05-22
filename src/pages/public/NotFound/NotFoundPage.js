import React, { useState } from 'react'
import * as S from './styled'
import Lottie from 'react-lottie'
import animationData from '../../../assets/animation/animation.json'

function NotFoundPage() {

    const [animationState] = useState({
        isStopped: false, isPaused: false
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <S.AnimationContainer>
            <S.TextPage>Page Not Found :(</S.TextPage>

            <Lottie options={defaultOptions}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
            />
        </S.AnimationContainer>
    )
}
export default NotFoundPage