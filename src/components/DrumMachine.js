import React, { useState, useEffect } from 'react';
import initKeyboard from '../utils/initKeyboard';
import AudioSlider from './AudioSlider';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const descriptions = {
    Q: 'Chant: Hey!', W: 'Clap', E: 'Crash',
    A: 'Closed hi-hat', S: 'Open hi-hat', D: 'Percussion',
    Z: 'Snare', X: 'Kick one', C: 'Kick two'
};

// It's good performance-wise to cache the audio elements as we are setting the volume globally to every element.
let audioElements = [];

function playSound(id, setterCallback) {
    const ele = document.getElementById(id);
    ele.currentTime = 0;
    ele.play();
    ele.parentElement.style.backgroundColor = "#800080";
    ele.parentElement.style.fontSize = "3rem";
    setTimeout(() => { ele.parentElement.style.backgroundColor = ""; ele.parentElement.style.fontSize = "" }, 100);
    setterCallback(descriptions[id]);
}



function DrumMachine() {
    const [displayDescription, setDisplayDescription] = useState('');
    const [volume, setVolume] = useState(1);
    useEffect(() => {
        initKeyboard(playSound, setDisplayDescription);
        audioElements = Array.from(document.getElementsByClassName('clip'));
    }, []);

    useEffect(() => {
        audioElements.forEach(element => {
            element.volume = volume
        });
    }, [volume])


    return (
        <div id="drum-machine">
            <div id="button-container">
                <div className="btn-row">
                    <button className="drum-pad" id="chant" onClick={() => playSound('Q', setDisplayDescription)}>Q<audio className="clip" id="Q" src="/Audio/chant.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="clap" onClick={() => playSound('W', setDisplayDescription)}>W<audio className="clip" id="W" src="/Audio/clap.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="crash" onClick={() => playSound('E', setDisplayDescription)}>E<audio className="clip" id="E" src="/Audio/crash.mp3" preload="auto"></audio></button>
                </div>
                <div className="btn-row">
                    <button className="drum-pad" id="hat-closed" onClick={() => playSound('A', setDisplayDescription)}>A<audio className="clip" id="A" src="/Audio/hat_closed.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="hat-open" onClick={() => playSound('S', setDisplayDescription)}>S<audio className="clip" id="S" src="/Audio/hat_open.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="perc" onClick={() => playSound('D', setDisplayDescription)}>D<audio className="clip" id="D" src="/Audio/perc.mp3" preload="auto"></audio></button>
                </div>
                <div className="btn-row">
                    <button className="drum-pad" id="snare" onClick={() => playSound('Z', setDisplayDescription)}>Z<audio className="clip" id="Z" src="/Audio/snare.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="kick-1" onClick={() => playSound('X', setDisplayDescription)}>X<audio className="clip" id="X" src="/Audio/kick_1.mp3" preload="auto"></audio></button>
                    <button className="drum-pad" id="kick-2" onClick={() => playSound('C', setDisplayDescription)}>C<audio className="clip" id="C" src="/Audio/kick_2.mp3" preload="auto"></audio></button>
                </div>
            </div>
            <div id="controls">
                <p id="display"><MusicNoteIcon />{displayDescription}</p>
                <div id="volume-control">
                    <AudioSlider volumeSetter={setVolume} />
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;
