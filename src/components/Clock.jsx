import React from 'react';

class Clock extends React.Component {

    formatTime(timeInSec) {   
        let counter=setInterval(timer, 1000);
        function timer(){
            if(timeInSec>=0){
        let timeInSeconds =timeInSec-- ;
        console.log('there',timeInSeconds);
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }
    }
    return timer();
    }

    render() {
         var sec = this.props.value;
         console.log(sec)
         console.log('where',this.timeInSec);
        //Keep the classes name. Try to inject your code and do not remove existing code
        return (
            <div className="clock">
                <span className="clock-text">
                {this.formatTime(parseInt(sec))}
                </span>
            </div>
        );
    }
}



export default Clock;

// // import React from 'react';

// class Clock extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             sec : this.props.second,
//             res : ""
//         }
//     }
//     componentDidMount = () => {
//         setInterval(this.formatTime, 1000);
//         this.setState({
//             sec : 
//         })
//     }
//     componentDidUpdate = () => {
//         setInterval(this.formatTime, 1000);
//     }
//     formatTime(timeInSec) {   
        
//         function timer(){
//             if(timeInSec>=0){
//         let timeInSeconds =timeInSec-- ;
//         console.log('there',timeInSeconds);
//         var seconds = timeInSeconds % 60;
//         var minutes = Math.floor(timeInSeconds / 60);

//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }

//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }

//         return minutes + ':' + seconds;
//     }
//     }
//     return timer();
//     }

//     render() {
//          var sec = this.props.value;
//          console.log(sec)
//          console.log('where',this.timeInSec);
//         //Keep the classes name. Try to inject your code and do not remove existing code
//         return (
//             <div className="clock">
//                 <span className="clock-text">
//                 {/* {this.formatTime(parseInt(sec))} */}

//                 </span>
//             </div>
//         );
//     }
// }



// export default Clock;