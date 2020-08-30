import React,{useState} from 'react';

class CountdownForm extends React.Component {
    //  onSubmit(e) {
    //    //This will give you string for seconds. Do not remove refs
    //    e.preventDefault();
    //     var secondsStr = this.refs.seconds.value;
    //     console.log(secondsStr);
    // }

    render() {
        let {onSetCountdownTime}= this.props;
        return (
            <div>

                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button success expanded" value="Start Countdown" onClick={()=>{
                        onSetCountdownTime(this.refs.seconds.value);
                    }}>Button</button>
           
            </div>
        );
    }
}

export default CountdownForm;