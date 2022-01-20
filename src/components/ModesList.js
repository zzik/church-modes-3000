import React from 'react'
import {ionian,dorian,phrygian,lydian,mixolydian,aeolian,locrian} from '../actions'
import {useDispatch} from 'react-redux'

const ModesList = () => {

    const dispatch = useDispatch()

    return(
        <div>
        <button onClick={() => dispatch(ionian())}>Ionian</button>
        <button onClick={() => dispatch(dorian())}>Dorian</button>
        <button onClick={() => dispatch(phrygian())}>Phrygian</button>
        <button onClick={() => dispatch(lydian())}>Lydian</button>
        <button onClick={() => dispatch(mixolydian())}>Mixolydian</button>
        <button onClick={() => dispatch(aeolian())}>Aeolian</button>
        <button onClick={() => dispatch(locrian ())}>Locrian</button>
        </div>
    )
}

export default ModesList